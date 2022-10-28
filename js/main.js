//1
const sentence = ["sense", "make", "all", "will", "This"];
const newReverseArray = []
function reverseArray (sentence){
    for(i=4; i>=0; i--){
        newReverseArray.push(sentence[i])
    }
}
reverseArray(sentence)
console.log(newReverseArray)

// const sentence = ["sense", "make", "all", "will", "This"];
// console.log(sentence.reverse())


//2
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
function greetAliens(){
    for(let name of aliens){
        console.log(`Oh powerful ${name}, we humans offer our unconditional surrender!`)
    }
}
greetAliens()

//3
const coolStuff = ["gameboys", "skateboards", "backwards hats", "my room", "temporary tattoos"]
const myStuff =["sweaters", "skateboards", "family-night", "my room"]

let justCoolStuff = coolStuff.filter((value)=>{
    return myStuff.includes(value)
})
console.log(justCoolStuff);

//4
const meal = [
    { name: "arugula", source: "plant" },
    { name: "tomatoes", source: "plant" },
    { name: "lemon", source: "plant" },
    { name: "olive oil", source: "plant" },
]
const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" },
]

function isTheDinnerVegan(arry){
    for (let elem of arry){
        if(Object.values(elem)[1]==='plant'){
            return true;
        }
        else{
            return false;
        }
    }
}



console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));



