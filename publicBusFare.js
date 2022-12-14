// function publicBusFare(unit){
//     let bill ;
//     if ( unit <= 117 ){
//     const remaing = 50*2+11;
//     const sum = unit - remaing;
//     bill = sum*250;
//     }
//     else if(unit > 235){
//         const remaing = (50*4)+(11*3);
//         const sum = unit - remaing;
//         bill = sum*250;
//     }
//     return bill;

// }
// console.log(publicBusFare(50));

/*একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । */


function publicBusFare(people) {
    const reservedBus = 50;
    const reservedMicro = 11;
    //rest people will go by public bus
    const publicBusPerPerson = 250;

    const busRemaining = people % reservedBus;
    const microRemaining = busRemaining % reservedMicro;
    const publicBusCost = microRemaining * publicBusPerPerson;
    return publicBusCost;

}

console.log(publicBusFare(50));