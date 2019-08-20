$(document).ready(function() {
  $('form.flaveinput').submit(function(event) {
    event.preventDefault();


    var flavors = [$('#ui1').val(), $('#ui2').val(), $('#ui3').val()]
    console.log(flavors);

    var outputArray = []
    // outputArray.push(flavors[0], flavors[1], flavors[2]);

    flavors.forEach(function(flavor) {
      // outputArray.push(flavor);
      $('#flavelist').append('<li>' + flavor + '</li>')
    });






    // the id on the html and the js tells the output where to go
    // $('li#output1').text(outputArray[0]);
    // $('li#output2').text(outputArray[1]);
    // $('li#output3').text(outputArray[2]);

  });
});
