const sections = document.querySelectorAll(".section"),
navLinks = document.querySelectorAll('.nav-link'),
imig = document.getElementById('imig'),
figcap = document.getElementById('figcap'),
site = document.getElementById('site'),
initAnimation = document.getElementById('init-animation'),
hr = document.getElementById('hr'),
hrWork = document.getElementById('hr-work'),
hrContact = document.getElementById('hr-contact'),
h1 = document.getElementById('h1'),
h1Work = document.getElementById('h1-work'),
h1Contact = document.getElementById('h1-contact'),
footer = document.getElementById('footer'),
container = document.getElementById('container'),
//insert your projects in array below named projects in following format
//[img address, name, hosted site link, github reposatory link]
projectsArr = [
['img/twitchApi.png','Twich api using app', 'https://davidivankov.github.io/twitchApi/','https://github.com/davidIvankov/twitchApi'],
['img/wikipediaviewer.png','Wikipedia viewer', 'https://davidivankov.github.io/Wikipedia-vieawer/', 'https://github.com/davidIvankov/Wikipedia-viewer'],
['img/myWeatherApp.png','My Weather App', 'https://davidivankov.github.io/myWeatherApp/', 'https://github.com/davidIvankov/myWeatherApp'],
['img/d3-treeMap.png','Movie sales tree map', 'http://davidivankov.github.io/treemap/', 'https://github.com/davidIvankov/treemap'],
['img/choroplethMap.png','Education map of USA','http://davidivankov.github.io/d3-choropleth-map/','https://github.com/davidIvankov/d3-choropleth-map'],
['img/signUpPage.png','Sign Up Page','https://davidivankov.github.io/Sign-Up_Form/','https://github.com/davidIvankov/Sign-Up_Form'],
['img/adminDashboard.png','Admin Dashboard','https://davidivankov.github.io/Admin_Dashboard/','https://github.com/davidIvankov/Admin_Dashboard'],
];

class Project {
  constructor(image, title, siteSrc, codeSrc) {
    this.image = image;
    this.title = title;
    this.siteSrc = siteSrc;
    this.codeSrc = codeSrc
  }
}


const animation = function(thing1, thing2){
  let textWrapper = document.querySelector(`${thing1} ${thing2}`);
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: `${thing1} .letter`,
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  });
},
displayProjects = function() {
  setTimeout(()=>{
  for (let i=0; i<projectsArr.length; i++) {
     setTimeout(()=>{
    let project = new Project(projectsArr[i][0],projectsArr[i][1],projectsArr[i][2],projectsArr[i][3]);
    createElement(project)},i*100)
  }},500)
  setTimeout(()=>footer.classList.remove('absolute'), 1000)
  
},
createElement = function(project) {
 const {image, title, siteSrc, codeSrc} = project;

  const projectDiv = document.createElement("div");
  projectDiv.classList.add('portfolio-item');
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('image');
  const img = document.createElement('img');
  img.src = image;
  img.alt = title;
  const hoverItems = document.createElement('div');
  hoverItems.classList.add('hover-items');
  const aSite = document.createElement('a');
  aSite.classList.add('icon');
  aSite.ariaLabel = 'site hosting link'
  aSite.target='_blank'
  aSite.href = siteSrc;
  const git = document.createElement('i');
  git.classList.add('fa')
  git.classList.add('fa-github');
  git.ariaLabel = 'github page'
  git.title='github page'
  const aCode = document.createElement('a');
  aCode.target = '_blank';
  aCode.classList.add('icon')
  aCode.href = codeSrc;
  const site = document.createElement('i');
  site.classList.add('fa')
  site.classList.add('fa-globe');
  site.title='site'
  const h3 = document.createElement('h3');
  h3.innerText = title;
  const icons = document.createElement('div');
  icons.classList.add('icons');

  container.appendChild(projectDiv);
  projectDiv.appendChild(imageDiv);
  imageDiv.appendChild(img);
  projectDiv.appendChild(hoverItems);
  hoverItems.appendChild(h3);
  hoverItems.appendChild(icons);
  icons.appendChild(aCode);
  icons.appendChild(aSite);
  aCode.appendChild(git);
  aSite.appendChild(site)



}

hrWork.addEventListener('animationend',()=>{
  h1Work.classList.remove('hidden')
  animation('.ml11', '.letters')
  displayProjects()
})

hr.addEventListener('animationend',()=>{
  animation('.ml10', '.letters')
})

hrContact.addEventListener('animationend',()=>{
  animation('.ml12', '.letters')
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

  if (id) {
    if (id !== 'my-work') {
      h1Work.classList.add('hidden')
      footer.classList.remove('absolute')
    } else {
      footer.classList.add('absolute')

    }
    
    container.innerHTML = ''
  sections.forEach(section => {
    section.classList.add('hidden')
    section.ariaHidden = 'true'
  });
  let selectedSection = document.getElementById(id);
  selectedSection.classList.remove('hidden')
  selectedSection.ariaHidden = 'false'
  } 
})