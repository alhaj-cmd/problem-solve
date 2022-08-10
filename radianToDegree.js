/**-------------
 * Problem:1  radianToDegree
 * 
ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
 
* ---------------- */


function radianToDegree(radian){
    if(typeof radian != 'number'){
        return'please enter a valid number';
    }

        let Degrees= radian * 57.2958;
        let Degree = Degrees.toFixed(2);
        return Degree;
    
}

console.log(radianToDegree(10));