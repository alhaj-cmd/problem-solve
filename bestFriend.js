/**
 * তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।
 */
function isBestFriend(object1, object2) {
    if (object1.name == object2.friend && object1.friend == object2.name) {
        return true;
    }
    else {
        return false;
    }
}
const part1 = { name: 'abul', friend: 'kabul' };
const part2 = { name: 'kabul', friend: 'abul' };
console.log(isBestFriend(part1, part2));
