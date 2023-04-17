// var cont = {
//    checkerror: function (cont){
//        if (cont<0){
//            try{
//                throw new Error("ngungok")
//            }catch (e) {
//                console.log(e.message)
//
//            }
//        }
// }
// }
// console.log(cont.checkerror(-12)) // log ra ngungok và undefine
function check(n) {
    if (!(n < 500 && n > -500)) {
        throw RangeError("oidoioi");
    }
}
try {
    check(2000);
}
catch (e) {
    if (e instanceof RangeError) {
        console.log(e.message);
    }
}
