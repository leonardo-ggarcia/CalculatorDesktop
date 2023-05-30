
let operations = ['.','C','=','+','-','*']
let buttons = document.getElementsByClassName('button')
let display = document.getElementById('display')

for(let button of buttons){
    button.addEventListener('click', (btn) => {

        let _display = String(display.value)

        if(!operations.includes(btn.target.value)){
            display.value +=  btn.target.value
        }

        //C
        if(btn.target.value === operations[1]){
            display.value = ""
        }//+
        else if(btn.target.value === operations[3] 
                && !_display.includes(operations[3]) 
                && _display.charAt(0)){              
                  
            if(operations.includes(_display.charAt(_display.length - 1))){
                return;
            };

            display.value += "+"                       
        }//-
        else if(btn.target.value === operations[4] 
                && !_display.includes(operations[4]) 
                && _display.charAt(0)){  

            if(operations.includes(_display.charAt(_display.length - 1))){
                return;
            };

            display.value += "-"                       
        }//*
        else if(btn.target.value === operations[0] 
            && !_display.includes(operations[0]) 
            && _display.charAt(0)){  

            if(operations.includes(_display.charAt(_display.length - 1))){
                return;
            };
                
            display.value += "."                       
        }//=
        else if(btn.target.value === operations[5] 
                && !_display.includes(operations[5]) 
                && _display.charAt(0)){  

            if(operations.includes(_display.charAt(_display.length - 1))){
                return;
            };
                
            display.value += "*"                       
        }//=
        else if(btn.target.value  === operations[2]){
            display.value = eval(_display)        
        }
    })
}