module.exports = {
  analyze: (receiveValue) => {
    const sentenceBody = receiveValue // Object Property Text Length

    const textWithReplacedSpace = sentenceBody.replace(/\s/g, '') // All spaces stripped from the string
    const textWithRemovedNumber = textWithReplacedSpace.replace(/[^a-zA-Z ]/g, '')

    const textSplit = textWithRemovedNumber.split('')

    // return all values from array in lowercase
    const alphabetLowercase = textSplit.map((value) => {
      return value.toLowerCase()
    })
    const alphabeticOrder = alphabetLowercase.sort().join('')
    const wordsInSentence = (sentenceBody === '') ? 0 : sentenceBody.trim().split(/\s+/).length // words counts

    // counter = (‘abc’) => (Object { a: 1, b: 1, c: 1 })
    const counter = str => {
      return str.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1
        return total
      }, {})
    }

    const getAlphabetCount = counter(alphabeticOrder)
    // (Object { a: 1, b: 1, c: 1 } => Object {“a”: {“a”: 3 }, “b”: { “b”: 1},”c”: { “c”: 1)}
    const arrayOfEachAlphabetCount = Object.entries(getAlphabetCount).reduce((o, [k, v]) => { // k- key, v- value
      const [letter] = k.match(/\D+|\d+$/g)
      o[letter] = { ...(o[letter] || {}), [letter]: v }
      return o
    }, {})

    const arrayOfObjectAlbhabet = Object.values(arrayOfEachAlphabetCount) // = > Array [Object { a: 1 }, Object { b: 2 }, Object { c: 3 }]
    return [sentenceBody.length, textWithReplacedSpace.length, wordsInSentence, arrayOfObjectAlbhabet]
  }
}
