/*for( let i=0; i<=10; i++){
    console.log(i);
}*/

/*const myState=[
    "haryana",
    "punjab",
    "rajsthan",
    1947,
    "delhi",
    "chandigarh",
    "Ambala",
];*/
//TODO FOR LOOP
   /* for(let i=0; i<myState.length; i++){
        //console.log(myState[i]);
        if(typeof myState[i] !=="string") continue;
        console.log(myState[i]);
    }*/

    //TODO WHILE LOOP
    
    /*let i=0;
    while(i<myState.length){
      //  i++; //in this the first state haryana is missing but when we increment i after console the haryana is appear
        console.log(myState[i]);
        i++;
    }*/

    //TODO DO WHILE LOOP
     /*let i=0;
     do{
        console.log(myState[i]);
        i++
     }
     while(i<myState.length);*/

     //TODO FOR EACH LOOP

     //var i=0;
     //for(;;){
       // if(i>3) break;
        //console.log(i);
        //i++;
     //}

     //myState.forEach((s) => (console.log((s))));
//TODO For of and For in Loop

/*const names =["Facebook","Google","yahoo","Instagram","amazon"]

for(const a of names){
    console.log(a);
}*/

const symbol ={
    yt:"Youtube",
    ig:"instagram",
    fb:"facebook",
    lco:"learncodeonline"
};
for(const a in symbol){
    console.log(a);
}
