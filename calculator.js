let math = document.querySelector('input');
function clicking (value){

math.value += value;
};
function calculation (){
math.value = eval(math.value);
};
function clean (){
math.value='';
};
function deletion (){
  math.value = math.value.slice(0,-1);
};
