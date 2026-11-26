
const OWNER='Neuroinfectologia', REPO='neuroinfectologia.github.io', BRANCH='main';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function niceName(path){return path.split('/').pop().replace(/\.[^.]+$/,'').replace(/[_-]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase());}
async function listTree(path){
  const url=`https://api.github.com/repos/${OWNER}/${REPO}/contents/${path.split('/').map(encodeURIComponent).join('/')}?ref=${BRANCH}`;
  const r=await fetch(url); if(!r.ok) throw new Error(`GitHub API ${r.status}`);
  const items=await r.json(); let all=[];
  for(const item of items){
    if(item.type==='dir'){all=all.concat(await listTree(item.path));}
    else if(item.type==='file' && !/^readme\.md?$/i.test(item.name) && !/^\.gitkeep$/i.test(item.name)){
      all.push({name:item.name,path:item.path,url:item.download_url,html:item.html_url,size:item.size});
    }
  }
  return all;
}
function renderFiles(files){
 const root=document.querySelector('#repository-content');
 if(!files.length){root.innerHTML='<div class="empty-state"><strong>Acervo em organização</strong>Os materiais desta seção serão disponibilizados aqui à medida que forem adicionados ao repositório institucional.</div>';return;}
 const images=files.filter(f=>/\.(png|jpe?g|webp|gif)$/i.test(f.name));
 const docs=files.filter(f=>!/\.(png|jpe?g|webp|gif)$/i.test(f.name));
 let html='';
 if(images.length){html+='<div class="gallery-grid">'+images.map(f=>`<figure class="gallery-item"><a href="${esc(f.url)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(f.url)}" alt="${esc(niceName(f.path))}"></a><figcaption>${esc(niceName(f.path))}</figcaption></figure>`).join('')+'</div>';}
 if(docs.length){html+='<div class="file-grid">'+docs.map(f=>{const ext=(f.name.split('.').pop()||'FILE').toUpperCase();return `<article class="file-card"><div class="file-icon">${esc(ext.slice(0,4))}</div><div><h3>${esc(niceName(f.path))}</h3><p>${esc(f.path)} · ${(f.size/1024/1024).toFixed(f.size>1048576?1:0)} MB</p><div class="file-actions"><a href="${esc(f.url)}" target="_blank" rel="noopener">Visualizar / abrir</a><a href="${esc(f.url)}" download>Baixar arquivo</a></div></div></article>`}).join('')+'</div>';}
 root.innerHTML=html;
}
document.addEventListener('DOMContentLoaded',async()=>{
 const btn=document.querySelector('.nav-toggle'),nav=document.querySelector('.main-nav');
 btn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
 const path=document.body.dataset.repoPath, root=document.querySelector('#repository-content');
 if(!path||!root)return;
 try{root.innerHTML='<p class="loading">CONSULTANDO O ACERVO INSTITUCIONAL…</p>';renderFiles(await listTree(path));}
 catch(e){root.innerHTML='<div class="empty-state"><strong>Não foi possível carregar o acervo automaticamente.</strong>Consulte os arquivos diretamente no <a href="https://github.com/'+OWNER+'/'+REPO+'/tree/main/'+path.split('/').map(encodeURIComponent).join('/')+'" target="_blank" rel="noopener">repositório da LANI</a>.</div>';console.error(e);}
});
