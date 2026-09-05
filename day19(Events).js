// Events

function handleClick(greet) {
    console.log(`Button clicked by ${greet}`);
}

// evBtn.onclick = ()=>handleClick('event');

const clk = function () {
    console.log("btn clicked through event")
}

const evBtn = document.getElementById("myBtn2");
evBtn.addEventListener("click", clk)


const ppt = function () {
    console.log("TQ");
}
evBtn.addEventListener("click", ppt);
evBtn.removeEventListener("click", clk);

const dol = function () {
    console.log("DOM Content Loaded");
}
document.addEventListener("DOMContentLoaded", dol);

function handleEvents(event) {
    console.log(event);

    console.log("target", event.target);
    console.log("type", event.type);
    console.log("tar name", event.target.name);
    console.log("tar value", event.target.value);
    console.log("curr tar", event.currentTarget);
}
const searchid = document.querySelector("#search-id");
searchid.addEventListener("change", handleEvents);



// Event delegation
document.getElementById("item-list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`You clicked on ${event.target.textContent}`)
    }
});

// Custom Events
const custBtn = document.querySelector("#custBtn");
const custP = document.querySelector("#welcome");
const custinp = document.querySelector("#custInp");

custBtn.addEventListener("click",function(){
    custP.textContent = `welcome ${custinp.value}`
    custinp.value = ""
})

const myEvent = new CustomEvent("userLoggedIn", {
    detail: {
        username : "Vishal" ,
        role : "admin" ,
    },
});
document.addEventListener("userLoggedIn", (e)=>{
    console.log(`user login detected ${e.detail.username}`)
})

document.dispatchEvent(myEvent);