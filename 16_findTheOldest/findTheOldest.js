function getAge(birth, death){

    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth
}

const findTheOldest = function(arr) {

    let oldest = arr[0];
    for (const objects of arr) {
        if(getAge(objects.yearOfBirth, objects.yearOfDeath) > getAge(oldest.yearOfBirth, oldest.yearOfDeath)){
            oldest = objects;
        }
    }
    return oldest;

}

// Do not edit below this line
module.exports = findTheOldest;
