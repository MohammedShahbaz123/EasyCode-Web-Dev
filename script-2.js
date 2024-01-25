let menu=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');
let sections=document.querySelectorAll('.section');
let navlink=document.querySelectorAll('header nav a');


menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
                navbar.classList.remove('active'); 
                menu.classList.remove('fa-times');
            })
        }
    })
}
