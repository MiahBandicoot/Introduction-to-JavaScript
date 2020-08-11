/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge=17
if(votingAge>18){
   console.log (true) 
}
else {
    console.log (false)
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let variable1=12
if(variable1>10){
   console.log( variable1*10)
}
else{
console.log(variable1*0)
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


console.log(Number("1999"))


//Task d: Write a function to multiply a*b 

function mult(a,b){
    console.log(a*b)
}
(mult(4,8))


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function convAge(hum,dog){
    console.log(hum*dog)
}
convAge(5,7)




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function feed(age,weight){
    if(age<=1 && weight<=5){
    console.log(weight*.05)
}
else if(age>=1 && weight>=6 && weight<=10){
console.log(weight*.04)
}
else if(age>=1 && weight>=11 && weight<=15){
    console.log(weight*.03)
    }
    else if(age>=1 && weight>15 ){
        console.log(weight*.02)
        }
        else if(age>=.16 && age<=.33){
            console.log("10% of weight")
            }
            else if(age<=.33 && age<=.58){
                console.log("5% of weight")
                }
                else if(age<=.58 && age<=1){
                    console.log("5% of weight")
                    }
                    else{
                        console.log("See the vet for details")
                    }
}
feed(1,15)



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function game(play){
    var compPlay=Math.round(Math.random()*2)
    const rock=0
const paper=1
const scissors=2
  
  if(play===0 && compPlay===0){
      console.log(`Tie`)
  }
  else if(play===0 && compPlay===1){
    console.log(`Lose`)
}
else if(play===0 && compPlay===2){
    console.log(`Win`)
}
else if(play===1 && compPlay===1){
    console.log(`Tie`)
}
else if(play===1 && compPlay===2){
  console.log(`Lose`)
}
else if(play===1 && compPlay===0){
  console.log(`Win`)
}
if(play===2 && compPlay===2){
    console.log(`Tie`)
}
else if(play===2 && compPlay===0){
  console.log(`Lose`)
}
else if(play===2 && compPlay===1){
  console.log(`Win`)
}
}
game(1)
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function convertk(kilometers){
    console.log(kilometers*.621)
}
convertk(5)



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  function convertf(feet){
      console.log(feet*30.48)
  }
convertf(10)



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(){
    for(let i=99; i>0; i--){
console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i-1} bottles of soda on the wall`)
    }
}
annoyingSong()


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grading(score){
    if(score>=90){
        console.log("A")
    }
    else if(score<90 && score>=80){
        console.log("B")
    }
    else if(score<80 && score>=70){
        console.log("C")
    }
    else if(score<70 && score>=60){
        console.log("D")
    }
    else {
        console.log("F")
    }
}
  grading(75)
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
function vowels(){
const string=[`Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.`]

console.log(string.length.includes(`A,a,E,e,I,i,O,o,U,u`))

}
console.log(vowels())

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





