import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { Word } from '../../helpers/getRandomWord'
import MainWordDetails from './MainWordDetails/MainWordDetails'

import classes from './WordDetails.module.scss'

interface WordState {
  word: {
    word: Word[]
  }
}

export default function WordDetails() {
  const data: WordState = useSelector((state: WordState) => {
    console.log('⚠️⚠️⚠️')
    console.log(state)
    return state.word
  })

  const [wordData, setWordData] = useState<Word[] | null>(null)

  useEffect(() => {
    const newWord = data?.word ?? null
    if (data.word !== null) {
      console.log(data)
      setWordData(newWord.word)
    }
  }, [data])

  console.log(wordData)
  return (
    <>
      <section className={classes['section-wrapper']}>
        <h2>Word Details</h2>

        {wordData === null
          ? null
          : wordData.map((data) => (
              <>
                <section
                  className={classes['word-details']}
                  key={Math.random()}
                >
                  <MainWordDetails
                    word={data.word}
                    phonetics={data.phonetics}
                  />
                  <div>
                    {data.meanings.map((meaning, index) => {
                      return (
                        <div key={index}>
                          <div
                            className={classes['part-of-speech']}
                            key={index * Math.random()}
                          >
                            <p className={classes['part-of-speech__text']}>
                              {meaning.partOfSpeech}
                              <span
                                className={classes['part-of-speech__stripe']}
                              ></span>
                            </p>
                          </div>

                          <h4>Definition</h4>
                          <ul>
                            {meaning.definitions.map((definition) => {
                              return (
                                <ul key={definition.definition}>
                                  <li>{definition.definition}</li>
                                </ul>
                              )
                            })}
                          </ul>
                        </div>
                      )
                    })}
                  </div>

                  {/* <div>
                  <h3>License</h3>
                  <a href={data.license.url} target="_blank">
                    {data.license.name}
                  </a>
                </div>

                <div>
                  <h3>Sources</h3>
                  <ul>
                    {data.sourceUrls.map((source) => (
                      <li>
                        <a href={source}>{source}</a>
                      </li>
                    ))}
                  </ul>
                </div> */}
                </section>
              </>
            ))}
      </section>
    </>
  )
}
