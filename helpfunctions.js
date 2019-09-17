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
        // console.log(total)
        // console.log(total[letter])
        return total
      }, {})
    }
    const test1 = (counter(alphabeticOrder))
    console.log(typeof(test1))
    console.log(test1['e'])
    const items = Object.keys(test1).map(function(key) {
       item1 = `{"${key}" : ${test1[key]}}`
       replaceItem1 = item1.replace(/'/g, '')
       return item1
    })
    console.log(items)
    const diii = []
    for (const key of Object.keys(test1)) {
      
      const value = test1[key]
     // console.log(`{'${key}' : ${value}}`)
      diii.push(`{"${key}" : ${value}}`)
      
   }
    console.log(diii)
    return [sentenceBody.length, textWithReplacedSpace.length, wordsInSentence, [counter(alphabeticOrder)]]
  }
}
