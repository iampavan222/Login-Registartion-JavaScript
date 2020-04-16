function check(form){
    if(form.username.value=="user" && form.password.value=="Rocky")
    {
        window.open('index.html')
    }
    else{
        alert('Please Check Your UserName and Password')
    }
}