console.log(window);

function getPageUrl(params) {
    let url = window.location.href;
    console.log(url);
    window.history.forward();
}


getPageUrl();