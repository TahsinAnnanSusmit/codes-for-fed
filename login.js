function validate()
{
    var username=document.getElementById(username).nodeValue
    var username=document.getElementById(password).nodeValue
    
    if(username=="admin" && password == "user")
    {
        alert("login done");
        return false;

        else
        {
            alert(login failed.);
        }
    }
}