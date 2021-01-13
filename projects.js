const finalGrade = (num , num1 , num2) => {
   let average = (num + num1 + num2) / 3 ; 
   if (num < 0 || num > 100 || num1 < 0 || num1 > 100 || num2 < 0 || num2 > 100 ){
      return'You have entered an invalid grade.'
   } else if ( average >= 0 && average <= 59 ){
      console.log(average)
      return 'F'
   } else if ( average >= 60 && average <= 69 ) {
      console.log(average)
      return 'D'
   } else if (average >= 70 && average <= 79) {
      console.log(average)
      return 'C'

   } else if  (average >= 80 && average <= 89) {
      console.log(average)
      return 'B'
   } else  {
      console.log(average)
      return 'A'
   }
}
const reportingForDuty = (rank , lastName ) =>  `${rank} ${lastName} reporting for duty! ` 
console.log(reportingForDuty( "leutenet" , "hamza" ))
const calculateWeight = (earthWeight,planet) => {
   let newWeight ;
   switch (planet) {
      case 'Mercury' :
         newWeight = earthWeight * 0.378 ;
         break;
      case 'Venus':
         newWeight = earthWeight *  0.907 ;
         break;
      case 'Mars' :
         newWeight = earthWeight *  0.377 ;
         break;
      case 'Jupiter':
         newWeight = earthWeight * 2.36 ; 
         break;
      case 'Saturn' : 
         newWeight = earthWeight * 0.916 ; 
         break; 
      default:
         newWeight = 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
         break;
   }
   return newWeight ; 
}

const numImaginaryFriends = (totalNumberOfFreinds) => Math.round( (totalNumberOfFreinds*35)/100 )
console.log(numImaginaryFriends(100))
const sillySentence = (str1 , str2 , str3 ) => `I am so ${str1} because I ${str2} coding! Time to write some more awesome ${str3}!`
const howOld = (age,year) => {
   let date = new Date()
   let currentYear = date.getFullYear()
   if (year > currentYear){
      let futurAge = age + (year - currentYear)
      return `You will be ${futurAge} in the year ${year}`
   }else if(year < currentYear ) {
      if(year < (currentYear-age)) {
         let numberYears = (currentYear-age) - year
         return `'The year ${year} was ${numberYears} years before you were born`
      } else if (year > (currentYear-age)) {
         let numberYears = (currentYear-age) - year 
          return `You were ${-numberYears} in the year ${year}`
      } else {
         return 'you was born in this year '
      }
   }
}
const tipCalculator = (quality , total) => {
   let tip ;
   switch (quality) {
      case "bad":
         tip = total*(5/100)
         break;
      case "ok":
         tip = total*(15/100)
            break;
      case "good":
         tip = total*(20/100)
            break;
      case "excellent":
         tip = total*(30/100)
            break;
      default:
         tip = total*(18/100)
         break;
   }
   return tip ;
}
console.log(tipCalculator('good', 100)) 
const colorMessage = (favoriteColor,shirtColor) => { 
   if (favoriteColor === shirtColor) {
      return  'The shirt is your favorite color!'
   } else {
      return 'That is a nice color.'
   }
}
const object1 = {
  a: 'somestring',
  b: 42
};
console.log(Object.entries(object1))
// Meal Maker 
const menu = {
   _courses : {
      appetizers : [],
      mains : [],
      desserts : [],
   },
   set appetizers(appetizersin) {
         this._courses.appetizers = appetizersin 
      },
    set  mains(mains) {
         this._courses.mains = mains
      },
   set desserts(desserts){
         this._courses.desserts = desserts 
      },
   get appetizers(){
         return this._courses.appetizers;
      },
   get mains() {
         return this._courses.mains;
      },
      get desserts(){
         return this._courses.desserts;
      }, 
   get courses() {
      return {
         appetizers : this.appetizers ,
         mains : this._courses.mains, 
         desserts : this._courses.mains
      }
   },

   addDishToCourse(courseName , dishName , dishPrice) {
      const dish = {
         dishName ,
         dishPrice
      }
      this._courses[courseName].push(dish);
   },
   getRandomDishFromCourse(courseName) {
          let  dishes = this._courses[courseName] ; 
          let x = Math.floor(Math.random() * dishes.length) 
         return dishes[x];
   },
   generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers') ;
      const main = this.getRandomDishFromCourse('mains') ; 
      const dessert = this.getRandomDishFromCourse('desserts')
      let totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice ; 
      return `Your Meal contains ${appetizer.dishName} , ${main.dishName} , ${dessert.dishName} and the Total price is ${totalPrice}`
      
   }
} 
menu.addDishToCourse('appetizers', 'salade' , 20)
menu.addDishToCourse('appetizers', 'salade' , 20)
menu.addDishToCourse('appetizers', 'salade' , 20)

menu.addDishToCourse('mains', 'meetBalls', 50)
menu.addDishToCourse('mains', 'meetBalls', 50)
menu.addDishToCourse('mains', 'meetBalls', 50)

menu.addDishToCourse('desserts', 'flan', 10)
menu.addDishToCourse('desserts', 'flan', 10)
menu.addDishToCourse('desserts', 'flan', 10)

let meal = menu.generateRandomMeal()
console.log(meal)
console.log(menu.courses)
// Team Stats project 
const team = {
   _players : [
      {firstName: 'Robert',lastName: 'Lewandovski',age: 33},
      {firstName: 'Messi',lastName: 'Leo',age: 33},
      {firstName: 'Ronaldo',lastName: 'Cristiano',age: 35}
   ],
   _games : [
      { opponent: 'Broncos',teamPoints: 42,opponentPoints: 27},
      { opponent: 'Broncos',teamPoints: 42,opponentPoints: 27},
      { opponent: 'Broncos',teamPoints: 42,opponentPoints: 27}
   ],
   get players() {
      return this._players;
   }, 
   get games() {
      return this._games ; 
   }, 
   addPlayers(firstName , lastName , age ) {
      let newPlayer = { firstName , lastName, age };
      this.players.push(newPlayer);
   },
   addGame(opponent,teamPoints,opponentPoints){
      let newGame = {opponent,teamPoints,opponentPoints}
      this.games.push(newGame)
   
   }
    
} 
team.addPlayers('joshwoa' , 'kimmich' , 24 )
team.addGame('hamza', 25, 42 )

console.log(team.players)
console.log(team.games)

// javascript iterators Codecademy Course 

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(element => console.log(`I want to eat a ${element}.`))

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(element => {
   return element[0] ;
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
 const smallNumbers = bigNumbers.map(element => {
    return element/100 ; 
 }) 
 const randomNumbers = [375, 200, 3.14, 7, 13, 852];
 const smallNumbers = randomNumbers.filter(element => {
    return element < 250 ; 
 })

 const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

 const foundAnimal = animals.findIndex(element => {
    return element === "elephant" ; 
 })

 const startsWithS = animals.findIndex(element => {
    return element[0] === "s" ; 
 })
 const newNumbers = [1, 3, 5, 7];
 const newSum = newNumbers.reduce((accc, curntval ) => {
    return accc + curntval ;
 })
 const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue ) => {
  console.log('The value of currentValue: ', currentValue);
  console.log('The value of accumulator: ', accumulator);
    return accumulator +  currentValue ;
 })
