const menu = document.querySelector('#listNav');
const bgMain = document.querySelector('.bg-main');
    function menuBar(e)
    {
        if(e.name == 'menu' ? ((e.name = 'close'),(menu.classList.toggle('hidden')),(menu.classList.add('absolute','top-[12%]','p-6','space-y-3')),
    (bgMain.classList.add('bg-gradient-to-b','from-zinc-800','to-scale-150'))) 
            :((e.name = 'menu'),(menu.classList.toggle('hidden')),(menu.classList.remove('absolute','top-[12%]','p-6','space-y-3')),(bgMain.classList.remove('bg-gradient-to-b','from-zinc-800','to-scale-150'))));
    }