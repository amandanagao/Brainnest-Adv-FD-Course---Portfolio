const sections = document.querySelectorAll(".section"),
navLinks = document.querySelectorAll('.nav-link'),
imig = document.getElementById('imig'),
figcap = document.getElementById('figcap'),
site = document.getElementById('site'),
initAnimation = document.getElementById('init-animation'),
hr = document.getElementById('hr'),
h1 = document.getElementById('h1'),
container = document.getElementById('container'),
//insert your projects in array below named projects in following format
//[img address, name, hosted site link, github reposatory link]
projectsArr = [
['img/twitchApi.png','Twich api using app', 'https://davidivankov.github.io/twitchApi/','https://github.com/davidIvankov/twitchApi'],
['img/wikipediaviewer.png','Wikipedia viewer', 'https://davidivankov.github.io/Wikipedia-vieawer/', 'https://github.com/davidIvankov/Wikipedia-viewer'],
['img/myWeatherApp.png','My Weather App', 'https://davidivankov.github.io/myWeatherApp/', 'https://github.com/davidIvankov/myWeatherApp'],
['img/d3-treeMap.png','Movie sales tree map', 'http://davidivankov.github.io/treemap/', 'https://github.com/davidIvankov/treemap'],
['img/choroplethMap.png','Education map of USA','http://davidivankov.github.io/d3-choropleth-map/','https://github.com/davidIvankov/d3-choropleth-map']];

class Project {
  constructor(image, title, siteSrc, codeSrc) {
    this.image = image;
    this.title = title;
    this.siteSrc = siteSrc;
    this.codeSrc = codeSrc
  }
}


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
},
displayProjects = function() {
  for (let i=0; i<projectsArr.length; i++) {
    let project = new Project(projectsArr[i][0],projectsArr[i][1],projectsArr[i][2],projectsArr[i][3]);
    createElement(project)
  }
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
  aSite.target='_blank'
  aSite.href = siteSrc;
  const git = document.createElement('i');
  git.classList.add('fa')
  git.classList.add('fa-globe');
  const aCode = document.createElement('a');
  aCode.target = '_blank';
  aCode.classList.add('icon')
  aCode.href = codeSrc;
  const site = document.createElement('i');
  site.classList.add('fa')
  site.classList.add('fa-github');
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

hr.addEventListener('animationend',()=>{
  h1.classList.remove('hidden')
  animation()
  setTimeout(displayProjects(),2000)
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
    h1.classList.add('hidden')
  sections.forEach(section => {
    section.classList.add('hidden')
    section.ariaHidden = 'true'
  });
  let selectedSection = document.getElementById(id);
  selectedSection.classList.remove('hidden')
  selectedSection.ariaHidden = 'false'
  } 
})