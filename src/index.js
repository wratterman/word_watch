const TopWordListerner = require('./lib/top-word-listener')
const ParagraphListener = require('./lib/paragraph-listener')


document.addEventListener("DOMContentLoaded", () => {
  // have fun!
  TopWordListerner.getWord()

  ParagraphListener.sortWords()
})
