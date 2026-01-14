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


document.querySelectorAll('.builder-summary__footer button')[0].insertAdjacentHTML('afterend', '<button type="button" class="atc-btn cta--custom cta--custom-second atc-btn-disabled">Add to cart</button>');;
document.querySelectorAll('.builder-summary__footer button')[0].remove();

document.querySelectorAll('.builder-summary-mobile__footer button')[0].insertAdjacentHTML('afterend', '<button type="button" class="atc-btn cta--custom cta--custom-second atc-btn-mobile atc-btn-disabled">Add to cart</button>');;
document.querySelectorAll('.builder-summary-mobile__footer button')[0].remove();




var idsToWatch = ['summaryItems', 'summaryItemsMobile'];
var initObserver = function(elementId) {
var targetNode = document.getElementById(elementId);
if (!targetNode) return;
var fixQuantityText = function() {
var spans = targetNode.getElementsByTagName('span');
for (var i = 0; i < spans.length; i++) {
var text = spans[i].textContent || spans[i].innerText;
if (/(\d+)\s*PIECES?/i.test(text)) {
var newText = text.replace(/(\d+)\s*PIECES?/i, '$1X');
if (spans[i].textContent !== newText) {
spans[i].textContent = newText;
}
}
}
};
var observer = new MutationObserver(function(mutations) {
fixQuantityText();
});
var config = { 
childList: true, 
subtree: true, 
characterData: true 
};
observer.observe(targetNode, config);
fixQuantityText();
};
for (var j = 0; j < idsToWatch.length; j++) {
initObserver(idsToWatch[j]);
}
var toggleBtn = document.getElementById('summaryToggle');
toggleBtn.addEventListener('click', function() {
var arrow = document.querySelector('.arrow-icon');
if (arrow) {
arrow.classList.toggle('rotated');
}
var itemsContainer = document.querySelector('.builder-summary-mobile__items');
if (itemsContainer) {
itemsContainer.classList.toggle('collapsed');
}
});
}
};
xhr.send();
})();