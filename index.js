// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (arr){
    return arr.slice(0,2);
}

console.log(returnFirstTwoDrivers(drivers))

// returnLastTwoDrivers

const returnLastTwoDrivers = function (arr){
    return arr.slice(2)
    // return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(drivers))

// selectingDrivers

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers ];
console.log (selectingDrivers[0](drivers))
console.log (selectingDrivers[1](drivers))

// createFareMultiplier
function createFareMultiplier(valone){
    return function (valtwo){
         return valone * valtwo
    }
}

const fareMultiplier = createFareMultiplier(5);
console.log ( fareMultiplier (5) )

// fareDoubler

const fareDoubler = createFareMultiplier (2)

console.log( fareDoubler(10) )

// fareTripler
const fareTripler = createFareMultiplier (3)

console.log( fareTripler(12) )

// selectDifferentDrivers

function selectDifferentDrivers(arr,FirstTwoDrivers){
    return FirstTwoDrivers (arr);
}
console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers))