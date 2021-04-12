function check(){
    var originalname = "Stefan";
    var originalpassowrd = "stefan123";
    var nam = document.forms["form"].name.value;
    var password = document.forms["form"].password.value;

    if(nam == originalname && password==originalpassowrd){
        alert("LOGED")
        return true;
    }else
        alert("NOTLOGED")
        return false;
}