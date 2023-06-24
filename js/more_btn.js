const btnMore = document.getElementById('content_btn')
btnMore.addEventListener('click', function (){
    const content = document.getElementById('content')
    content.classList.toggle('limited')
    btnMore.classList.add('isVisible')
})
const btnMore2 = document.getElementById('cooperation_btn')
btnMore2.addEventListener('click', function (){
    const content = document.getElementById('cooperation__content')
    content.classList.toggle('limited')
    btnMore2.classList.add('isVisible')
})