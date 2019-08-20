$(document).ready(function() {
  $('form.flaveinput').submit(function(event) {
    event.preventDefault();


    var flavors = [
      $('#ui1').val(),
      $('#ui2').val(),
      $('#ui3').val()
    ]


    // flavors.forEach(function(flavor) {
    //   $('#flavelist').append('<li>' + flavor + '</li>')
    // });

    for (var index = 0; index < flavors.length; index += 1) {
      var flavor = flavors[index];
      $('#flavelist').append('<li>' + flavor + '</li>');
    }
  });
});
