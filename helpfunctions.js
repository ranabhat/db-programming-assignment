module.exports = {
  analyze: (receiveValue) => {
    const sentenceBody = receiveValue // Object Property Text Length
    const textWithReplacedSpace = sentenceBody.replace(/\s/g, '') // All spaces stripped from the string
    const textWithRemovedNumber = textWithReplacedSpace.replace(/[^a-zA-Z ]/g, '')
    const alphabeticOrder = textWithRemovedNumber.split('').sort().join('')
    const wordsInSentence = sentenceBody.trim().split(/\s+/).length // words counts
    const counter = str => {
      return str.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1
        return total
      }, {})
    }
    return [sentenceBody.length, textWithReplacedSpace.length, wordsInSentence, [counter(alphabeticOrder)]]
  }
}
