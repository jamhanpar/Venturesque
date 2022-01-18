// XMLHttpRequest

let request = new XMLHttpRequest();
request.open("GET", 'https://randomuser.me/api/');
request.send();
request.onload = () => {
    console.log(request);

    if (request.status === 200) {
        console.log(JSON.parse(request.response));
    } else {
        console.log(`error: ${request.status} ${request.statusText}`)
    }
}

// Fetch

// Ajax

// Axios