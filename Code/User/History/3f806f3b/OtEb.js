
//print with normal for

function print() {

    for (let index = 0; index < 5; index++) {
        
        console.log(index);
        
    }

    let names = ["jhon","peter","jane","mike"];

    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        
        console.log(element);
    }
    
}

print();


console.log("----------------------------------------------")

//print with forEach

function printWithEach() {
    
    

    let names = ["jhon","peter","jane","mike"];
    
   names.forEach(element => {
        console.log(element);
   });   
}

printWithEach();



console.log("-------------------------------------------");

//print with For of

function printWithForOf() {
        
    let names = ["jhon","peter","jane","mike"];

    for (const i of names) {

        console.log(i);
        
    }
}

printWithForOf();

console.log("-------------------------------------------");

function printObject() {
    
    let student = {
        name:"peter",
        rollNo:567,
        age:23,
        dept:"Phy"
    }

    for (const key in student) {
        console.log("key is" + key + "value is "+ student[key]);
    }

}

printObject();