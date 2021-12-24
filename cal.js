function view(num){
    document.getElementById("result").value+=num;
}
function clr(){
    document.getElementById("result").value="";
}
function equal(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value=y;
}