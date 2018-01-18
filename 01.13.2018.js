class fantasySentence{
  constructor(){
    this.arrLength = 5
    this.arr=[]
    this.vowels=['au', 'a', 'ao', 'e', 'ei', 'eo', 'i', 'io', 'ir', 'iu', 'oa', 'ou', 'oo', 'oy', 'ui', 'uo', 'yg', 'yi', 'yo', 'y']
    this.consonants=['b', 'bg', '\'', 'b\'th', 'cr', 'ch', 'cc', 'd', 'dr', 'f', 'gh', 'gr', 'h', 'hr', 'j', 'k', 'l', 'm', 'mn', 'mr', 'n', 'n\'g', 'p', 'r', 'rh', 'rg', 's', 't', 'th', 'v', 'w', 'x', 'z']
    //['bth','cc', 'd', 'dh', 'f', 'fr', 'gh', 'gr', 'gw', 'gl', "hg", "h", "jj", "kh", "l", "mx", "mr", "m", "ng", "p", "ph", "kw", "r", "rg", "s", "sh", "th", "t", "vg", "v", "wr", "x", "zg"]
    this.punctuation=['.', ',', ';', '?', '??', '!', '!!', '.', '.', '.']
    this.sentence = []
    this.paragraph = []
    this.createRandomParagraph()
}

capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min))
}

createRandomWord() {
  const vowel = () => this.vowels[this.randomBetween(0, this.vowels.length)]
  const consonant = () => this.consonants[this.randomBetween(0, this.consonants.length)]
  const isConsonant = (item) => this.consonants.includes(item)
  const booly = () => Math.random() >= .5

  const wordParts = []

  for (let x = 0; x < (this.randomBetween(0, 5) + 1); x++) {

    isConsonant(wordParts[wordParts.length - 1]) ? wordParts.push(vowel())
        : booly() ? wordParts.push(consonant()) : wordParts.push(vowel())

        if((x==0) && isConsonant(wordParts[0])){
          console.log(`${wordParts[0]}`)
          wordParts.push(vowel())
        }
  }

  return wordParts.join('')
}

createRandomSentence() {
  this.sentence = []
  for (let x = 0; x < this.randomBetween(2, 10) + 1; x++) {
    this.sentence.push(this.createRandomWord())
  }
  this.sentence = this.sentence.join(' ')
  this.sentence = this.sentence.concat(this.punctuation[this.randomBetween(0, this.punctuation.length)])
}

createRandomParagraph() {
  for (let x = 0; x < this.randomBetween(4, 15) + 1; x++) {
    this.createRandomSentence()
    this.sentence = this.capitalizeFirstLetter(this.sentence)
    this.paragraph.push(this.sentence)
  }

  this.paragraph = this.paragraph.join(` `)
  console.log(this.paragraph)
}

returnParagraph(){
  const par = document.createElement("p")
  par.appendChild(document.createTextNode(this.paragraph))
  par.setAttribute('class', 'fantasy flex-child')
  return par
}

}

const fantasy = new fantasySentence()
const root = document.querySelector("#root");

root.appendChild(fantasy.returnParagraph())
