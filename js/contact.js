function checkForm(form){
  alert("mdmdmwm");
  if (form.inputfield.value == ""){
    alert("Error: Input is empty!");
    form.inputfield.focus();
    return false;
  }
  //regular expression to match only alphanumeric characters and spaces
  var re = /^[\w ]+$/;

  //validation fails if the input doesn't mathc our regular expression
  if(!re.test(form.inputfield.value)){
    alert("Error: Input contains invalid characters!");
    form.inputfield.focus();
    return false;
  }

  return true;
}
