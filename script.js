const sections = document.querySelectorAll(".section"),
navLinks = document.querySelectorAll('.nav-link'),
imig = document.getElementById('imig'),
figcap = document.getElementById('figcap'),
site = document.getElementById('site'),
initAnimation = document.getElementById('init-animation'),
hr = document.getElementById('hr'),
h1 = document.getElementById('h1');

const animation = function(){
  let textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  });
}

hr.addEventListener('animationend',()=>{
  h1.classList.remove('hidden')
  animation()
})


navLinks.forEach(navLink =>{
    navLink.addEventListener('click',()=>{
        navLinks.forEach(navLink => navLink.parentElement.classList.remove('link-active'))
        navLink.parentElement.classList.add('link-active')
    })
})
imig.addEventListener('animationend', ()=>{
    imig.classList.add('opac')
    figcap.classList.add('opac')
    setTimeout(()=>{
        initAnimation.classList.add('hidden')

        site.classList.remove('hidden')


    },450)
})

document.addEventListener('click',(e)=>{
  let id = e.target.dataset.id;
  let btn = e.target;

  sections.forEach(section => {
    section.classList.add('hidden')
    section.ariaHidden = 'true'
  });
  let selectedSection = document.getElementById(id);
  selectedSection.classList.remove('hidden')
  selectedSection.ariaHidden = 'false'

})