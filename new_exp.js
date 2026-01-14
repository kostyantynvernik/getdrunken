(function() {
var targetUrl = '/pages/builder'; 
var xhr = new XMLHttpRequest();
xhr.open('GET', targetUrl, true);
xhr.onreadystatechange = function() {
if (xhr.readyState === 4 && xhr.status === 200) {
var parser = new DOMParser();
var doc = parser.parseFromString(xhr.responseText, 'text/html');
var remoteContent = doc.querySelector('#main_content') || doc.body;
var container = document.querySelector('#shopify-section-template--18825292677346__bf_freshly_baked_homepage_Wq3zBH');
if (container && remoteContent) {
container.innerHTML = remoteContent.innerHTML;
}
var allScripts = doc.querySelectorAll('script');
for (var i = 0; i < allScripts.length; i++) {
var oldScript = allScripts[i];
var src = oldScript.getAttribute('src') || '';
if (src.indexOf('gtm.js') !== -1 || src.indexOf('analytics.js') !== -1 || src.indexOf('googletagmanager') !== -1) {
continue; 
}
var newScript = document.createElement('script');
for (var j = 0; j < oldScript.attributes.length; j++) {
var attr = oldScript.attributes[j];
newScript.setAttribute(attr.name, attr.value);
}
if (oldScript.innerHTML) {
newScript.innerHTML = oldScript.innerHTML;
}
 document.head.appendChild(newScript);
}
document.querySelector('#rating-block-template--18825292841186__main').style.display="none";
document.querySelector('h2.builder-right-mainheading').style.display="none"; 
document.querySelector('.builder-summary__header').style.display="none";

document.querySelector('.footer-delivery-text').style.marginBottom = '20px';
document.querySelector('.builder-summary__footer').insertBefore(document.querySelector('.footer-delivery-text'), document.querySelector('.builder-summary__footer').firstChild);

document.querySelector('.builder-summary__footer').insertAdjacentHTML('beforeend', `
<div style="padding-top: 25px;"><table style="width:100%;border:none !important;margin-bottom: 0 !important;"><tr><td style="border-right: 0 !important;text-align: center;" class="indertopmaindci"><div><img style="width: 50px;display: inline;padding-bottom:10px" src="https://raw.githubusercontent.com/kostyantynvernik/getdrunken/refs/heads/main/Frame%20543.png"></div><div>Island-Wide Delivery</div></td>
<td style="border-right: 0 !important;text-align: center;" class="indertopmaindci"><div><img style="width: 43px;display: inline;padding-bottom:10px" src="https://raw.githubusercontent.com/kostyantynvernik/getdrunken/refs/heads/main/Group.png"></div><div>Baked in Puerto Rico</div></td>
<td style="border-right: 0 !important;text-align: center;" class="indertopmaindci"><div><img class="ssss1" style="width: 40px;padding: 0 5px 10px 0;display: inline;" src="https://raw.githubusercontent.com/kostyantynvernik/getdrunken/refs/heads/main/Vector.png"></div><div>Fresh baked daily</div></td></tr></table>
</div>`);
 
}
};
xhr.send();
})();