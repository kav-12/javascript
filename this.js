console.log(this);

var user={
    firstName:"kavita",
    courseCount:4,
    getCourseCount:function(){
        console.log("line 7",this);
   function sayHello(){
    console.log("hello");
    console.log("line 10",this);
   }
   sayHello()
    },

    };
user.getCourseCount();