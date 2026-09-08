// const tabs = document.querySelector(".tabs");
// const tab = document.querySelector(".tab");
const tabHeaders = document.querySelector(".tab-headers");
// const tabContents = document.querySelector(".tab-contents");

tabHeaders.addEventListener("click",function(e){
    if(e.target.classList.contains("tab")){
        e.stopPropagation();

        const bord = tabHeaders.querySelectorAll(".tab.select");
        bord.forEach(tab => tab.classList.remove("select"));

        e.target.classList.add("select");
    }
});


// const tabHeaders = document.querySelector(".tab-headers");
// const tabs = document.querySelectorAll(".tab");
// const contents = document.querySelectorAll(".content");


function switchToTab(tabNumber) {

    // 1. Remove active from all tabs
    const tabsActive = document.querySelectorAll(".tab.active");
    tabsActive.forEach(tab => tab.classList.remove("active"));

    // 2. Remove active from all contents
    const contentsActive = document.querySelectorAll(".content.active");
    contentsActive.forEach(cont => cont.classList.remove("active"));

    // 3. Find selected tab
    const selectedTab = document.querySelector(`.tab[data-tab="${tabNumber}"]`);

    // 4. Find selected content
    const selectedContent = document.querySelector(`.content[data-tab="${tabNumber}"]`);

    // 5. Add active to selected tab
    selectedTab.classList.add("active");

    // 6. Add active to selected content
    selectedContent.classList.add("active");

    // 7. Create and dispatch custom event
    const myEvent = new CustomEvent("tabSwitch",{
        detail:{
            tabNumber,
            tabName : selectedTab.textContent
        }
    });
    document.dispatchEvent(myEvent);

}


// Click handling using event delegation
tabHeaders.addEventListener("click", function(event) {

    // Check if clicked element is a tab
    if(!event.target.classList.contains("tab")) return;
    
    event.stopPropagation();

    // Get data-tab
    const tabNumber = event.target.dataset.tab;

    // Call switchToTab()
    switchToTab(tabNumber);
    
});


// Keyboard shortcuts
document.addEventListener("keyup", (e) => {
    if (e.key === "1") switchToTab(1);
    if (e.key === "2") switchToTab(2);
    if (e.key === "3") switchToTab(3);
});


// Listen to custom Event
document.addEventListener("tabSwitch", function(event) {

    console.log(`switched to : `,event.detail.tabName);

});

