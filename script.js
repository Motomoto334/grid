document.querySelector('.menu-btn').addEventListener('click', function(e){
    e.preventDefault();
    this.classList.toggle('menu-btn_active');
    document.querySelector('.menu').classList.toggle('menu_active');

})

