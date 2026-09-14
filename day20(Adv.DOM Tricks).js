
// Efficient DOM Traversal
{
    const parent = document.querySelector(".card");
    const firstChild = parent.firstElementChild;
    const sibling1 = firstChild.nextElementSibling;
    const sibling2 = sibling1.nextElementSibling;
    const sibling3 = sibling2.nextElementSibling;
    const lastChild = parent.lastElementChild;


    console.log(parent);
    console.log(firstChild)
    console.log(sibling1)
    console.log(sibling2)
    console.log(sibling3)
    console.log(lastChild)
}



// Templates and Cloning
{
    const template = document.querySelector("#card-template");
    const clone = template.content.cloneNode(true);
    clone.querySelector(".title").textContent = "DOM ADV. Topics";
    clone.querySelector(".desc").textContent = "Hope you are learning something new";

    document.body.appendChild(clone);
    // parent.appendChild(clone);
}



// Document Fragment and Range
{
    const fragment = document.createDocumentFragment();

    for (let i = 0; i <= 3; i++) {
        const li = document.createElement("li");
        li.textContent = `Fragment-${i}`;
        fragment.append(li);
    }

    document.getElementById("docFragment").appendChild(fragment);
}

// Range     
const p = document.getElementById('para');
const range = document.createRange();

range.setStart(p.firstChild, 6);
range.setEnd(p.childNodes[2], 4);

const content = range.cloneContents();
console.log("content: ", content);


// Shadow DOM
// document.querySelector('.card').innerHTML

// Shadow host
const shadowHost = document.querySelector('#box');
const shadow = shadowHost.attachShadow({ mode: 'open' });
shadow.innerHTML = `<style> p {color:red ;} </style> <p>Hello Shadow!</p>`;


// Advanced Class Manipulation
const btn = document.querySelector('.btn');
btn.classList.add('active');
btn.classList.remove('active');
btn.classList.toggle('active');
btn.classList.replace('error', 'success');


// Handling Large-Scale DOM Updates

function addItems(count) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.textContent = `Item ${i}`;
        frag.appendChild(div);
    }
    document.body.appendChild(frag);
}

addItems(10);


// Mutation Observer 

// const observer = new MutationObserver(callback);
// observer.observe(targetNode, config);

const target = document.getElementById('watchMe');

const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        console.log(`Type of mutation: ${mutation.type}`);

        if (mutation.type === 'childList') {
            console.log('A child node was added or removed.');
        }

        if (mutation.type === 'attributes') {
            console.log(`Attribute ${mutation.attributeName} was changed.`);
        }

        if (mutation.type === 'characterData') {
            console.log(`Text content changed to: ${mutation.target.data}`);
        }
    }
});

const config = {
    subtree: true,
    characterData: true,
    childList: true,
    attributes: true,
}

observer.observe(target, config);

function changeDOM() {
    target.textContent = "Goodbye!";
    target.setAttribute("data-status", "Changed");
}

