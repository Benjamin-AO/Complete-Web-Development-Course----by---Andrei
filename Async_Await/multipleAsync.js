const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// Promise.all(urls.map(url => {
//     fetch(url)
//         .then(resp => resp.json())
//         .then(newArray => {
//             console.log('users', newArray[0])
//             console.log('posts', newArray[1])
//             console.log('albums', newArray[2])
//         })
// }))


const getData = async function() {
    try{
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', post)
        console.log('albums', albums)
    } catch (err) {
        console.log('oops! Something went wrong.', err)
    }   
}

getData();