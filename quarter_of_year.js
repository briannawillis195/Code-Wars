//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

//For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    // Your code here
    const firstQuarter = 1
    const secondQuarter = 2
    const thirdQuarter = 3
    const fourthQuarter = 4
    
    if (month >= 1 && month <= 3){
      return firstQuarter
    } else if (month >= 4 && month <= 6){
      return secondQuarter
    } else if (month >=7 && month <= 9){
      return thirdQuarter
    } else if (month >= 10 && month <= 12){
      return fourthQuarter
    }
    
  }