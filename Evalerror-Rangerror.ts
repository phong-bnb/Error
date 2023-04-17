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
// vd2 rangerror : báo lỗi đối số thêm vào không trong vùng điều kiện
function check(n) {
    if(!(n<500&&n>-500)){
        throw RangeError("biến bạn nhập không trong khoanảng từ =500 tới 500")
    }

 }
 try{
    check(2000)
 }
 catch (e) {
    if (e instanceof RangeError ){
        console.log(e.message) // log ra "oidoioi"

    }

 }

