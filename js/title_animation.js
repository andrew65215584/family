const el1 = document.querySelector('.about__title:not(.hidden)');
const el2 = document.querySelector('.ourMission__title');
const el3 = document.querySelector('.usage__title');
const el4 = document.querySelector('.people__title');
const el5 = document.querySelector('.cooperation__title:not(.hidden)');

const observer = new IntersectionObserver(entries => {
    if(entries[0].target.classList.contains('about__title')){
        el1.classList.add( 'animation', entries[0].isIntersecting );
    } else if(entries[0].target.classList.contains('ourMission__title')){
        el2.classList.add( 'animation', entries[0].isIntersecting );
    } else if(entries[0].target.classList.contains('usage__title')){
        el3.classList.add( 'animation', entries[0].isIntersecting );
    } else if(entries[0].target.classList.contains('people__title')){
        el4.classList.add( 'animation', entries[0].isIntersecting );
    } else if(entries[0].target.classList.contains('cooperation__title')){
        el5.classList.add( 'animation', entries[0].isIntersecting );
    }
});

observer.observe( el1 );
observer.observe( el2 );
observer.observe( el3 );
observer.observe( el4 );
observer.observe( el5 );