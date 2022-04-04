const signUp = e => {
    let name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        pass= document.getElementById('pass').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.email == email);

    if(!exist){
        formData.push({ name, email, pass});
        localStorage.setItem('formData', JSON.stringify(formData));

        document.querySelector('form').reset();
        document.getElementById('email').focus();
        
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    }
    e.preventDefault();
}
function login(e) {
    let email = document.getElementById('email').value, pass = document.getElementById('pass').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email == email && data.pass == pass);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "index.html";
    }
    e.preventDefault();
}
