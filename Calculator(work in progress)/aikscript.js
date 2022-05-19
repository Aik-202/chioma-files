const sev = () => {
    const numb = document.getElementById("seven");
    const value = numb.innerHTML;
    number(value);
}
const eig = () => {
    const numb = document.getElementById("eight");
    const value = numb.innerHTML;
    number(value);
}
const nin= () => {
    const numb = document.getElementById("nine");
    const value = numb.innerHTML;
    number(value);
}
const del = () => {
    const numb = document.getElementById("del");
    const value = numb.innerHTML;
    number(value)
}
const fou= () => {
    const numb = document.getElementById("four");
    const value = numb.innerHTML;
    number(value)
}
const fiv = () => {
    const numb = document.getElementById("five");
    const value = numb.innerHTML;
    number(value)
}
const six = () => {
    const numb = document.getElementById("six");
    const value = numb.innerHTML;
    number(value)
}
const thr = () => {
    const numb = document.getElementById("three");
    const value = numb.innerHTML;
    number(value)
}
const two= () => {
    const numb = document.getElementById("two");
    const value = numb.innerHTML;
    number(value)
}
const one = () => {
    const numb = document.getElementById("one");
    const value = numb.innerHTML;
    number(value)
}
const plu = () => {
    const numb = document.getElementById("plus");
    const value = numb.innerHTML;
    number(value)
}
const min = () => {
    const numb = document.getElementById("minus");
    const value = numb.innerHTML;
    number(value)
}
const dot = () => {
    const numb = document.getElementById("dot");
    const value = numb.innerHTML;
    number(value)
}
const zer = () => {
    const numb = document.getElementById("zero");
    const value = numb.innerHTML;
    number(value)
}
const equ = () => {
    const numb = document.getElementById("equalto");
    const value = numb.innerHTML;
    number(value)
}
const tim = () => {
    const numb = document.getElementById("times");
    const value = numb.innerHTML;
    number(value)
}
const div = () => {
    const numb = document.getElementById("div");
    const value = numb.innerHTML;
    number(value)
}
const number = (val) =>{ 
    console.log(`${val}`) ;
    document.getElementById("input").innerHTML = val;
}