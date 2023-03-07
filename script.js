function val(result) {
  form.disp.value = form.disp.value + result;
}
function calculate() {
  if (form.disp.value == "") {
    alert("Lütfen Rakam Giriniz");
  } else {
    form.disp.value = eval(form.disp.value);
  }
}

function cleantable() {
  form.disp.value = ""; //When we click on equal button the result will be clear
}
