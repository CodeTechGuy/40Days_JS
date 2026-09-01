let parasEle = document.querySelectorAll("p.info");
paraEle.style.color="yellow" ;
// console.log()

function highlightText(){ 
    console.log("about to Highlight text");

    let element = document.querySelectorAll("p.info");
    element.forEach((elem)=>{
        elem.style.backgroundColor = "yellow";
    })
}


function searchText(){
    const element = document.querySelector("#searchInput");
    const input = element.value;

    const items = document.querySelectorAll("ul#searchResults li");

    items.forEach((elem)=>{
        elem.style.display = elem.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
    })
}

// Root of a DOM tree is the document object. The document object is the entry point to the web page. It represents the entire HTML document and provides methods and properties to access and manipulate its elements.
