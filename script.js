var user="subadmin";
switch (user) {
    case "admin":
        console.log("yoy get full acess");
         break;
         case "subadmin":
        console.log("yoy get delet account");
         break;
         case "testprep":
        console.log("yoy get create account");
         break;
         case "":
        console.log("yoy get use content acess");
         break;

    default:
        console.log("trial user")
        break;
}