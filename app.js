function Menu(e){
    let bodyClick =document.querySelector("body");
    let list = document.querySelector("ul");
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]') , list.classList.add('opacity-100'), list.classList.remove('hidden')) :( e.name = "menu" , list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'), list.classList.add('hidden'))
    if(list.classList !== hidden){
      bodyClick.classList.add("hidden");
    }

    console.log(bodyClick);
  }

