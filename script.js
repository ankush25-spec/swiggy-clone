function findSecondMax(num1, num2, num3) {
    //  Only change code below this line
let max;
let s_max;
let t_max;
    if (num1>num2){
        max=num1;
        s_max=num2;
    }
    else if (max>num3){
        if(s_max>num3){
        max=max;
        s_max=s_max;
        t_max=num3; 
        }else{
            t_max=s_max;
            s_max=num3;
            max=max;
        }}else if(num3>max){
        t_max=s_max;
            s_max=max;
            max=num3;
        } 
}


















   let max, s_max, t_max;
    if (num1>num2){
        max=num1;
        s_max=num2
    }else{
        max=num2;
        s_max=num1;
    }
    
    if(max<num3){
        t_max=num3;
        s_max=max;
        max=num3;
    }else if(s_max<num3){
        t_max=s_max;
        s_max=num3;
    }

    if(max<num4){
        t_max=s_max;
    }else if(s_max<num4){
        t_max=s_max;  
    }
     else if (t_max<num4){
            t_max=num4;
        }
        return t_max;
