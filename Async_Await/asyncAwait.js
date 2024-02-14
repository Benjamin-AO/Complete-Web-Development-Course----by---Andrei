// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resp => resp.json())
//     .then(resp2 => {console.log(resp2)});


async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
}

fetchUsers();