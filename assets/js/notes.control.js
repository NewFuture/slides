/*
v3.5.0
modified from https://github.com/hakimel/reveal.js/blob/master/plugin/notes/notes.html
*/
(function(){var j,g,v,o,m,s,r,t=false;var q={"default":"Default","wide":"Wide","tall":"Tall","notes-only":"Notes only"};b();window.addEventListener("message",function(w){var x=JSON.parse(w.data);if(x.state){delete x.state.overview}if(x&&x.namespace==="reveal-notes"){if(x.type==="connect"){e(x)}else{if(x.type==="state"){f(x)}}}else{if(x&&x.namespace==="reveal"){if(/ready/.test(x.eventName)){window.opener.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connected"}),"*")}else{if(/slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test(x.eventName)&&v!==JSON.stringify(x.state)){window.opener.postMessage(JSON.stringify({method:"setState",args:[x.state]}),"*")}}}}});function e(w){if(t===false){t=true;c(w);h();k();i()}}function f(w){v=JSON.stringify(w.state);if(w.notes){j.classList.remove("hidden");g.style.whiteSpace=w.whitespace;if(w.markdown){g.innerHTML=marked(w.notes)}else{g.innerHTML=w.notes}}else{j.classList.add("hidden")}o.contentWindow.postMessage(JSON.stringify({method:"setState",args:[w.state]}),"*");m.contentWindow.postMessage(JSON.stringify({method:"setState",args:[w.state]}),"*");m.contentWindow.postMessage(JSON.stringify({method:"next"}),"*")}f=d(f,200);function h(){document.addEventListener("keydown",function(w){o.contentWindow.postMessage(JSON.stringify({method:"triggerKey",args:[w.keyCode]}),"*")})}function c(y){var B=["receiver","progress=false","history=false","transition=none","autoSlide=0","backgroundTransition=none"].join("&");var w=/\?/.test(y.url)?"&":"?";var z="#/"+y.state.indexh+"/"+y.state.indexv;var A=y.url+w+B+"&postMessageEvents=true"+z;var x=y.url+w+B+"&controls=false"+z;o=document.createElement("iframe");o.setAttribute("width",1280);o.setAttribute("height",1024);o.setAttribute("src",A);document.querySelector("#current-slide").appendChild(o);m=document.createElement("iframe");m.setAttribute("width",640);m.setAttribute("height",512);m.setAttribute("src",x);document.querySelector("#upcoming-slide").appendChild(m)}function k(){j=document.querySelector(".speaker-controls-notes");g=document.querySelector(".speaker-controls-notes .value")}function u(){var B=Reveal.getSlides();var x=Reveal.getConfig().defaultTiming;if(x==null){return null}var A=[];for(var z in B){var w=B[z];var C=x;if(w.hasAttribute("data-timing")){var y=w.getAttribute("data-timing");C=parseInt(y);if(isNaN(C)){console.warn("Could not parse timing '"+y+"' of slide "+z+"; using default of "+x);C=x}}A.push(C)}return A}function n(y){var x=Reveal.getSlides();var z=0;var A=Reveal.getSlidePastCount();for(var w in x.slice(0,A+1)){z+=y[w]}return z}function i(){var y=new Date(),B=document.querySelector(".speaker-controls-time"),K=B.querySelector(".clock-value"),J=B.querySelector(".hours-value"),H=B.querySelector(".minutes-value"),L=B.querySelector(".seconds-value"),F=B.querySelector(".pacing-title"),I=B.querySelector(".pacing"),C=I.querySelector(".hours-value"),x=I.querySelector(".minutes-value"),E=I.querySelector(".seconds-value");var D=u();if(D!==null){F.style.removeProperty("display");I.style.removeProperty("display")}function w(T,P,S,Q){var N=Math.sign(Q)==-1?"-":"";Q=Math.abs(Math.round(Q/1000));var R=Q%60;var O=Math.floor(Q/60)%60;var M=Math.floor(Q/(60*60));T.innerHTML=N+a(M);if(M==0){T.classList.add("mute")}else{T.classList.remove("mute")}P.innerHTML=":"+a(O);if(M==0&&O==0){P.classList.add("mute")}else{P.classList.remove("mute")}S.innerHTML=":"+a(R)}function z(){var P,M,O,Q,N=new Date();P=N.getTime()-y.getTime();K.innerHTML=N.toLocaleTimeString("en-US",{hour12:true,hour:"2-digit",minute:"2-digit"});w(J,H,L,P);if(D!==null){G(P)}}function G(P){var M=n(D)*1000;var Q=Reveal.getSlidePastCount();var N=D[Q]*1000;var O=M-P;if(O<0){I.className="pacing behind"}else{if(O<N){I.className="pacing on-track"}else{I.className="pacing ahead"}}w(C,x,E,O)}z();setInterval(z,1000);function A(){if(D==null){y=new Date()}else{var N=n(D)*1000;var Q=Reveal.getSlidePastCount();var P=D[Q]*1000;var O=N-P;var M=new Date();y=new Date(M.getTime()-O)}z()}B.addEventListener("click",function(){A();return false})}function b(){r=document.querySelector(".speaker-layout-dropdown");s=document.querySelector(".speaker-layout-label");for(var x in q){var w=document.createElement("option");w.setAttribute("value",x);w.textContent=q[x];r.appendChild(w)}r.addEventListener("change",function(y){l(r.value)},false);l(p())}function l(w){var x=q[w];s.innerHTML="Layout"+(x?(": "+x):"");r.value=w;document.body.setAttribute("data-speaker-layout",w);if(window.localStorage){window.localStorage.setItem("reveal-speaker-layout",w)}}function p(){if(window.localStorage){var w=window.localStorage.getItem("reveal-speaker-layout");if(w){return w}}for(var x in q){return x}}function a(w){var x="00"+parseInt(w);return x.substring(x.length-2)}function d(x,w){var z=0,y;return function(){var A=arguments;var B=this;clearTimeout(y);var C=Date.now()-z;if(C>w){x.apply(B,A);z=Date.now()}else{y=setTimeout(function(){x.apply(B,A);z=Date.now()},w-C)}}}})();