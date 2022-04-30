// Code your solution in this file!
const returnFirstTwoDrivers = function(list) {
    return list.slice(0, 2);
}

const returnLastTwoDrivers = function(list) {
    return list.slice(-2);
}

var selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = function(numberOfTickets){
    return function(fare) {
        return  numberOfTickets * fare
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, thing) {
    if (thing === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else {
        return returnLastTwoDrivers(drivers);
    }
}