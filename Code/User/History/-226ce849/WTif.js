const getDataJSON = () =>{
    let fetchPost = fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    fetchPost.then((response) =>{
        response.json().then((jsonData) =>{
            //console.log(jsonData);

           for (let i = 0; i < jsonData.length; i++) {
            const post = jsonData[i];

            console.log(post);

            var postHTML = document.querySelector('#result');
            
            postHTML.innerHTML+=`<br> ${post.name} <br>`;
            
           }
        })
    })
}