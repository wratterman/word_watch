const $ = require('jquery')
const ErrorHelper = require('./lib/error-helper')
const baseUrl = "https://wordwatch-api.herokuapp.com"

document.addEventListener("DOMContentLoaded", () => {
  // have fun!
  $.ajax({
    method: "GET",
    url: baseUrl + "/api/v1/top_word",
    success: function (){
      console.log("nil")
    },
    failure: function(){
      ErrorHelper.showError("Could Not Load")
    }
  })
})
