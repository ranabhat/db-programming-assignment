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
    const getAlphabetCount = counter(alphabeticOrder)
    const arrayOfEachAlphabetCount = Object.entries(getAlphabetCount).reduce((o, [k, v]) => {
      const [letter] = k.match(/\D+|\d+$/g)
      o[letter] = { ...(o[letter] || {}), [letter]: v }
      return o
    }, {})

    const arrayOfObjectAlbhabet = Object.values(arrayOfEachAlphabetCount)
    return [sentenceBody.length, textWithReplacedSpace.length, wordsInSentence, arrayOfObjectAlbhabet]
  }
}
