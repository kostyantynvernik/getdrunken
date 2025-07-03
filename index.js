console.log('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'https://kostyantynvernik.github.io/getdrunken',
  dir: 'https://kostyantynvernik.github.io/getdrunken',
  clarity: ['set', 'trial_exp', 'variant_1'],
  debug: false // Set to true for debug mode
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
@media screen and (max-width: 600px){

.cg1 {border-top: 45px solid #FAF8F0;background:#FAF8F0;padding-bottom:75px;width:100%;text-align:center;}
#main_content {padding-top: 0!important;}
  #shopify-section-template--18825292677346__featured_video_3bGR74 {
   display:none!important;
   }
   #newmainbloacktop {background: linear-gradient(#3C3433, #231F20);height: 100%;width: 100%;overflow: hidden;position:relative;}
   newmainbloacktopchild_m{width: 0;position:inherit!important;}
   #newmainbloacktop1 {color:#FAF8F0;height: 537px;padding: 300px 0 80px 0;display: table;width: 100%;max-width: 1200px;margin: 0 auto;}
   .newmainbloacktopchild{display: table-cell;width: 100%;vertical-align: middle;}
  .starttext{font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
align-items: center;
color: #FAF8F0;
} 
.newmainbloacktopchild1 {text-align: center;}
.newmainbloacktopchild4{
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 39px;
line-height: 46px;
align-items: center;
letter-spacing: -1px;
text-transform: uppercase;
color: #FAF8F0;

text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}
//.swiper-slide-next {visibility:hidden!important}
.best-sellers-wrapper {display: flex !important;}
.cta--custom-wrapper {margin-top: 0!important;}
.best-sellers-container{padding: 0 30px!important;max-height: 100%!important;}
.best-sellers-wrapper {width:100%;max-height: 100%!important;}
.best-sellers-item-top {display: table-cell !important;width: 100%;padding-bottom: 5px;}
.newmainbloacktopchild5{font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;
text-transform: uppercase;
color: #FAF8F0;
margin-top:10px;
}
.newmainbloacktopchild2 {margin-top: 25px;text-align: center;padding-top:25px;}
.newmainbloacktopchild2sp{
box-sizing: border-box;

flex-direction: row;
justify-content: center;
align-items: center;
padding: 22.5px 36px;
width: 275px;
max-width: 800px;
height: 66px;
background: #E3AF63;
border: 4px solid #3C3433;
box-shadow: 0px 1px 0px #3C3433, 0px 2px 0px #3C3433, 0px 3px 0px #3C3433, 0px 4px 0px #3C3433, 0px 5px 0px #3C3433, 0px 6px 0px #3C3433, 0px 7px 0px #3C3433;
border-radius: 70px;
}
.newmainbloacktopchild2sp1 {
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 21px;
align-items: center;
text-align: center;
text-transform: uppercase;

color: #3C3433;
}
.imgstarr {height: 20px;width: 20px;vertical-align: sub;display: inline-table;margin-right: 10px;}
.startext {font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 26px;
align-items: center;
color: #FAF8F0;
}
.imgtop1 {display:none;
}
.imgtop1 img{display:none;
}
.imgtop2 {display:none;
}
.imgtop2 img{display:none;
}
.imgtop3 {
position: absolute;
width: 100%;
height: 100%;
left: 0;
top: 0;
transform: rotate(66.64deg);
}
.imgtop3 img{
position: absolute;
width: 121%;
height: 71%;
left: -349px;
top: -17px;
transform: rotate(7.64deg);
}
#indertopmain {
text-align: center;
padding: 25px 5px;
background: #FBEBD6;
}
.indertopmaind {display: inline-block;
padding: 0px;
gap: 40px;
max-width: 1500px;
}
.indertopmaindc {display: table-cell;width:33%;
padding: 0px;
gap: 20px;
}
.indertopmaindc table {border: none !important;width:100%;margin: 0 !important;}
.indertopmaindc td {padding:0!important;border: none !important;display:inherit;text-align: center;}
.indertopmaindci{border: none !important;}
.indertopmaindci img {height: 37.5px;padding: 0 15px 0 0;margin: 1px;display: initial;margin-bottom: 15px;}
.indertopmaindct{
font-style: normal;
font-weight: 800;
font-size: 14px;
line-height: 21px;
display: flex;
align-items: center;
text-transform: uppercase;
color: #3C3433;
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}
.indertopmaindcf{display:none!important;}
#section-template--18825292677346__best_sellers_qNrwn8{background-color: white!important;padding-bottom: 10px!important;}
.best-sellers--image-baner {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;

position: absolute;
width: 165.15px;
max-width: 711.76px;
height: 41.35px;
right:10px;
top: 11.57px;

background: #BA5125;
border-radius: 62px;
}
.best-sellers--image-baner a {
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;
color: #FAF8F0;
}
.best-sellers--title {display:none!important}
.best-sellers--price {display:none!important}
.footblockm
{
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 0px;
}
.footblockm1 {
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
margin: 0 auto;
}
.footblockm2 {
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
width: 100%;
margin: 40px 0 20px 0;
}
.footblockm3 {
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
display: flex;
text-align: left;
text-transform: uppercase;
color: #3C3433;
min-height: 95px;
}
.footblockm4 {
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
}
.footblockm5 {
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
color: #3C3433;
margin-right: 10px;
}
.footblockm6 {
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;
color: #3C3433;
}
.footblockm7 {
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
height: 120px;
align-items: center;
color: #3C3433;
}
.footblockm8 {
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 22.5px 36px;
margin: 25px auto 5px auto;
max-width: 800px;
height: 67px;
background: #E3AF63;
border: 4px solid #3C3433;
box-shadow: 0px 6px 0px 0px #3C3433;
border-radius: 70px;
}
.footblockm8 a {
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 22px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;

color: #3C3433;
}
.cta--custom-wrapper .cta--custom{display:none !important;}

#shopify-section-sections--18825288384738__header {position: absolute;
width: 100%;}
#shopify-section-template--18825292677346__best_sellers_qNrwn8 {background: linear-gradient(180deg, #3C3433 0%, #231F20 100%);}
.header--root {background: white !important;}
}




