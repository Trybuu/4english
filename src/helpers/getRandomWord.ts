import axios from 'axios'

interface Definition {
  definition: string
  synonyms: string[]
  antonyms: string[]
}

interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: string[]
}

interface License {
  name: string
  url: string
}

interface Phonetic {
  text: string
  audio: string
}

export interface Word {
  word: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  synonyms: string[]
  antonyms: string[]
  license: License
  sourceUrls: string[]
}

async function getWord() {
  const response = await axios.get<string[]>(
    'https://random-word-api.herokuapp.com/word',
  )
  const data = response.data[0]

  return data
}

export async function getWordDetails(word: string) {
  const response = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  )
  return response.data
}

export default async function getRandomWord() {
  let isValidWord: boolean = false

  while (isValidWord !== true) {
    try {
      const wordDetails = await getWordDetails(await getWord())
      isValidWord = true
      return wordDetails
    } catch (error) {
      console.log(error)
    }
  }
}
