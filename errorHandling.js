function bootNavigation(mapLoaded){
    try{
        console.log(`Is Navigation Loaded: ${mapLoaded}`);
        if(!mapLoaded){
            throw new Error("Map was not passed in this function");
        }
        return "NAV_OK";
    } catch(error) {
        console.log(error);
        console.log(`Navigation Failed: ${error.message}`);
    } finally {
        console.log("Navigation Sequence completed");
    }
}

const status1 = bootNavigation(true);
// const status1 = bootNavigation(false);
console.log(`Result: ${status1}`);
