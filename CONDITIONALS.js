/* 
--------------------
CONDITIONALS
--------------------
1. meaning of: >, <, >=, <=, ==, !=, ===, !==, 
2. Meaning of &&
3. Meaning of ||
4. Let's say you have x amount of money. if you have more than 80,000, then you will by a mac
if more than 60,000 then you will by gaming laptop
if you more than 40,000 then  you will by Lenovo Yoga
if you have more than 20, 000 then  you will by an used laptop
otherwise, you will use you mobile phone
*/

var myMoney = 40000;
var usedLaptop = 20000;
var gamingLaptop = 60000;
var lenovo = 40000;

if (myMoney >= gamingLaptop) {
    console.log('Gaming Laptop')
}
else if (myMoney >= lenovo) {
    console.log('Lenovo Laptop')
}
else if (myMoney >= usedLaptop) {
    console.log('Used Laptop')
}
else {
    console.log('mobile phone')
}