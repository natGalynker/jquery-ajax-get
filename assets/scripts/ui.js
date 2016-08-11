'use strict';

const onSuccess = function(data){
//need to specify if it is one resource or to be used with multiple resources
  if(data.book){
    console.log(data.book);
  } else{
    console.log(data.books);
  }
};
const onError = function(response) {
  console.error(response.books);

};
module.exports = {
  onError,
  onSuccess,
};
