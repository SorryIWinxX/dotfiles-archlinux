console.log(window);

function getPageUrl(params) {
    let url = window.location.href;
    console.log(url);
    window.history.forward();
}


getPageUrl();



function add(num1,num2) {
    let result = 4 + 5;
    let emp =JSON.stringify( {
        "id": 11,
        "age": 33});
    window.localStorage.setItem("result",result);
    window.localStorage.setItem("name", "Daniel") // data stored inside localstorage
    localStorage.setItem("empOne", emp);
    
}

function getStoregeData() {

    let name = localStorage.getItem("name");
    let result = localStorage.getItem("result");
    let e = localStorage.getItem("empOne");

    console.log(typeof (name) + " name is " + name);
    console.log(typeof (result) + " name is " + result);
    console.log(typeof (e) + " name is " + e);
   
    console.log(name);
    consosle.log(parseInt(result));
    let empObj = JSON.parse(e);
    console.log(typeof(empObj));
    console.log(empObj);

    const {id,age} = empObj;//Object destructing another feature of ES6
    console.log(id);
    console.log(age);
    
}

function clearData() {
   localStorage.clear(); 
}
