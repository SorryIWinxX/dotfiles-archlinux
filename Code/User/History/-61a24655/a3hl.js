console.log(window);

function getPageUrl(params) {
    let url = window.location.href;
    console.log(url);
    window.history.forward();
}


getPageUrl();



function add(num1,num2) {
    let result = num1+num2
    let emp = {
        "id": 11,
        "age":33}
    window.localStorage.setItem("result",result);
    window.localStorage.setItem("name", "Daniel") // data stored inside localstorage
    localStorage.setItem("emp", emp);
    
    console.log(result);
}

