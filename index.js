function chatbot()
{
  var button = document.getElementById("button");
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var output = document.getElementById("output")
  
  button.addEventListener("click", chatbot)
  var sum = parseFloat(input1) + parseFloat(input2);
  
  output.innerHTML = sum;
}
chatbot();