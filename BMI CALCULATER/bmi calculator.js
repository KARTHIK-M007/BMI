function bmi()
{
  var weigth=document.getElementById("weight").value;
  var heigth=document.getElementById("height").value;
 
   var meters=heigth/100;
   var d=(weigth/(meters*meters).toFixed(2));

   if(d<=18.5){
    document.getElementById("result").innerHTML = d + " - " + "under weight";
  }
  else if(d>=18.5 && d<=24.9){
    document.getElementById("result").innerHTML = d + " - " + "normal";

  }
  else if(d>=25 && d<=39.9){
    
    document.getElementById("result").innerHTML = d + " - " + "over weight";

  }
  else if(d<39.9)
  {
    
    document.getElementById("result").innerHTML = "obicity";
  }
  

}

  