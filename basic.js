//TODO=Falsy value
//undefined
//NaN
//null
//""
/*var user = "2";

if(2 === user){
    console.log("condition is true");

}*/

//TODO=fUNCTION

/*function sayHello() {
console.log("hello,there kavita");
}
sayHello();*/

/*function sayHello(name) {
    console.log("Hello there,kavita");
    console.log(`${name}. How are You`);

}
sayHello("kavita");
sayHello("parveen");*/

function getUserRole(name,role){

    switch (role) {
        case "admin":
            return `${name} is admin with all acess`;
            break;
            case "subadmin":
                return `${name} is subadmin with create account`;
                break;
                case "testprep":
                    return `${name} is testprep with create and delete account`;
                    break;
    
        default:
            return `${name}is a trail user`
            break;
    }
}
console.log(getUserRole("kavita","testprep"));