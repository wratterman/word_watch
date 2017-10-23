const $ = require('jquery')
const ErrorHelper = require('./error-helper')
const baseUrl = "https://wordwatch-api.herokuapp.com/api/v1"

const sortWords = () => {
  $("button").on("click", function(e) {
    words = (this.parentElement.children[1].value).split(" ")
    parseParaphraph(words)
  })

  $("textarea").keypress(function(e) {
    if (e.which == 13) {
      words = (this.parentElement.children[1].value).split(" ")
      parseParaphraph(words)
    }
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
    $(".word-count").append(`<p class="${word[0]}"> ${word[0]}</p><br />`)
    $(`.${word[0]}`).css(`font-size`, `${word[1]}em`)
    postWord(word[0].toLowerCase())
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
