// Create Element
let paraEle = document.createElement("p");
paraEle.innerText = "This is dynamically inserted text";
console.log(paraEle);


document.body.appendChild(paraEle);

// Insert Element -- INSERTBEFORE ,  nextElementSibling
let span = document.createElement("span");
span.innerText = "This is a Span text";

const ele = document.querySelector("p");
const ele1 = document.querySelector("h1");
document.body.insertBefore(span,ele);
document.body.insertBefore(span,ele1);

const span1 = document.createElement("span");
span1.innerText = "Insert before element text";
// for insert after - use nextElementSibling
const pElem = document.querySelector("p");
document.body.insertBefore(span1, pElem.nextElementSibling)


// Modify Element
const h1Ele = document.querySelector("h1");
h1Ele.innerHTML = "<i><u>This</u></i> is <small>modified</small> text";
h1Ele.style.color = "red";


//  Remove Element
const rmList = document.getElementById("rmList");
const rm = rmList.children[0];

rmList.removeChild(rm);

const rmDiv = document.getElementById("rmDiv");
rmDiv.remove();


// Traversing / Navigating DOM
{ 
// Parent Element / Parent Node
const span = document.getElementById("text");
console.log(span.parentElement.parentElement);
console.log(span.parentNode.parentNode);



// children and childNodes
const mainId = document.getElementById("main-id");
console.log(mainId.childNodes)
console.log(mainId.children)



// previousSibling , previousElementSibling , nextSibling , nextElementSibling
const two = document.querySelector("#two");

// previousSibling → previous node, which can be an element, text node, comment, etc.
// previousElementSibling → previous element only.
// nextSibling → next node, including text/comment nodes.
// nextElementSibling → next element only.

console.log(two.previousSibling);
console.log(two.previousElementSibling); // <div id="one">

console.log(two.nextSibling);
console.log(two.nextElementSibling);     // <div id="three">


// Manipulating Styles
{
    const pElem = document.querySelector("#p-id");
    console.log(pElem.style);
    console.log(getComputedStyle(pElem).color)
    console.log(pElem.style.color)
    pElem.style.backgroundColor = "pink"
    pElem.style.color = "#fff"
}

// Manipulating Classes
{
    const mainDivElem = document.getElementById("main-id");
    // console.log(mainDivElem.className)
    // mainDivElem.className = "secondary-class"

    // mainDivElem.classList.add("secondary-class")
    mainDivElem.classList.remove("layout")
    mainDivElem.classList.replace("main-class", "secondary-class")
}

// Contolling Opacity
{
    const boxElem = document.querySelector("#opacity");
    boxElem.style.opacity = 0;

    function changeOpacity(){
        let opacity = parseFloat(boxElem.style.opacity);

    //{
        // If opacity is defined through CSS:

        // .box {
        //     opacity: 0.5;
        // }

        // then use:
            // let opacity = parseFloat(getComputedStyle(boxElem).opacity);
    // }

        // if(opacity < 1){
        //     opacity += 0.1;
        //     boxElem.style.opacity = opacity;
        // }
        if(opacity == 0){
            opacity = 0.5;
            boxElem.style.opacity = opacity;
        }
        else{
            opacity = 0;
            boxElem.style.opacity = opacity;
        }
        // boxElem.classList.toggle("box");
    }

}

}