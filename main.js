menulistarray = ["pizza vegetariana",
"pizza de frango",
"pizza portuguesa",
"pizza quatro queijos",
"pizza calabresa",
"pizza extravaganza"];


function getMenu(){
    var htmldata="";
    menulistarray.sort();
    for(var i=0;i<menulistarray.lenght;i++){
        htmldata=htmldata+ menulistarray[i] + '<br'
    }
document.getElementById("displayMenu").innerHTML = htmldata;
}


function additem(){
    var htmldata;
    var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
    var item=document.getElementById("addItem").value;
    menulistarray.lenght.sort();
    htmldata=""
    for(var i=0;i<menulistarray.length;i++){
        htmldata=htmldata+imgtags+ menulistarray[i]+'<br>';
    }
}
function addtop(){
    var item=document.getElementById("additem").value;
    menulistarray.push(item);
    addItem();
}



























