var na=Math.floor(Math.random() * (50- 1) + 1);
function comprobar(){
    var nu=document.getElementById("nose").value;
    if(na==nu){
        alert("ganaste");
    }else if(na>nu){
       alert("es mayor"); 
    }else{
        alert("es menor");
    }
}