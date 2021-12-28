function isEmpty(str) {
    return (!str || str.length === 0 );
}

function addUser() {
    user_name = document.getElementById("user_name").value;
    if(isEmpty(user_name))
    {
        alert("Please Type User Name");
        return;
    }
    localStorage.setItem("user_name", user_name);
    
    window.location.replace("reviews.html");
}

