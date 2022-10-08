var iphone = {
    model : "iphone13",
    Display : "superRetina",
    Chip : "A",
    Camera : "Dual-camera system",
    videoRecording : "12fps",
    TrueDepthCamera : "12MP",
    Safety : "Emergency SOS"
};
//console.log(iphone);
console.log(iphone.model);
iphone.model = "iphone16";
console.log(iphone.model);

//TODO =METHOD

var user ={
    firstName : "kavita",
    lastName : "yadav",
    role : "jobSeeker",
    loginCount : 32,
    facebookSignedIn : true ,
    courseList : [] ,
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
},
getCourseCount: function() {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} course`;
},
};
var courseList =true;
console.log(user.getCourseCount());
user.buyCourse("React js course");
console.log(user.getCourseCount());