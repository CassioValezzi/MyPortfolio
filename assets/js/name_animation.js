window.addEventListener('scroll',()=>{
    let position = window.scrollY
    if (window.scrollY > 320) {
        document.querySelector("#myName").classList.add("animation-custom")
    }
})