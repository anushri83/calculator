let display=document.getElementById("display");
let operator=document.getElementsByClassName("operator");
        function ac(){
            display.value=" ";
        }
        function de(){
            display.value=display.value.slice(0,-1)
        }
        function show(a){
            display.value += a;
        }
        function result(){
            display.value=eval(display.value);
        }
       if(operator.count()>=1){
        display.value="Error";
       }