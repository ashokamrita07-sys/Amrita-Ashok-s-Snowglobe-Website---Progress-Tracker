/* window.addEventListener("DOMContentLoaded", function() {
    const pbar1 = document.getElementById("mypbar");

    //once fully loaded show bar width to 100% 
    
    pbar1.style.width = "0%";

    setTimeout(function() {
        pbar1.style.width= "10%";
    }, 100);

     setTimeout(function() {
        pbar1.style.width= "20%";
    }, 200);

     setTimeout(function() {
        pbar1.style.width= "30%";
    }, 300);

     setTimeout(function() {
        pbar1.style.width= "40%";
    }, 400);

    setTimeout(function() {
        pbar1.style.width ="50%";
    }, 500);

    setTimeout(function() {
        pbar1.style.width= "60%";
    }, 600);

    setTimeout(function() {
        pbar1.style.width= "70%";
    }, 700);

    setTimeout(function() {
        pbar1.style.width= "80%";
    }, 800);

    setTimeout(function() {
        pbar1.style.width= "90%";
    }, 900);

    setTimeout(function() {
        pbar1.style.width= "100%";
    }, 1000);

}); */

/* const pbar1 = document.getElementById("mypbar");
setTimeout(function() {
    pbar1.style.width= "100%"; 
}, 500); */

const pbar1 = document.getElementById("mypbar");

document.addEventListener("DOMContentLoaded",function(){
    pbar1.style.width= "0%";
});

window.addEventListener("load" , function(){
    setTimeout(function() {
    pbar1.style.width= "100%"; 
    }, 500);
}); 

const teller = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        console.log("Loaded asset", entry.name, "took :", entry.duration);
    }
});

teller.observe({entryTypes:["resource"]}); 


