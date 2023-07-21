var score=8;
console.log("Mid-level skills:", score>0 && score<10);


var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining ==0 || energy ==0);


var num1=2, num2=5;
var test1 = num1 % 2, test2 = num2 % 2;
var result1 = !test1, result2 = !test2;
console.log("Is " + num1 + " an even number?", result1);
console.log("Is " + num2 + " an even number?", result2);



//if, else if, else

var place = 'first';

if(place == 'first') {
    console.log('Gold')
} else if (place =='second') {
    console.log('Silver')
} else if (place =='third') {
    console.log('Bronze') 
} else {
    console.log('No medal')
} //output Gold

//switch statement

var place ='fourth';

switch(place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No Medal');
} // output: No Medal


var age = 10;
if (age > 65 || age == 65) {
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get salary")
} else if (age <18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical.")
}

var day = "Monday";
switch(day) {
    case 'Monday':
        console.log('Do Something1');
        break;
    case 'Tuesday':
        console.log('Do Something2');
        break;
    case 'Wednesday':
        console.log('Do Something3');
        break;
    case 'Thursday':
        console.log('Do Something4');
        break;
    case 'Friday':
        console.log('Do Something5');
        break;
    case 'Saturday':
        console.log('Do Something6');
        break;
    case 'Sunday':
        console.log('Do Something7');
        break;
    default:
        console.log('There is no such day');
}

for (var i = 1; i <= 5; i++) {
    console.log(i);
};
console.log('Counting completed!');

// output
1
2
3
4
5
Counting completed!

for (var i = 5; i > 0; i--) {
    console.log(i);
};
console.log('Countdown finished!');
//output
5
4
3
2
1
Countdown finished!


var i = 1;
while (i < 6) {
    console.log(i);
    i++;
};
console.log('Counting completed!');

//output
1
2
3
4
5
Counting completed!

var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;
};
console.log('Counting completed!');

//output
5
4
3
2
1
Counting completed!

var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};
//output
2018
2019
2020
2021
2022

