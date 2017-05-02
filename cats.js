$(document).ready(function() {

  var rootURL = 'http://bitkittens.herokuapp.com/cats.json'

  $('.summon-cats').on('click', function() {
    console.log('You did a thing!');
    $.ajax({
      url: rootURL,
      method: 'GET',
      dataType: 'json'
    }).done(function (responseData) {
      var cats = [];
      for (var i = 0; i < responseData.cats.length; i++) {
        // To reiterate how this works. 'i' set at 0, checked against the total number of items returned by the ajax query, increases by one, loops.
        var cat = $('<img>');
        // creates an HTML img tag for each cat. Adds the following attributes based on info returned via AJAX query.
        cat.attr('src', responseData.cats[i].photo);
        cat.attr('alt', responseData.cats[i].name);
        cats.push(cat);
        // Push to the cat image!
      }
      var catbox = $('.cat-box');
      // Define a varible for the cat box div from the HTML
      catbox.each(function(index) {
        // Iterate over each cat in the array via it's index value.
        cats[index].appendTo($(this));
        // Still not sure how 'this' works... It is pretty confusing.
      });
  });
});

});
