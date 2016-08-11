'use strict';

const libraryApi = require('./library-api');
const ui = require('./ui');

const onGetBooks = function (event) {
  event.preventDefault();

  console.log('this is a test');
//stops the refreshing of the form that happens with the form submission. Stops
//dont refresh the page, dont take the data. I will handle it

//get the value of the book-id input fields
//checks to see if there is any value storesd if it doesnt show me the books, if
//not get all the books. other wise get book by id
  let bookId = $('.book-id').val();

  if(bookId.length ===0){
  libraryApi.index()
    .done(ui.onSuccess)
    .fail(ui.onError);
  } else{
    libraryApi.show(bookId)
    .done(ui.onSuccess)
    .fail(ui.onError);
  }
};
//libraryApi.index()
  //.done(ui.onSuccess)
  //.fail(ui.onError);
//}
//};
//NO semicolons. One execution. if successful whatever put in .done is execution
//if fail it drops down to .fail.

//document ready statement. Tells the document wait until the document is ready
//to run that javascript/jquery when ready

$(()=> {
//also can use$(document).ready(function(){
  $('#book-request').on('submit', onGetBooks);

});
// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');
