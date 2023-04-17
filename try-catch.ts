var num = 5;
var de_num = 0;
try {
    if(de_num == 0) {
        throw "Divide by zero error";
    } else {
        var sol = num / de_num;
    }
} catch(e) {
    console.log("Error : " + e); // Error:Divide by zero error

}
// ví dụ 2:
try{
    ab();
    // We have not declared the
    // function ab anywhere
} catch(e){
    console.log("Error : "+ e.name); // e.name trả về tên của lỗi: "Error: referenceError"
}
// đoạn code 2:
try {
    eval("alert('ES6 Exception Handling)");
} catch(e){
    console.log("Error : " + e.name) // ở đây cố tình sai dấu ngoặc nên e.name trả về " Error: SyntaxError"
}