@media screen and (min-width: 601px){
//#main_content {padding-top: 0!important;}
  #shopify-section-template--18825292677346__featured_video_3bGR74 {
   display:none!important;
   }
   #newmainbloacktop {background: linear-gradient(#3C3433, #231F20);height: 537px;width: 100%;overflow: hidden;padding: 0 195px;}
   #newmainbloacktop1 {color:#FAF8F0;height: 537px;padding: 80px 0;display: table;width: 100%;max-width: 1435px;margin: 0 auto;}
   .newmainbloacktopchild{display: table-cell;width: 50%;vertical-align: middle;position:relative;}
  .starttext{font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
align-items: center;
color: #FAF8F0;
} 
.newmainbloacktopchild4{
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 60px;
line-height: 72px;
align-items: center;
letter-spacing: -1px;
text-transform: uppercase;
color: #FAF8F0;
display: flex;
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}
.newmainbloacktopchild5{font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-transform: uppercase;
color: #FAF8F0;
margin-top:10px;
}
.newmainbloacktopchild2 {margin-top: 25px;}
.newmainbloacktopchild2sp{
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 22.5px 36px;
width: 350px;
max-width: 800px;
height: 66px;
background: #E3AF63;
border: 4px solid #3C3433;
box-shadow: 0px 1px 0px #3C3433, 0px 2px 0px #3C3433, 0px 3px 0px #3C3433, 0px 4px 0px #3C3433, 0px 5px 0px #3C3433, 0px 6px 0px #3C3433, 0px 7px 0px #3C3433;
border-radius: 70px;
}
.newmainbloacktopchild2sp1 {
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 21px;

display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;

color: #3C3433;
}
.imgstarr {height: 20px;width: 116px;vertical-align: sub;display: inline-table;margin-right: 10px;}
.startext {font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
align-items: center;
color: #FAF8F0;
}
.imgtop1 {
  position: absolute;
  width: calc(50% - 40%/2 - -26%);
  left: calc(55% - 50%/2 - 26%);
  top: calc(50% - 95%/2 - 30%);
}
.imgtop1 img {
  position: absolute;
  left: calc(50% - 100%/2 + 0px);
  top: calc(5% - 0%/2 + 1px);
}
.imgtop2 {
  position: absolute;
  width: calc(50% - -25%/2 + 3%);
  height: 90%;
  left: calc(50% - 30%/2 + 3%);
  top: calc(50% - -20%/2 + 3%);
  transform: rotate(93.33deg);
}
.imgtop2 img {
  position: absolute;
  left: calc(50% - 80%/2 + 3%);
  top: calc(50% - 50%/2 - 40%);
  transform: rotate(93.33deg);
}
.imgtop3 {
  position: absolute;
  width: calc(60% - 33%/2 + 30%);
  height: 135%;
  left: calc(60% - 33%/2 + 15%);
  top: calc(55% - 80%/2 - 80%);
  transform: rotate(66.64deg);
}
.imgtop3 img {
  position: absolute;
  left: calc(50% - 45%/2 - 26%);
  top: calc(50% - 65%/2 - 30%);
  transform: rotate(66.64deg);
}
#indertopmain {
text-align: center;
padding: 40px 168px;
gap: 40px;
background: #FBEBD6;
}
.indertopmaind {display: inline-block;
padding: 0px;
gap: 40px;
max-width: 1500px;
}
.indertopmaindc {display: table-cell;width:33%;
padding: 0px 30px;
gap: 20px;
}
.indertopmaindc table {border: none !important;width:100%;margin: 0 !important;}
.indertopmaindc td {padding:0!important;border: none !important;}
.indertopmaindci{border: none !important;}
.indertopmaindci img {height: 37.5px;padding: 0 15px 0 0;margin: 1px;}
.indertopmaindct{
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-transform: uppercase;
color: #3C3433;
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}
.indertopmaindcf{text-transform: none !important;
font-weight: 500;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
text-transform: uppercase;
color: #3C3433;
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);}
#section-template--18825292677346__best_sellers_qNrwn8{background-color: white!important;padding-bottom: 10px!important;}
.best-sellers--image-baner {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;

position: absolute;
width: 165.15px;
max-width: 711.76px;
height: 41.35px;
right:10px;
top: 11.57px;

background: #BA5125;
border-radius: 62px;
}
.best-sellers--image-baner a {
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;
color: #FAF8F0;
}
.best-sellers--title {display:none!important}
.best-sellers--price {display:none!important}
.footblockm
{
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 0px;
}
.footblockm1 {
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
margin: 0 auto;
max-height: 265px;
overflow: hidden;
}
.footblockm2 {
  padding: 0px;
  width: 100%;
  margin: 40px 0 20px 0;
  min-height: 85px;
  display: table;
}
.footblockm3 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  display: table-cell;
  text-align: left;
  text-transform: uppercase;
  color: #3C3433;
}
.footblockm4 {
  display: table-cell;
  padding: 0px;
  vertical-align: top;
}
.footblockm5 {
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;

align-items: center;
color: #3C3433;
margin-right: 10px;
}
.footblockm6 {
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;

align-items: center;
text-align: center;
text-transform: uppercase;
color: #3C3433;
}
.footblockm7 {
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
height: 120px;
align-items: center;
color: #3C3433;
}
.footblockm8 {
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 22.5px 36px;
margin: 25px auto 0 auto;
max-width: 800px;
height: 67px;
background: #E3AF63;
border: 4px solid #3C3433;
box-shadow: 0px 6px 0px 0px #3C3433;
border-radius: 70px;
}
.footblockm8 a {
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 22px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;

color: #3C3433;
}
.cta--custom-wrapper .cta--custom{display:none !important;}


