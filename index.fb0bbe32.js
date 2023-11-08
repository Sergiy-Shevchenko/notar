const i=[{id:"id-1",name:"Наші переваги"},{id:"id-2",name:"Наші послуги"},{id:"id-3",name:"Наш офіс"},{id:"id-4",name:"Наш графік"}],n=document.querySelector(".list");!function(){const e=i.map((({id:i,name:n})=>`\n    <li class="item">\n    <a class="link" href="#${i}">${n}</a>\n    </li> `)).join();n.insertAdjacentHTML("afterbegin",e)}();
//# sourceMappingURL=index.fb0bbe32.js.map
