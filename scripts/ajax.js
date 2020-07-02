
function getTodo(callback) {
    fetch('http://51.75.120.145:3000/todo').then((res) => {
    return res.json();
}).then((res) => {
    callback(res)
}).catch((error) => {
    console.error(error)
});
}


function postTodo(title, callback) {
    fetch('http://51.75.120.145:3000/todo', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: title}),
    }).then((res) => {
        return res.json();
    }).then((res) => {
        callback();
    }).catch((error) => {
        console.error(error)
    });
    }

function deleteTodo(id, callback) {
    fetch(`http://51.75.120.145:3000/todo/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        return res.json();
    }).then((res) => {
        callback();
    }).catch((error) => {
        console.error(error)
    });
}

function putTodo(id, title, callback) {
    fetch(`http://51.75.120.145:3000/todo/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: title}),
}).then((res) => {
    return res.json();
}).then((res) => {
    callback();
}).catch((error) => {
    console.error(error)
});

}
