function clickMe(){
    var a = document.getElementById("myDiv");
    if(a.innerHTML === "No I'm Right"){
        a.innerHTML = "I'm Right";
    }
}
function noClickMe(){
    var b = document.getElementById("myDiv");
    if(b.innerHTML === "I'm Right"){
        b.innerHTML = "No I'm Right";
    }
}

//------------------------------------------------------
function hoverAlert(){
    alert("Don't hover over me");
}

//------------------------------------------------------
function checkPass(){
    let pass = document.querySelector('input').value;
    let c = document.getElementById("myForm");
    if(pass === '12345678'){
        c.innerHTML = "Correct!";
    }
    else{
        alert('The password is incorrect!');
    } 
}