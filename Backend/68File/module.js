console.log("This is module");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
       sum += element; 
    });
    return sum/arr.length;
}

// If you need to give access any function then you need exports first
module.exports = average;

// If you want to exports multiple module

module.exports = {
    avg: average,
    name: "chintan",
    repo: "GitHub"
};
// Another way to define exports by single value
module.exports.name = "Chintan";