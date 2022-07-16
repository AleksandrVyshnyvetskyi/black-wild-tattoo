const hamburgerMenu = document.querySelector('.hamburger');
const menuIsActive = () => {
    hamburgerMenu.classList.toggle('active');
};
hamburgerMenu.addEventListener('click', menuIsActive)

document.querySelectorAll('.dropdown-menu__btn').forEach(e => { 
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e =>{
            if(hamburgerMenu.classList(`data`)) {
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active')
            }
        })
    })
})
