function Myonclick() {
  alert("hore");
}

function tambahan() {
  var bilangan1 = document.getElementById("input1").value;
  var bilangan2 = document.getElementById("input2").value;
  document.getElementById("hasil").value = parseInt(bilangan1) + parseInt(bilangan2);
}

function pengurangan() {
  var bilangan1 = document.getElementById("input1").value;
  var bilangan2 = document.getElementById("input2").value;
  document.getElementById("hasil").value = parseInt(bilangan1) - parseInt(bilangan2);
}

function perkalian() {
  var bilangan1 = document.getElementById("input1").value;
  var bilangan2 = document.getElementById("input2").value;
  document.getElementById("hasil").value = parseInt(bilangan1) * parseInt(bilangan2);
}

function pembagian() {
  var bilangan1 = document.getElementById("input1").value;
  var bilangan2 = document.getElementById("input2").value;
  document.getElementById("hasil").value = parseInt(bilangan1) / parseInt(bilangan2);
}

function hasil(params) {
  var bilangan1 = document.getElementById("input1").value;
  var bilangan2 = document.getElementById("input2").value;
  var hasil = 0;

  if (params == "+") {
    hasil = parseInt(bilangan1) + parseInt(bilangan2);
  } else if (params == "-") {
    hasil = parseInt(bilangan1) - parseInt(bilangan2);
  } else if (params == "/") {
    hasil = parseInt(bilangan1) / parseInt(bilangan2);
  } else if (params == "*") {
    hasil = parseInt(bilangan1) * parseInt(bilangan2);
  }

  document.getElementById("hasil").value = hasil;
}
