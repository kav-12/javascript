var counter = document.querySelector(".Counter");
var followers = document.querySelector(".followers");

let count =1;
setInterval(() => {
    if (count <=1000) {
        count++;
        counter.innerText = count;
}
},1);