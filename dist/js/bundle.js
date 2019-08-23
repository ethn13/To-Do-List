!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){(function(e){var n=e&&e.pid?e.pid.toString(36):"";function i(){var t=Date.now(),e=i.last||t;return i.last=t>e?t:e+1}t.exports=t.exports.default=function(t){return(t||"")+""+n+i().toString(36)},t.exports.process=function(t){return(t||"")+n+i().toString(36)},t.exports.time=function(t){return(t||"")+i().toString(36)}}).call(this,n(1))},function(t,e){var n,i,o=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(t){n=r}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(t){i=s}}();var d,a=[],l=!1,u=-1;function m(){l&&d&&(l=!1,d.length?a=d.concat(a):u=-1,a.length&&p())}function p(){if(!l){var t=c(m);l=!0;for(var e=a.length;e;){for(d=a,a=[];++u<e;)d&&d[u].run();u=-1,e=a.length}d=null,l=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new f(t,e)),1!==a.length||l||c(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){"use strict";n.r(e);const i={inputBtn:document.querySelector(".add-item"),inputForm:document.querySelector(".input-form"),inputCloseBtn:document.querySelector(".input-form__close"),inputTitle:document.querySelector(".input-form__title"),inputDescription:document.querySelector(".input-form__description"),toDoList:document.querySelector(".to-do__list"),removetoDoBtn:document.querySelector(".remove-to-do__item"),toDoField:document.querySelector(".to-do"),doingList:document.querySelector(".doing__list"),doingField:document.querySelector(".doing"),doneList:document.querySelector(".done__list"),doneField:document.querySelector(".done"),clock:document.querySelector(".clock")},o=()=>{i.inputTitle.value="",i.inputDescription.value="",i.inputForm.style.transform="scale(0)"};var r=n(0),s=n.n(r);class c{constructor(){this.items=[]}addItem(t,e){const n={id:s()(),title:t,description:e};return this.items.push(n),this.persistData(),n}deleteItem(t){const e=this.items.findIndex(e=>e.id===t),n=this.items[e];return this.items.splice(e,1),this.persistData(),n}regainItem(t,e,n){const i={id:t,title:e,description:n};return this.items.push(i),this.persistData(),i}persistData(){localStorage.setItem("to-do",JSON.stringify(this.items))}readStorage(){const t=JSON.parse(localStorage.getItem("to-do"));if(t)return this.items=t,!0}}const d=(t,e,n)=>{const o=`\n    <li class="to-do__item" data-id="${t}">\n        <div class="to-do__item-content">\n            <h3>${e}</h3>\n            <p>${n}</p>\n        </div>\n        <div class="to-do__item-btns">\n            <button class="btn-tiny remove-to-do__item">\n                <i class="fas fa-times-circle"></i>\n            </button>\n            <button class="btn-tiny next-to-do__item">\n                <i class="fas fa-chevron-circle-right"></i>\n            </button>\n        </div>\n    </li>\n    `;i.toDoList.insertAdjacentHTML("beforeend",o)},a=t=>{const e=document.querySelector(`li[data-id="${t}"]`);e.parentElement.removeChild(e)};class l{constructor(){this.items=[]}addItem(t,e,n){const i={id:t,title:e,description:n};return this.items.push(i),this.persistData(),i}deleteItem(t){const e=this.items.findIndex(e=>e.id===t),n=this.items[e];return this.items.splice(e,1),this.persistData(),n}regainItem(t,e,n){const i={id:t,title:e,description:n};return this.items.push(i),this.persistData(),i}persistData(){localStorage.setItem("doing",JSON.stringify(this.items))}readStorage(){const t=JSON.parse(localStorage.getItem("doing"));if(t)return this.items=t,!0}}const u=(t,e,n)=>{const o=`\n    <li class="doing__item" data-id="${t}">\n        <div class="doing__item-content">\n            <h3>${e}</h3>\n            <p>${n}</p>\n        </div>\n        <div class="doing__item-btns">\n            <button class="btn-tiny remove-doing__item">\n                <i class="fas fa-times-circle"></i>\n            </button>\n            <button class="btn-tiny prev-doing__item">\n                <i class="fas fa-chevron-circle-left"></i>\n            </button>\n            <button class="btn-tiny next-doing__item">\n                <i class="fas fa-chevron-circle-right"></i>\n            </button>\n        </div>\n    </li> \n    `;i.doingList.insertAdjacentHTML("beforeend",o)},m=t=>{const e=document.querySelector(`li[data-id="${t}"]`);e.parentElement.removeChild(e)};class p{constructor(){this.items=[]}addItem(t,e,n){const i={id:t,title:e,description:n};return this.items.push(i),this.persistData(),i}deleteItem(t){const e=this.items.findIndex(e=>e.id===t),n=this.items[e];return this.items.splice(e,1),this.persistData(),n}regainItem(t,e,n){const i={id:t,title:e,description:n};return this.items.push(i),this.persistData(),i}persistData(){localStorage.setItem("done",JSON.stringify(this.items))}readStorage(){const t=JSON.parse(localStorage.getItem("done"));if(t)return this.items=t,!0}}const f=(t,e,n)=>{const o=`\n    <li class="done__item" data-id="${t}">\n        <div class="done__item-content">\n            <h3>${e}</h3>\n            <p>${n}</p>\n        </div>\n        <div class="done__item-btns">\n            <button class="btn-tiny finish-done__item">\n                <i class="fas fa-check-circle"></i>\n            </button>\n            <button class="btn-tiny prev-done__item">\n                <i class="fas fa-chevron-circle-left"></i>\n            </button>\n        </div>\n    </li> \n    `;i.doneList.insertAdjacentHTML("beforeend",o)},h=t=>{const e=document.querySelector(`li[data-id="${t}"]`);e.parentElement.removeChild(e)},g={};window.renderItem=d,window.addEventListener("load",t=>{g.toDo=new c,g.toDo.readStorage(),g.toDo.items.forEach(t=>{d(t.id,t.title,t.description)}),g.doing=new l,g.doing.readStorage(),g.doing.items.forEach(t=>{u(t.id,t.title,t.description)}),g.done=new p,g.done.readStorage(),g.done.items.forEach(t=>{f(t.id,t.title,t.description)}),v()});const _=t=>t<10?`0${t}`:t,v=()=>{let t,e,n;t=_((new Date).getHours()),e=_((new Date).getMinutes()),n=_((new Date).getSeconds()),i.clock.textContent=`${t}:${e}:${n}`,setTimeout(v,1e3)},y=()=>{const t=(()=>i.inputTitle.value)(),e=(()=>i.inputDescription.value)();if(t&&e){g.toDo||(g.toDo=new c);const n=g.toDo.addItem(t,e);o(),d(n.id,n.title,n.description)}};i.toDoField.addEventListener("click",t=>{if(t.target.matches(".remove-to-do__item, .remove-to-do__item *")){const e=t.target.closest("li").dataset.id;a(e),g.toDo.deleteItem(e)}else if(t.target.matches(".next-to-do__item, .next-to-do__item *")){const e=t.target.closest("li").dataset.id;a(e),(t=>{g.doing||(g.doing=new l);const e=g.doing.addItem(t.id,t.title,t.description);u(e.id,e.title,e.description)})(g.toDo.deleteItem(e))}}),i.doingField.addEventListener("click",t=>{if(t.target.matches(".remove-doing__item, .remove-doing__item *")){const e=t.target.closest("li").dataset.id;m(e),g.doing.deleteItem(e)}else if(t.target.matches(".prev-doing__item, .prev-doing__item *")){const e=t.target.closest("li").dataset.id;m(e);const n=g.doing.deleteItem(e);g.toDo.regainItem(n.id,n.title,n.description),d(n.id,n.title,n.description)}else if(t.target.matches(".next-doing__item, .next-doing__item *")){const e=t.target.closest("li").dataset.id;m(e),(t=>{g.done||(g.done=new p);const e=g.done.addItem(t.id,t.title,t.description);f(e.id,e.title,e.description)})(g.doing.deleteItem(e))}}),i.doneField.addEventListener("click",t=>{if(t.target.matches(".finish-done__item, .finish-done__item *")){const e=t.target.closest("li").dataset.id;h(e),g.done.deleteItem(e)}else if(t.target.matches(".prev-done__item, .prev-done__item *")){const e=t.target.closest("li").dataset.id;h(e);const n=g.done.deleteItem(e);g.doing.regainItem(n.id,n.title,n.description),u(n.id,n.title,n.description)}}),i.inputForm.addEventListener("submit",t=>{y()}),i.inputBtn.addEventListener("click",t=>{i.inputForm.style.transform="scale(1.1)"}),i.inputCloseBtn.addEventListener("click",t=>{o()})}]);