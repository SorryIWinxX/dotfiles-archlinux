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
    
    console.log(result);
}

