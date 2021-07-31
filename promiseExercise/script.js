// Create three functions tat check inserted userName and password
// Use timeouts to simulate delays
// Third function must perform check of the userName and password and return promise to the second one. 
// The second function must alse return promise
// Create an error or success notification to the user

let userName;
let passwords;

const users = [
    {userName: 'user1', password: '1111',},
    {userName: 'user2', password: '2222',},
    {userName: 'user3', password: '3333',},
    {userName: 'user4', password: '4444',},
];

function checkData() {
    userName = document.getElementById('userName').value;
    password = document.getElementById('password').value;
    document.body.innerHTML = `<h1>Saving inputs....</h1>`;
    setTimeout(() => {
        saveData(users, userName, password)
        .then((y) => document.body.innerHTML = `<h1>Welcome ${y}</h1>`)
        .catch((x) => document.body.innerHTML = `<h1>${x}</h1>`)
        .finally(() => console.log('the end'));
    }, 1000);
}

function saveData(arr) {
    return new Promise((resolve, reject) => {
        document.body.innerHTML = `<h1>Sent data for verification....</h1>`;
        setTimeout(() => {
            checkUserPassword(arr)
            .then((y) => resolve(y))
            .catch((x) => reject(x))
            .finally(() => console.log('saveData finished'));
        }, 1000);
    });

};

function checkUserPassword(arr) {
    return new Promise((resolve, reject) => {
        document.body.innerHTML = `<h1>Authentification ....</h1>`;
        setTimeout(() => {
            let userExsist = arr.find(item => item.userName == userName)
            userExsist ? userExsist.password == password ? resolve(userName) : reject('Incorrect password') : reject(`User ${userName} is not found`);

            // the same result using filter and map but more bulky
            // let userExsist = arr.filter(item => item.userName == userName);
            // userExsist.length ? (userExsist.map(user => user.password == password ? resolve(userName) : reject('Incorrect password'))) : reject(`User ${userName} is not found`);
            console.log('Passed checkUserPassword with result ' + userExsist);
        }, 1000);  
    })
}



