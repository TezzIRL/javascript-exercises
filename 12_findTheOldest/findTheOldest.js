const findTheOldest = function (people) {
    // calculate age by death year or current year - birth year
    // return highest age
    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)

        return oldestAge > currentAge ? oldest : current
    })
};

const getAge = (birthYear, deathYear) => {
    if (!deathYear) {
        deathYear = new Date().getFullYear()
    }
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
