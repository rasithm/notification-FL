const scroll = document.getElementById("scroll-bg")
const item = document.getElementById("item")
const handlingMouseOver = () => {
    scroll.style.display = "flex"
    item.removeEventListener('mouseover', handlingMouseOver);
    
}
item.addEventListener('mouseover', handlingMouseOver);