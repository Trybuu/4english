import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { Word } from '../../helpers/getRandomWord'
import MainWordDetails from './MainWordDetails/MainWordDetails'

import classes from './WordDetails.module.scss'

// TODO: Fix this data type...
interface WordState {
  word: { word: { wordData: Word[] } }
}

export default function WordDetails() {
  const data = useSelector((state: WordState) => state.word)

  const [wordData, setWordData] = useState<Word[] | null>(null)

  useEffect(() => {
    console.log(data.word)
    if (data !== null) {
      setWordData(data.word.wordData)
    }
  }, [data])

  return (
    <section className={classes['section-wrapper']}>
      <h2>Word Details</h2>

      {wordData === null
        ? null
        : wordData.map((data) => (
            <>
              <section className={classes['word-details']} key={Math.random()}>
                <MainWordDetails word={data.word} phonetics={data.phonetics} />
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
              </section>
            </>
          ))}
    </section>
  )
}
