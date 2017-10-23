const $ = require('jquery')

const sortWords = () => {
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
      $(".word-count").append(word[0] + "<br>")
    })
    display.forEach(function(word){
    })
  })
}

module.exports = {
  sortWords
}
