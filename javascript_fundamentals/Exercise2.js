// Exercise 2
// Write a function, agreeOrDisagree(), that takes in two strings, 
// and returns 'You agree!' if the two strings are the same and 
// 'You disagree!' if the two strings are different.

const agreeOrDisagree = (opinion1, opinion2) => {
    if (opinion1 === opinion2){
      console.log('You agree!');
    } else {
      console.log('You disagree!');
    }
  }

  console.log(agreeOrDisagree("yep", "yep"));