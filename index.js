// Add your code here

function submitData (firstName, email) {
    const userObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email
        })
    };
    return fetch("http://localhost:3000/users", userObj)
    .then(res => res.json())
    .then(body => addNewUser(body.id))

    .catch(response => document.body.append('Unauthorized Access'));
}
    function addNewUser(newID){
        document.getElementsByTagName("body")[0].innerHTML = newID;
        document.body.append(message)
    }
    submitData("Marco", "marco_velarde@hotmail.com"); 