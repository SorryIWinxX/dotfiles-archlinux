console.log(window);

function getPageUrl(params) {
    let url = window.location.href;
    console.log(url);
    window.history.forward();
}


getPageUrl();



function add(num1,num2) {
    let result = num1+num2
    window.localStorage.setItem("result",result);
    console.log(result);
}