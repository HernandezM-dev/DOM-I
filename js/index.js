const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
// logo.toggleAttribute('src');
// logo.toggleAttribute('alt');

const cta = document.getElementById("cta-img");
cta.src = siteContent.cta["img-src"];
const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"]

const header1 = document.querySelector('h1')
header1.innerHTML = 'Dom <br> Is <br> Awesome';

const button = document.querySelector('button');
button.innerHTML = siteContent.cta.button;

const nav = document.querySelectorAll('nav');
const anchors = document.querySelectorAll('a');
let counter = 1;
anchors.forEach(text =>{
  text.innerHTML = siteContent.nav[`nav-item-${counter}`];
  text.style.color = 'green';
  counter++;
})

const mainH4 = document.querySelectorAll('h4');
const h4Text = [siteContent["main-content"]["features-h4"],siteContent["main-content"]["about-h4"],siteContent["main-content"]["services-h4"],siteContent["main-content"]["product-h4"],siteContent["main-content"]["vision-h4"],siteContent.contact["contact-h4"]]

function loop(element, arr){
  let i = 0;
  element.forEach(text =>{
    text.innerHTML = arr[i];
    i++;
  })
}
loop(mainH4, h4Text);

const mainP = document.querySelectorAll('p');
const pText = [siteContent["main-content"]["features-content"],siteContent["main-content"]["about-content"],siteContent["main-content"]["services-content"],siteContent["main-content"]["product-content"],siteContent["main-content"]["vision-content"], siteContent.contact.address, siteContent.contact.phone, siteContent.contact.email, siteContent.footer.copyright]
loop(mainP, pText);

let a = document.createElement('a');
nav.appendChild(a);

// topH4s[0].innerHTML = 'Features'
// // console.log(mainH4);
