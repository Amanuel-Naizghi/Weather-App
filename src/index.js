import './style.css';
import {fetchData} from './fetch.js';
import {loadHeaderImage} from './DOM.js';

loadHeaderImage();

document.querySelector('#my-form').addEventListener('submit',()=>{
    const userInput=document.querySelector('#city').value;
    fetchData(userInput);
})