.cg1 {border-top: 45px solid #FAF8F0;background:#FAF8F0;padding-bottom:75px;width:100%;text-align:center;}

#section-template--18825292677346__how_it_works_XkGAdx {margin: 0 80px 100px 80px!important;}
#shopify-section-template--18825292677346__1640167859b5c16893 {margin: 80px 80px 10px 80px!important;}
#section-id-template--18825292677346__1640167859b5c16893 {padding: 105px 80px 80px 80px!important;}
h2.featured-grid--heading{max-width: 1400px;}
.fg12 {max-width: 380px;}

}
`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 20 })

  document.head.appendChild(stylesEl)

  console.log('** InitExp **')

 // handleHero()
  handlePackages()
}

function handleHero() {

}

function handlePackages() {

var outerWidth=window.outerWidth;

if (outerWidth<601){
var link = document.createElement("link");
link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
link.rel = "stylesheet";
document.head.appendChild(link);


var script1 = document.createElement("script");script1.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";script1.async = false;document.head.appendChild(script1);
}

const videoblock = document.getElementById('shopify-section-template--18825292677346__featured_video_3bGR74');

// Insert HTML after the existing element
videoblock.insertAdjacentHTML('afterend', `<div id="newmainbloacktop"><div id="newmainbloacktop1"><div class="newmainbloacktopchild">
<div class="newmainbloacktopchild1">
<div class="newmainbloacktopchild3"><span><img class="imgstarr" src="https://raw.githubusercontent.com/kostyantynvernik/getdrunken/505a5b3fcf08df7363afbf9d958d7ed1df017a5a/Frame%204.svg"></span><span class="startext">4,9 estrellas de más de 6000 amantes de las galletas</span></div>
<div class="newmainbloacktopchild4">LA GALLETA MÁS<br>
DESEADA DE<br>PUERTO RICO</div>
<div class="newmainbloacktopchild5">NUESTRAS GALLETAS SON GRANDES, RELLENAS Y HORNEADAS EN SAN JUAN.</div>
</div>
<div class="newmainbloacktopchild2"><span class="newmainbloacktopchild2sp"><a class="newmainbloacktopchild2sp1" href="https://getdrunken.com/es/pages/builder">¡Compra galletas ahora!</a></span></div>
</div><div class="newmainbloacktopchild newmainbloacktopchild_m">

