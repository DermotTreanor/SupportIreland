

function linkToGroup(){
    window.location.href = "./alcohol-addiction.html"
}

document.addEventListener("DOMContentLoaded", () => {
    const nav_elements = document.getElementsByTagName("nav");
    const nav_element = nav_elements[0];
    
    window.addEventListener("scroll", () => {
    let currentPosition = window.scrollY;
    let opacity = Math.max( 0.25 ,(0.8 - (currentPosition / 1000)))
    nav_element.style.backgroundColor = `rgba(97, 200, 202, ${opacity})`;
    });
})

