const sections = document.querySelectorAll(".section"),
style = document.getElementById('style')
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
contactLeft = document.getElementById('contact-left'),
abtLeft = document.getElementById('abt-left'),
abtRight = document.getElementById('abt-right'),
contactRight = document.getElementById('contact-right')
//insert your projects in array below named projects in following format
//[img address, name, hosted site link, github reposatory link]
projectsArr = [
['img/ChatGPT_Blog.png','ChatGPT Blog','https://kerry-space.github.io/chatgptLandingpage/index.html#about','https://github.com/davidIvankov/chatgptLandingpage'],
['img/twitchApi.png','Twich api using app', 'https://davidivankov.github.io/twitchApi/','https://github.com/davidIvankov/twitchApi'],
['img/wikipediaviewer.png','Wikipedia viewer', 'https://davidivankov.github.io/Wikipedia-vieawer/', 'https://github.com/davidIvankov/Wikipedia-viewer'],
['img/myWeatherApp.png','My Weather App', 'https://davidivankov.github.io/myWeatherApp/', 'https://github.com/davidIvankov/myWeatherApp'],
['img/d3-treeMap.png','Movie sales tree map', 'http://davidivankov.github.io/treemap/', 'https://github.com/davidIvankov/treemap'],
['img/choroplethMap.png','Education map of USA','http://davidivankov.github.io/d3-choropleth-map/','https://github.com/davidIvankov/d3-choropleth-map'],
['img/signUpPage.png','Sign Up Page','https://davidivankov.github.io/Sign-Up_Form/','https://github.com/davidIvankov/Sign-Up_Form'],
['img/adminDashboard.png','Admin Dashboard','https://davidivankov.github.io/Admin_Dashboard/','https://github.com/davidIvankov/Admin_Dashboard'],
['img/barChart.png','GDP Bar Chart','http://davidivankov.github.io/d3-barChart/','https://github.com/davidIvankov/d3-barChart'],
['img/25+5-CLOCK.png','25+5 Clock','http://davidivankov.github.io/25-5Clock/','https://github.com/davidIvankov/25-5Clock'],
['img/drumMachine.png','Drum Machine','http://davidivankov.github.io/drumMachin.github.io/','https://github.com/davidIvankov/drumMachin.github.io'],
['img/markdownPreviewer.png','Markdown Previewer','http://davidivankov.github.io/MarkDownPreviewer/','https://github.com/davidIvankov/MarkDownPreviewer'],
['img/quoteMachine.png','Quote Machine','http://davidivankov.github.io/quoteMachine/','https://github.com/davidIvankov/quoteMachine'],
['img/heatMap.png','','http://davidivankov.github.io/d3-heatmap/','https://github.com/davidIvankov/d3-heatmap']
];

let loaded = false,
portfolioItems = document.querySelectorAll('portfolio-item'),
width = screen.width;

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
  
  for (let i=0; i<projectsArr.length; i++) {
     
    let project = new Project(projectsArr[i][0],projectsArr[i][1],projectsArr[i][2],projectsArr[i][3]);
    createElement(project)
  }
 const projectItems = document.querySelectorAll('.portfolio-item')
 if (width <= 425) {
  projectaAnimation(projectItems)
 }
  loaded = true
  console.log(loaded)
  setTimeout(()=>{
    footer.classList.remove('absolute')}, 1000)
    portfolioItems = projectItems;
},

projectaAnimation=function(port){
port.forEach((projectItem, i)=>{
  setTimeout(()=>{projectItem.classList.add('projectAnimation')}, i *100)
})

},
createElement = function(project) {
 const {image, title, siteSrc, codeSrc} = project;
 const projectDiv = `<div class="portfolio-item">
                      <div class='image'>
                       <img src='${image}' alt='${title}'>
                      </div>
                      <div class='hover-items'> 
                       <h3>${title}</h3>
                       <div class='icons'>
                        <a href='${siteSrc}' aria-label='site hosting link' class='icon'>
                         <i class='fa fa-globe' title='site'></i>
                        </a>
                        <a href='${codeSrc}' aria-label='code link' class='icon'>
                         <i class='fa fa-github' title='code link'></i>
                        </a>
                       </div>
                      </div>
                     </div>`;
  
 container.innerHTML += projectDiv;
},
render = function() {
 hrWork.addEventListener('animationend',()=>{
  h1Work.classList.remove('hidden')
  animation('.ml11', '.letters');
  setTimeout(()=>{if (!loaded) {
    displayProjects()
  } else {
  projectaAnimation(portfolioItems);
  }},500)
})

hr.addEventListener('animationend',()=>{
  h1.classList.remove('hidden')
  animation('.ml10', '.letters')
})

hrContact.addEventListener('animationend',()=>{
  h1Contact.classList.remove('hidden')
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
        initAnimation.classList.add('none')
        site.classList.remove('none')
        if (width > 425 ){
          sections.forEach((section)=>section.classList.remove('none'))
        }
    },450)
  
})

