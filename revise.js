//function var a=56;
/*function f(){
    let b=78
    console.log(a);
    console.log(b);
}
f();*/

//math
//console.log(math.round(9.91));

//HOF
//callback
//setTimeout
//setInterval
//Promise-if u took promise it will be done propeerly or it will be rejected
//its has three stage-call back
// .then .catch ,async await
/*const MakePromise =New Promise((resolve,rejected)=>{
    setTimeout(()=>{
        const Exam=["html","css","js","tailwind"];
        if(Exam.length<2){
            resolve("completed");

        }
    },2000)


});
MakePromise.then((result)=>{
    console.log(result);

});*/


//Fetch

const url = "https://restcountries.com/v2/all"; //countries Api

fetch(Url)
.then((result) => result.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});



