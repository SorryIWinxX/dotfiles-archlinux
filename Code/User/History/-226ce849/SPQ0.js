const getDataJSON = () =>{
    let fetchPost = fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    fetchPost.then((response) =>{
        response.json().then((jsonData) =>{
            //console.log(jsonData);

            for (const i of jsonData) {
                let post = jsonData[i];
                
                console.log(post.title);
            }
        })
    })
}