document.addEventListener('click',(e)=>{
  let id = e.target.dataset.id;
  let btn = e.target;

  if (id) {
    if (width <= 425 ) {
    if (id === 'my-work') {
      if (!loaded){
        //displayProjects();
        h1Contact.classList.add('hidden');
      h1.classList.add('hidden');
      } else {
        //projectaAnimation(portfolioItems)
        h1Contact.classList.add('hidden');
      h1.classList.add('hidden');
      }
      
    } else if (id === 'about-me'){
      portfolioItems.forEach(item=>{item.classList.remove('projectAnimation')})
      h1Work.classList.add('hidden')
      h1Contact.classList.add('hidden');
    } else if (id === 'contact-me') {
      portfolioItems.forEach(item=>{item.classList.remove('projectAnimation')})
      h1Work.classList.add('hidden')
      h1.classList.add('hidden');
    }
  sections.forEach(section => {
    section.classList.add('none')
    section.ariaHidden = 'true'
  });
  let selectedSection = document.getElementById(id);
  selectedSection.classList.remove('none')
  selectedSection.ariaHidden = 'false'
} else {
  sections.forEach(section => {
    section.classList.add('displaced')
  });
  let selectedSection = document.getElementById(id);
  selectedSection.classList.remove('displaced')
}
  } 

  

})
},
observableAnimations = function(){
  const observer = new IntersectionObserver(function(entries) {
  if (entries[0].target === hr) {
	if(entries[0].isIntersecting === true){
    console.log(entries[0])
		entries[0].target.classList.add('hrAnim');
  } else {
    entries[0].target.classList.remove('hrAnim');
    h1.classList.add('hidden')
  }
} else if (entries[0].target === hrContact) {
	if(entries[0].isIntersecting === true){
    console.log(entries[0])
		entries[0].target.classList.add('hrAnim');
  } else {
    entries[0].target.classList.remove('hrAnim');
    h1Contact.classList.add('hidden')
  }
} else if (entries[0].target === hrWork){
  if(entries[0].isIntersecting === true){
    console.log(entries[0])
		entries[0].target.classList.add('hrAnim');
  } else {
    entries[0].target.classList.remove('hrAnim');
    h1Work.classList.add('hidden')
  }
}
}, { threshold: [0] });

observer.observe(hr);
observer.observe(hrContact)
observer.observe(hrWork)
},
rightLeftAnimations = function() {
  const leftRight = new IntersectionObserver(function(entries) {
    if (entries[0].target === abtLeft) {
  if(entries[0].isIntersecting === true) {
    entries[0].target.classList.add('leftAnim')
    abtRight.classList.add('rightAnim')
  } else {
    abtRight.classList.remove('rightAnim')
    entries[0].target.classList.remove('leftAnim')
  }
} else if (entries[0].target === contactLeft) {
  if(entries[0].isIntersecting === true) {
    entries[0].target.classList.add('leftAnim')
    contactRight.classList.add('rightAnim')

  } else {
    entries[0].target.classList.remove('leftAnim');
    contactRight.classList.remove('rightAnim')
  }
}
}, { threshold: [0] });
leftRight.observe(abtLeft);
leftRight.observe(contactLeft);
},
projectFade = function(){

  const fade = new IntersectionObserver(function(entries) {
  if(entries[0].isIntersecting === true) {
    entries[0].target.classList.add('fadeIn')
  } else {
    entries[0].target.classList.remove('fadeIn');
  }
}, { threshold: [0] });
  
portfolioItems.forEach(project=>{
 fade.observe(project)
})
}
setDisplay = function() {
  if (width <= 425) {
    render();
  } else {
    style.href = 'desktop.css'
    render();
    observableAnimations();
    rightLeftAnimations();
    displayProjects();
    projectFade();
  }
};

window.addEventListener('resize',()=>{
  location.reload();
  width = screen.width
  observableAnimations();
  setDisplay();
  
})
setDisplay();
