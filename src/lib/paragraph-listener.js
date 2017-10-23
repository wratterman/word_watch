const $ = require('jquery')
const ErrorHelper = require('./error-helper')
const baseUrl = "https://wordwatch-api.herokuapp.com/api/v1"

const sortWords = () => {
  $("button").on("click", function(element) {
    words = (this.parentElement.children[1].value).split(" ")
    parseParaphraph(words)
  })
}

const parseParaphraph = (words) => {
  let timesSaid = {}
  words.forEach(function(word){
    if (timesSaid[word.toLowerCase()]) {
      timesSaid[word.toLowerCase()] ++
    } else {
      timesSaid[word.toLowerCase()] = 1
    }
  })
  formatAndSortVals(timesSaid)
}

const formatAndSortVals = (timesSaid) => {
  let sorted = []
  for (var word in timesSaid) {
    sorted.push([word, timesSaid[word]])
  }
  sorted.sort(function(a, b) {
    return a[1] - b[1]
  })
  appendPage(sorted)
}

const appendPage = (sorted) => {
  sorted.reverse().forEach(function(word) {
    $(".word-count").append(word[0] + "<br>")
    postWord(word[0])
  })
}

const postWord = (word) => {
  $.ajax({
    method: "POST",
    url: `${baseUrl}/words`,
    data: { word: {value: `${word}` } },
    success: function (data){
      console.log("nice")
    },
    failure: function(){
      ErrorHelper.showError("Could Not Load")
    }
  })
}

module.exports = {
  sortWords
}
