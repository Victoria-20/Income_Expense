var usernameField = document.querySelector('#usernameField');
var feedBackArea = document.querySelector('.error');
let submitbtn = document.querySelector("#submitbtn"); 

submitbtn.addEventListener("click", (e)=>{
    var usernameVal = e.target.value;
    usernameField.classList.remove("invalid-feedback");
    feedBackArea.style.display='none';
    if(usernameVal.length > 0){
        fetch('/authentication/validate-username',{
            body: JSON.stringify({username:usernameVal}),
            method: "POST",
        }).then(response=>response.json()).then(data =>{
            console.log('data', data);
            if(data.username_error){
            usernameField.classList.add("invalid-feedback");
                feedBackArea.style.display='block';
                feedBackArea.innerHTML='<p>&{data.username_error}</p>';

            }
        });
    }
});