document.addEventListener('DOMContentLoaded',
function(){
    let ketik = new TypeIt('#typing', {})
    for(let i=1;i<100 ; i++){
        ketik.type('akuu adalah manusia').pause(1000).delete(20).type('rama suka kering').pause(1000).delete(20)
    }
    ketik.go()
})

//tombol toggle header
let hamburger = document.getElementById('hamburger-button')
let header = document.getElementById('header')
let main = document.getElementById('main')
let apakahDisembunyikan = false

hamburger.addEventListener('click', function(){
    if(apakahDisembunyikan == false){
        header.classList.add('hidden')
        main.classList.add('ful-width')
        hamburger.innerHTML = "<i class='fa-solid fa-bars'></i>"
        apakahDisembunyikan = true
    }else{
        header.classList.remove('hidden')
        main.classList.remove('full-width')
        hamburger.innerHTML = "<i class='fa-solid fa-times'></i>"
        apakahDisembunyikan = false
    }
})

// saat dokumen website di scroll
window.onscroll =  function(){
    if(document.body.scrollTop > main.offsetTop || document.documentElement.scrollTop > main.offsetTop){
        hamburger.classList.add('active')
    }else{
        hamburger.classList.remove('active')
    }
}