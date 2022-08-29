const getDataJSON = () =>{
    let fetchPost = fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    fetchPost.then((response) =>{
        response.json().then((jsonData) =>{
            //console.log(jsonData);

           for (let i = 0; i < jsonData.length; i++) {
            const post = jsonData[i];

            let postHTML = document.querySelector('#result');

            const post2 = JSON.stringify(post.name);

            postHTML.innerHTML = `${post2}`
            
           }
        })
    })
}