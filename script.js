function toCelsius(farenValue){
  return (farenValue-32)*5/9;
}

function toFaren(celsiusValue){
  return (celsiusValue*9/5) + 32;
}

function isNumeric(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//make sure DOM is loaded before adding any Event Listeners
document.addEventListener('DOMContentLoaded', function(){

  //grab all elements that are needed
  var original = document.querySelector('input#original');
  var faren = document.querySelector('input#faren');
  var celsius = document.querySelector('input#celsius');
  var answer = document.querySelector('div.answer');

  function calculate(e){

    e.preventDefault();

    //validate input
    var input = original.value;
    if(!isNumeric(input)){
      alert('Invalid entry. Please enter a numeric value and try again.');
      return;
    }

    //calculate conversion
    if(faren.checked){

      //check range: validate and change background color/text color
      if(input < -459.67){
        alert('Invalid entry. Please enter a value greater than absolute zero and try again.');
        return;
      }else if (input < 32){
        answer.style.backgroundColor = 'blue';
        answer.style.color = 'white';
      }else if(input > 212){
        answer.style.backgroundColor = 'red';
        answer.style.color = 'white';
      }else{
        answer.style.backgroundColor = '';
        answer.style.color = '';
      }
      answer.innerHTML = toCelsius(input).toFixed(2) + '&degC';
    }else if(celsius.checked){

      //check range: validate and change background color/text color
      if(input < -273.15){
        alert('Invalid entry. Please enter a value greater than absolute zero and try again.');
        return;
      }else if (input < 0){
        answer.style.backgroundColor = 'blue';
        answer.style.color = 'white';
      }else if(input > 100){
        answer.style.backgroundColor = 'red';
        answer.style.color = 'white';
      }else{
        answer.style.backgroundColor = '';
        answer.style.color = '';
      }
      answer.innerHTML = toFaren(input).toFixed(2) + '&degF';
    }

    document.querySelector('input.submit').style = "font-family: 'Sorts Mill Goudy', serif";

  }

  //submit button clicked
  document.querySelector('input.submit').addEventListener('click', calculate);
  //document form submitted
  document.querySelector('form.convert').addEventListener('submit', function(){
    calculate();
    return false;
  });

  //clear button clicked
  document.querySelector('input.clear').addEventListener('click', function(){

    original.value = '';
    answer.innerHTML = ' ';
    answer.style.backgroundColor = '';
    answer.style.color = '';

  });
});
