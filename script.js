const sections = document.querySelectorAll(".section"),
navLinks = document.querySelectorAll('.nav-link'),
imig = document.getElementById('imig'),
figcap = document.getElementById('figcap'),
site = document.getElementById('site'),
initAnimation = document.getElementById('init-animation')

navLinks.forEach(navLink =>{
    navLink.addEventListener('click',()=>{
        navLinks.forEach(navLink => navLink.classList.remove('link-active'))
        navLink.classList.add('link-active')
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