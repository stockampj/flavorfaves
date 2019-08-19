$(document).ready(function() {
  var flavors = ['vanilla', 'chocolate', 'strawberry']

  var outputArray = []
    outputArray.push(flavors[0], flavors[1], flavors[2]);

    // the id on the html and the js tells the output where to go
    $('li#output1').text(outputArray[0]);
    $('li#output2').text(outputArray[1]);
    $('li#output3').text(outputArray[2]);


});
