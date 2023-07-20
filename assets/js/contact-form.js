

const eventForm = document.querySelector("form");
const Iname = document.querySelector('#name');
let Iemail = document.querySelector('#email');
let Isubject = document.querySelector('#subject');
let Imessage = document.querySelector('#message');

let register = (data)=>{
    fetch("http://localhost:8080/register",{
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then((e)=>{
        alert("Message sent successfull.", 6000, 'success');
    }).catch((e)=>{
        alert("Failed to send message.", null, 'error');
    }).finally(()=>{
        alert(e, null, 'warning');
    });
}

const clearFields = () =>{
    Iname.value = "",
    Iemail.value = "",
    Isubject.value = "",
    Imessage.value = ""
}

eventForm.addEventListener('submit', function(e){
    e.preventDefault();
    const data = {
        name: Iname.value,
        email: Iemail.value,
        subject: Isubject.value,
        message: Imessage.value
    };

    register(data);

    /*alert(
        "Name: "+data.name +
        " Email: "+data.email +
        " Subject: "+data.subject +
        " Message: "+data.message, 6000, 'success'
    );*/

    clearFields();
});
