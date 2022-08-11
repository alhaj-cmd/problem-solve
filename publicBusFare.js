function publicBusFare(unit){
    let bill ;
    if ( unit <= 117 ){
    const remaing = 50*2+11;
    const sum = unit - remaing;
    bill = sum*250;
    }
    else if(unit > 235){
        const remaing = (50*4)+(11*3);
        const sum = unit - remaing;
        bill = sum*250;
    }
    return bill;

}
console.log(publicBusFare(50));