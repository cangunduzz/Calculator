function val(result) {
  form.disp.value = form.disp.value + result;
}

function calculate() {
  var myAlert = document.querySelector(".alert");
  if (form.disp.value == "") {
    myAlert.classList.remove("hide");
    myAlert.classList.add("show");
    myAlert.classList.add("showAlert");
    setTimeout(function () {
      myAlert.classList.add("hide");
      myAlert.classList.remove("show");
    }, 5000);
  } else {
    form.disp.value = eval(form.disp.value);
  }
}

function cleantable() {
  form.disp.value = ""; //When we click on equal button the result will be clear
}

function closeAlert() {
  var myAlert = document.querySelector(".alert");
  myAlert.classList.add("hide");
  myAlert.classList.remove("show");
}
