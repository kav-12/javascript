//bind is the way in which we bind the object

const kavita ={
    firstName : "kavita",
    lastName : "yadav",
    role : "learner" ,
    courseCount : 4,
    getInfo : function(){
        console.log(`
        firstName is ${this.firstName}
        and last name is ${this.lastName}
        courseCount is ${this.courseCount}
        and his role is ${this.role}`);
    },
};

const parveen = {
    firstName: "parveen",
    lastName : "yadav",
    role : "govt-employee"
};

//kavita.getInfo();
//parveen.getinfo();

//kavita.getInfo.bind(parveen)();
//var parveeninfo=kavita.getInfo.bind(parveen);
//parveeninfo();

kavita.getInfo.call(parveen);

kavita.getInfo();