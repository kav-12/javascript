var User = function(firstName,courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`course count is;${this.courseCount}`);
    };

};
 User.prototype.getFirstname = function(){
    console.log(`your firstname is :${this.firstName}`);
 };
 var kavita = new User("kavita" ,2);
 kavita.getCourseCount();
 kavita.getFirstname();
