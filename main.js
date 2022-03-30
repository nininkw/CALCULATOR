let result = document.getElementById(`result`);
result.innerHTML = "0";

function decimal() {
  let point = document.getElementById("dotbtn");
  point.disabled = true;
}

function integer() {
  let point = document.getElementById("dotbtn");
  point.disabled = false;
}

function number(num) {
  let num_value = num.innerHTML;
  if (num_value == "AC") {
      result.innerHTML = "0"
      integer();
  } else if (num_value == "=") {
      result.innerHTML = eval(result.innerHTML);
      integer();
  } else {
      if (result.innerHTML == "0") {
        result.innerHTML = num_value;
      } else {
        result.innerHTML += num_value;
      }
  }
}

function operate(ope) {
  integer();
  let f = result.innerHTML.slice(-1);
  if (f == "+") {
      result.innerHTML = result.innerHTML.slice(0,-1) + ope.innerHTML;
  } else if (f == "-") {
      result.innerHTML = result.innerHTML.slice(0,-1) + ope.innerHTML;
  } else if (f == "*") {
      result.innerHTML = result.innerHTML.slice(0,-1) + ope.innerHTML;
  } else if (f == "/") {
      result.innerHTML = result.innerHTML.slice(0,-1) + ope.innerHTML; 
  } else {
    result.innerHTML += ope.innerHTML;
  }
}

function point(dot) {
  decimal();
  let p = result.innerHTML.slice(-1);
  if (p == ".") {
    result.innerHTML = result.innerHTML.slice(0,-1) + dot.innerHTML;
  } else {
    if (result.innerHTML == "0") {
        result.innerHTML = "0" + dot.innerHTML;
    } else {
        result.innerHTML += dot.innerHTML;
    }
  }  
}

