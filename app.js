const toggleBtn = document.querySelector(".btn-toggle")
const links = document.querySelector('.links')
console.log(toggleBtn);

toggleBtn.addEventListener('click', function(){
    links.classList.toggle('show-links')
})

