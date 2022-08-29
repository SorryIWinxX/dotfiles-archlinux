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

function printWithEach() {
    
    

    let names = ["jhon","peter","jane","mike"];
    
   names.forEach(element => {
        console.log(element);
   });   
}

printWithEach();