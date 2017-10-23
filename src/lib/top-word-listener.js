const $ = require('jquery')
const ErrorHelper = require('./error-helper')
const baseUrl = "https://wordwatch-api.herokuapp.com/api/v1"

const getWord = () => {
  $.ajax({
    method: "GET",
    url: `${baseUrl}/top_word`,
    success: function (data){
      let formatted = []
      wordObject = data.word
      for (let word in wordObject) {
        formatted.push(word)
        formatted.push(wordObject[word])
      }
      $("h3").append(`"${formatted[0]}" (${formatted[1]})`)
    },
    failure: function(){
      ErrorHelper.showError("Could Not Load")
    }
  })
}

module.exports = {
  getWord
}
