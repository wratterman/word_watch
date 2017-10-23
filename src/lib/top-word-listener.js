const $ = require('jquery')
const ErrorHelper = require('./error-helper')
const baseUrl = "https://wordwatch-api.herokuapp.com/api/v1"

const getWord = () => {
  $.ajax({
    method: "GET",
    url: `${baseUrl}/top_word`,
    success: function (data){
      a = JSON.stringify(data.word)
      $("h3").append(a)
    },
    failure: function(){
      ErrorHelper.showError("Could Not Load")
    }
  })
}

module.exports = {
  getWord
}
