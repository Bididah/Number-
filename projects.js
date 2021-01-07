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