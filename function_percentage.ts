#! /usr/bin/env node

function percentage(percentage: number){
    if(percentage >= 95){
        console.log("grade A++");
    }
    else if(percentage >= 85){
        console.log("grade A+");
    }
else if(percentage >= 75){
    console.log("grade A");
}
else if(percentage >= 65){
    console.log("grade B");
}
else{
    console.log("with held");
}

}
percentage(67)