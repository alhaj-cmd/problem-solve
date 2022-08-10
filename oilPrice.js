/**-----------
 * Problem 3: oilPrice

ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

ভিডিও ভালো করে দেখবে। 

প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 

প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 
 
* ----------- */

function oilPrice (DieselFuel, PetrolFuel, OctaneFuel ){
    const perLiterDiesel = 114;
    const perLiterPetrol = 130;
    const perLiterOctane = 135;
// total price
    const sumLiterDiesel = DieselFuel * perLiterDiesel;
    const sumLiterPetrol = PetrolFuel * perLiterPetrol;
    const sumLiterOctane = OctaneFuel * perLiterOctane;

    const totalPrice =sumLiterDiesel + sumLiterPetrol + sumLiterOctane;
    return totalPrice;

}

console.log(oilPrice(1,1,1));