<span class="imgtop1"><img src="https://raw.githubusercontent.com/kostyantynvernik/getdrunken/refs/heads/main/1_mainimg.png"></span>
<span class="imgtop2"><img src="https://raw.githubusercontent.com/kostyantynvernik/getdrunken/refs/heads/main/3_mainimg.png"></span>
<span class="imgtop3"><img src="https://raw.githubusercontent.com/kostyantynvernik/getdrunken/refs/heads/main/2_mainimg.png"></span>

</div></div></div>
<div id="indertopmain">
<div class="indertopmaind">
<div class="indertopmaindc"><table style="width:100%"><tr><td rowspan="2" style="border-right: 0 !important;" class="indertopmaindci"><img style="width: 60px;" src="https://raw.githubusercontent.com/kostyantynvernik/getdrunken/refs/heads/main/Group.png"></td><td class="indertopmaindct">Horneado en Puerto Rico</td></tr><tr><td class="indertopmaindcf"><div class="fg12">Horneadas y enviadas desde San Juan – justo al lado de tu casa, o para regalar.</div></td></tr></table></div>
<div class="indertopmaindc"><table style="width:100%"><tr><td rowspan="2" style="border-right: 0 !important;" class="indertopmaindci"><img style="width: 75px;" src="https://raw.githubusercontent.com/kostyantynvernik/getdrunken/refs/heads/main/Frame%20543.png"></td><td class="indertopmaindct">Envío a toda la isla</td></tr><tr><td class="indertopmaindcf"><div class="fg12">Entrega a toda la isla – o recoge desde nuestro local para pedidos grandes.</div></td></tr></table></div>
<div class="indertopmaindc"><table style="width:100%"><tr><td rowspan="2" style="border-right: 0 !important;" class="indertopmaindci"><img style="width: 50px;padding: 0 5px;" src="https://raw.githubusercontent.com/kostyantynvernik/getdrunken/refs/heads/main/Vector.png"></td><td class="indertopmaindct">Frescas horneadas diariamente</td></tr><tr><td class="indertopmaindcf"><div class="fg12">Horneadas frescas todos los días, a mano, con ingredientes reales.</div></td></tr></table></div>
</div>
</div>`);


document.querySelector('h2.stacked-text--title').innerHTML=document.querySelector('h2.stacked-text--title').innerHTML.replaceAll("Nuestros Más Vendidos","RECIÉN HORNEADAS");

document.querySelectorAll('.best-sellers--image')[0].style.position='relative';
var divimageban= document.createElement('span');
divimageban.className = 'best-sellers--image-baner';
divimageban.innerHTML = '<a href="https://getdrunken.com/es/pages/builder">Más Vendido</a>';
document.querySelectorAll('.best-sellers--image')[0].appendChild(divimageban);

document.querySelectorAll('.best-sellers--image')[2].childNodes[1].src='https://raw.githubusercontent.com/kostyantynvernik/getdrunken/refs/heads/main/img_three_second.png';



document.querySelectorAll('.best-sellers-container')[0].classList.add("swiper");

document.querySelectorAll('.swiper')[0].classList.add("mySwiper");
 
document.querySelectorAll('.best-sellers-wrapper')[0].classList.add("swiper-wrapper");

var block_prod01 = document.querySelectorAll('.best-sellers-item')[0];
var block_prod02 = document.createElement('div'); 
block_prod02.className = 'best-sellers-item-top';
block_prod02.classList.add("swiper-slide");
block_prod02.appendChild(block_prod01.cloneNode(true)); 
block_prod01.parentNode.replaceChild(block_prod02, block_prod01);
var block_prod0 = document.querySelectorAll('.best-sellers-item')[0];
var block_prod_new0 = `<div class="footblockm">
<div class="footblockm1">
<div class="footblockm2">
<div class="footblockm3">Crea Tu Propio Surtido De Galletas</div><div class="footblockm4"><span class="footblockm5">Desde</span><span class="footblockm6">$36</span></div>
</div>
<div class="footblockm7">¡Personaliza tu caja perfecta con 6 o 12 galletas! Elige entre nuestros sabores clásicos y semanales para mezclar y combinar tus favoritos.</div>
</div>
<div class="footblockm8"><a href="https://getdrunken.com/es/pages/builder">¡Compra galletas ahora!</a></div>
</div>`;
block_prod0.insertAdjacentHTML('afterend', block_prod_new0);



var block_prod11 = document.querySelectorAll('.best-sellers-item')[1];
var block_prod12 = document.createElement('div'); 
block_prod12.className = 'best-sellers-item-top';
block_prod12.classList.add("swiper-slide");
block_prod12.appendChild(block_prod11.cloneNode(true)); 
block_prod11.parentNode.replaceChild(block_prod12, block_prod11);
var block_prod1 = document.querySelectorAll('.best-sellers-item')[1];
var block_prod_new1 = `<div class="footblockm">
<div class="footblockm1">
<div class="footblockm2">
<div class="footblockm3">Paquete de 6 Chocolate Chip Shot Cups</div><div class="footblockm4"><span class="footblockm5"></span><span class="footblockm6">$36</span></div>
</div>
<div class="footblockm7">Nuestras famosas galletas con chispas de chocolate se han transformado en vasitos para shots y se han cubierto con una capa de chocolate para evitar derrames.</div>
</div>
<div class="footblockm8"><a href="https://getdrunken.com/es/products/6-pack-chocolate-chip-cookie-shots">¡Compra galletas ahora!</a></div>
</div>`;
block_prod1.insertAdjacentHTML('afterend', block_prod_new1);




var block_prod21 = document.querySelectorAll('.best-sellers-item')[2];
var block_prod22 = document.createElement('div'); 
block_prod22.className = 'best-sellers-item-top';
block_prod22.classList.add("swiper-slide");
block_prod22.appendChild(block_prod21.cloneNode(true)); 
block_prod21.parentNode.replaceChild(block_prod22, block_prod21);
var block_prod2 = document.querySelectorAll('.best-sellers-item')[2];
var block_prod_new2 = `<div class="footblockm">
<div class="footblockm1">
<div class="footblockm2">
<div class="footblockm3">Paquete de 6 Galletas Favoritas de Los Clientes</div><div class="footblockm4"><span class="footblockm5"></span><span class="footblockm6">$36</span></div>
</div>
<div class="footblockm7">Una selección de 6 o 12 de nuestros productos más vendidos actualmente. Nuestro menú cambia cada semana, por lo que los pedidos pueden variar según la semana.</div>
</div>
<div class="footblockm8"><a href="https://getdrunken.com/es/products/6-pack-cookie-favorites">¡Compra galletas ahora!</a></div>
</div>`;
block_prod2.insertAdjacentHTML('afterend', block_prod_new2);



var block_prod31 = document.querySelectorAll('.best-sellers-item')[3];
var block_prod32 = document.createElement('div'); 
block_prod32.className = 'best-sellers-item-top';
block_prod32.classList.add("swiper-slide");
block_prod32.appendChild(block_prod31.cloneNode(true)); 
block_prod31.parentNode.replaceChild(block_prod32, block_prod31);
var block_prod3 = document.querySelectorAll('.best-sellers-item')[3];
var block_prod_new3 = `<div class="footblockm">
<div class="footblockm1">
<div class="footblockm2">
<div class="footblockm3">Paquete de 6 Cookies & Cream Shot Cups</div><div class="footblockm4"><span class="footblockm5"></span><span class="footblockm6">$36</span></div>
</div>
<div class="footblockm7">Nuestros exclusivos vasos de chupito con forma de galleta están esmaltados con un delicioso interior de chocolate para que nunca tengas que preocuparte por las fugas.</div>
</div>
<div class="footblockm8"><a href="https://getdrunken.com/es/products/6-pack-cookies-cream-cookie-shots">¡Compra galletas ahora!</a></div>
</div>`;
block_prod3.insertAdjacentHTML('afterend', block_prod_new3);



document.querySelectorAll('#section-template--18825292677346__best_sellers_qNrwn8')[0].insertAdjacentHTML('afterend', '<div class="cg1"><img style="width:320px;margin: 20px;display: none;" src="https://raw.githubusercontent.com/kostyantynvernik/getdrunken/refs/heads/main/yelp1%20logo.png"><img style="width:320px;margin: 20px;display: none;" src="https://raw.githubusercontent.com/kostyantynvernik/getdrunken/refs/heads/main/yelp%20logo.png"></div>');



if (outerWidth<601){
  var swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
virtual: true 
    });
}

 pushDataLayer(
        'add_block top',
        'Block',
        'Videos',
        'Top'
      );
	  
	  
	  

}


// *** HELPERS *** //

// Waiting for loading by condition
async function waitFor(condition, cb = false, customConfig = {}) {
  const config = {
    ms: 500, // repeat each 0.5 second if condition is false
    limit: 10, // limit in second seconds

    ...customConfig
  }

  if (typeof condition === 'function') {
    if (condition()) {
      if (typeof cb === 'function') cb()
      return
    }

    return new Promise((resolve) => {
      let limit = config.limit * 1000
      const interval = setInterval(function () {
        if (condition() || limit <= 0) {
          clearInterval(interval)
          if (limit > 0 && typeof cb === 'function') cb()
          resolve()
        }
        limit -= config.ms
      }, config.ms)
    })
  }

  if (condition.startsWith('.') || condition.startsWith('#')) {
    if (_$(condition)) {
      if (typeof cb === 'function') cb(_$(condition))
      return
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if (_$(condition)) {
          if (typeof cb === 'function') cb(_$(condition))
          observer.disconnect()
          resolve()
        }
      })

      observer.observe(document, { childList: true, subtree: true })
    })
  }
}

// Mutation Observer
function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

  if (!el) return

  let observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          cbAdded(node, observer)
        }
      }

      if (typeof cbRemoved === 'function') {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue
          cbRemoved(node, observer)
        }
      }
    }
  })

  observer.observe(el, { childList: true, subtree: true })

  return observer
}

// Intersection Observer
function initIntersection(observeEl, cb, customConfig) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

  if (!el || typeof cb !== 'function') return

  const config = {
    root: null,
    threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
    ...customConfig
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      cb(entry, observer)
    })
  }, config)

  observer.observe(el)

  return observer
}

function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
  let entryTime = 0
  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        entryTime = time
      } else if (entryTime) {
        const diffTime = +((time - entryTime) / 1000).toFixed(1)
        cb(diffTime + 's')
        entryTime = 0
      }
    },
    { threshold: viewElementProcent }
  )
}

function visibilityEvent(el, cb, customConfig = {}) {
  const config = {
    threshold: 0.3,
    ...customConfig,
    timer: null
  }
  initIntersection(
    el,
    ({ isIntersecting, target }, observer) => {
      // console.log(target, isIntersecting);
      if (isIntersecting) {
        config.timer = setTimeout(() => {
          if (isElementInViewport(target)) {
            cb()
            observer.disconnect()
          }
        }, 3000)
      } else {
        clearTimeout(config.timer)
      }
    },
    config
  )
}

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? _$(selector) : selector

  if (!el) return false

  const rect = el.getBoundingClientRect()
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight

  return (
    rect.top + rect.height * 0.3 < windowHeight &&
    rect.bottom > rect.height * 0.3
  )
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
}

// Shordcode for selectors
function _$(selector, context = document) {
  return context.querySelector(selector)
}
function _$$(selector, context = document, toSimpleArray = false) {
  const arr = context.querySelectorAll(selector)

  return toSimpleArray ? Array.from(arr) : arr
}

// GA 4 events
function pushDataLayer(name = '', desc = '', type = '', loc = '') {
  window.dataLayer = window.dataLayer || []

  try {
    const event = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc
    }

    console.log('** GA4 Event **', event)

    if (!config.debug) {
      dataLayer.push(event)
    }
  } catch (e) {
    console.log('** GA4 Error **', e)
  }
}



// *** Exp BG process *** //

//Clarity
if (
  !config.debug &&
  Array.isArray(config.clarity) &&
  config.clarity.length === 3
) {
  waitFor(
    () => typeof clarity == 'function',
    () => {
      clarity(...config.clarity)
    }
  )
}

// Svg objects
function getSvg(name) {
  const svgObj = {}

  return svgObj[name]
}
