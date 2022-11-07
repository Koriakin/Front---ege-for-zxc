let elementRef = document.getElementById('zadanie1');
let zadanie1;

const res=axios.get('https://man-backend-2.onrender.com/exercise/get-exercise/3').then((req)=>{elementRef.textContent = req.data.text; zadanie1 = req.data});

let elementRef2 = document.getElementById('zadanie2');
let zadanie2;

const res2=axios.get('https://man-backend-2.onrender.com/exercise/get-exercise/4').then((req)=>{elementRef2.textContent = req.data.text; zadanie2 = req.data});

let elementRef3 = document.getElementById('zadanie3');
let zadanie3;

const res3=axios.get('https://man-backend-2.onrender.com/exercise/get-exercise/8').then((req)=>{elementRef3.textContent = req.data.text; zadanie3 = req.data});

let elementRef4 = document.getElementById('zadanie4');
let zadanie4;

const res4=axios.get('https://man-backend-2.onrender.com/exercise/get-exercise/12').then((req)=>{elementRef4.textContent = req.data.text; zadanie4 = req.data});

let elementRef5 = document.getElementById('zadanie5');
let zadanie5;

const res5=axios.get('https://man-backend-2.onrender.com/exercise/get-exercise/15').then((req)=>{elementRef5.textContent = req.data.text; zadanie5 = req.data});

let elementRef6 = document.getElementById('zadanie6');
let zadanie6;

const res6=axios.get('https://man-backend-2.onrender.com/exercise/get-exercise/16').then((req)=>{elementRef6.textContent = req.data.text; zadanie6 = req.data});

let elementRef7 = document.getElementById('zadanie7');
let zadanie7;

const res7=axios.get('https://man-backend-2.onrender.com/exercise/get-exercise/17').then((req)=>{elementRef7.textContent = req.data.text; zadanie7 = req.data});

let elementRef8 = document.getElementById('zadanie8');
let zadanie8;

const res8=axios.get('https://man-backend-2.onrender.com/exercise/get-exercise/18').then((req)=>{elementRef8.textContent = req.data.text; zadanie8 = req.data});

let elementRef9 = document.getElementById('zadanie9');
let zadanie9;

const res9=axios.get('https://man-backend-2.onrender.com/exercise/get-exercise/19').then((req)=>{elementRef9.textContent = req.data.text; zadanie9 = req.data});

let elementRef10 = document.getElementById('zadanie10');
let zadanie10;

const res10=axios.get('https://man-backend-2.onrender.com/exercise/get-exercise/20').then((req)=>{elementRef10.textContent = req.data.text; zadanie10 = req.data});

let elementInput1 = document.getElementById('zad1');
let elementInput2 = document.getElementById('zad2');
let elementInput3 = document.getElementById('zad3');
let elementInput4 = document.getElementById('zad4');
let elementInput5 = document.getElementById('zad5');
let elementInput6 = document.getElementById('zad6');
let elementInput7 = document.getElementById('zad7');
let elementInput8 = document.getElementById('zad8');
let elementInput9 = document.getElementById('zad9');
let elementInput10 = document.getElementById('zad10');

function showMessage() {
    if (elementInput1.value === zadanie1.correctAnswer){
        elementInput1.style.color = 'green';
        } else {
        elementInput1.style.color = 'red';
        };
    if (elementInput2.value === zadanie2.correctAnswer){
        elementInput2.style.color = 'green';
        } else {
        elementInput2.style.color = 'red';
        };
    if (elementInput3.value === zadanie3.correctAnswer){
        elementInput3.style.color = 'green';
        } else {
        elementInput3.style.color = 'red';
        };   
    if (elementInput4.value === zadanie4.correctAnswer){
        elementInput4.style.color = 'green';
        } else {
        elementInput4.style.color = 'red';
        };    
    if (elementInput5.value === zadanie5.correctAnswer){
        elementInput5.style.color = 'green';
        } else {
        elementInput5.style.color = 'red';
        };
    if (elementInput6.value === zadanie6.correctAnswer){
        elementInput6.style.color = 'green';
        } else {
        elementInput6.style.color = 'red';
        }; 
    if (elementInput7.value === zadanie7.correctAnswer){
        elementInput7.style.color = 'green';
        } else {
        elementInput7.style.color = 'red';
        };
    if (elementInput8.value === zadanie8.correctAnswer){
        elementInput8.style.color = 'green';
        } else {
        elementInput8.style.color = 'red';
        };
    if (elementInput9.value === zadanie9.correctAnswer){
        elementInput9.style.color = 'green';
        } else {
        elementInput9.style.color = 'red';
        };  
    if (elementInput10.value === zadanie10.correctAnswer){
        elementInput10.style.color = 'green';
        } else {
        elementInput10.style.color = 'red';
        };             
}        