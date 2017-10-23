const $ = require('jquery')
const ErrorHelper = require('./lib/error-helper')
const baseUrl = "https://wordwatch-api.herokuapp.com"

document.addEventListener("DOMContentLoaded", () => {
  // have fun!
  $.ajax({
    method: "GET",
    url: baseUrl + "/api/v1/top_word",
    success: function (data){
      a = JSON.stringify(data.word)
      $("h3").append(a)
    },
    failure: function(){
      ErrorHelper.showError("Could Not Load")
    }
  })

  $("button").on("click", function() => {
    debugger
  })
})
