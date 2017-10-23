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

  $("button").on("click", function(element) {
    a = (this.parentElement.children[1].value).split(" ")
    timesSaid = {}
    a.forEach(function(word){
      if (timesSaid[word.toLowerCase()]) {
        timesSaid[word.toLowerCase()] ++
      } else {
        timesSaid[word.toLowerCase()] = 1
      }
    })
    let sorted = []
    for (var word in timesSaid) {
      sorted.push([word, timesSaid[word]])
    }
    sorted.sort(function(a, b) {
      return a[1] - b[1]
    })
    let display = []
    sorted.reverse().forEach(function(word) {
      display.push(word[0])
      $(".word-count").append(word + "<br>")
    })
    display.forEach(function(word){
    })
    debugger
  })
})
