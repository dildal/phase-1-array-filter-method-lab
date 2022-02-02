// Code your solution here
function findMatching(drivers, name){
    return drivers.filter((driver)=> {
        return driver.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(names, chars){
    return names.filter((name) => {
        return name.indexOf(chars) === 0;
    })
}

function matchName(drivers, name){
    return drivers.filter((driver) => {
        return driver.name === name;
    })
}