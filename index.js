document.addEventListener("DOMContentLoaded", function () {
  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector("#popup");
  const menu = document.querySelector("#menu").cloneNode(1);
  const body = document.body;
  const links = Array.from(menu.children);

  hamb.addEventListener("click", hambHandler);

  function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopap();
  }

  function renderPopap() {
    popup.appendChild(menu);
  }

  links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });

  function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
  }
const radioButtons = document.querySelectorAll('input[type=radio]');


const slideShow = () => {
 for(let i =0; i<radioButtons.length; i++){
   setInterval(() => {
     console.log()
   }, 3000)
 }
}


slideShow();


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.main-festival__logo');
let elements1 = document.querySelectorAll('.anime');
let elements2 = document.querySelectorAll('.animation-botton');
let elements3 = document.querySelectorAll('.anime-big');
let elements4 = document.querySelectorAll('.anime-small');

for (let elm of elements) {
  observer.observe(elm);
}
for (let elm of elements1) {
  observer.observe(elm);
}
for (let elm of elements2) {
  observer.observe(elm);
}
for (let elm of elements3) {
  observer.observe(elm);
}
for (let elm of elements4) {
  observer.observe(elm);
}
}

)


