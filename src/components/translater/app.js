import { langArr } from "./lang";

// console.log(langArr);



const select = document.querySelector('select');
const allLang = ['ua', 'ru', 'en'];


select.addEventListener('change', changeUrlLanguage);

function changeUrlLanguage(){
let lang = select.value;
location.href = window.location.pathname + "#"+lang;
location.reload()
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1);
    // console.log(hash);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + "#ua";   
        location.reload()
    }
    select.value = hash;
    console.log(langArr);
    for(let key in langArr){
        console.log(key)
        document.querySelector('.lng-title-city').innerHTML = langArr['city'][hash]
        document.querySelector('.lng-title-job').innerHTML = langArr['job'][hash]
        document.querySelector('.lng-title-name').innerHTML = langArr['name'][hash]
        document.querySelector('.lng-title-certificate').innerHTML = langArr['certificate'][hash]
        document.querySelector('.lng-text').innerHTML = langArr['text'][hash]
    }
}
changeLanguage()