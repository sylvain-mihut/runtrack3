function bisextile(année) {
    if (année % 4 ==0 && année % 100 != 0 ){
       return true;      
    } else if (année % 400 == 0){
        return true;
    }else{
        return false; 
    }
}

console.log(bisextile(2003));