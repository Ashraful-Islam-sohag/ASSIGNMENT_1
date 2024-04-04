function calc(){
    var num1=parseFloat(document.getElementById('n1').value);
    var num2=parseFloat(document.getElementById('n2').value);
    var data=document.getElementById('operators').value;
   if(data=="+"){
        document.getElementById('result').value=num1+num2;
   }
   if(data=="-"){
    document.getElementById('result').value=num1-num2;
  }
  if(data=="*"){
    document.getElementById('result').value=num1*num2; 
  }
  if(data=="/"){
    document.getElementById('result').value=num1/num2;
}

}