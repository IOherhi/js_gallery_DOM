var e=document.body.querySelector(".gallery__list"),t=document.getElementById("largeImg");e.addEventListener("click",function(e){e.preventDefault();var r=e.target;if("IMG"===r.tagName){var a=r.getAttribute("src");t.setAttribute("src",a)}else{var c=r.querySelector("img");if(c){var i=c.getAttribute("src");t.setAttribute("src",i)}}});
//# sourceMappingURL=index.b9589e1e.js.map
