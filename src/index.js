import './style.css';
import {fetchData,timeFormatter} from './fetch.js';
import {loadHeaderImage,checkCurrentScale,clearPreviousContents} from './DOM.js';

loadHeaderImage();
// console.log(timeFormatter('13:30:00'));

document.querySelector('#my-form').addEventListener('submit',()=>{
    const userInput=document.querySelector('#city').value;
    clearPreviousContents();
    fetchData(userInput);
})
document.querySelector('.set-temp>button').addEventListener('click',()=>{
    checkCurrentScale();
})