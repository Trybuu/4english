import { useSelector } from 'react-redux'
import classes from './WordDetails.module.scss'
import { useEffect, useState } from 'react'

import { Word } from '../../helpers/getRandomWord'
interface WordState {
  word: Word[] | null
}

export default function WordDetails() {
  const data = useSelector((state: WordState) => state.word)
  const [wordData, setWordData] = useState<Word[] | null>(null)

  useEffect(() => {
    if (data.word !== null) {
      setWordData(data.word.word)
    }
  }, [data])

  function renderAudioPlayer(source: string) {
    if (source) return <span>Audio Play</span>
  }

  return (
    <>
      <section className={classes['section-wrapper']}>
        <h2>Word Details</h2>
        {wordData === null
          ? ''
          : wordData.map((data, index) => (
              <section className={classes['word-details']} key={Math.random()}>
                <div className={classes['word-details__main']}>
                  <h3 className={classes['word-details__word']}>{data.word}</h3>
                  {data.phonetics.map((phonetic, index) => {
                    return (
                      <>
                        <p key={Math.random()}>
                          {phonetic.text !== undefined
                            ? phonetic.text
                            : "Ther's no phonetic"}{' '}
                          {renderAudioPlayer(phonetic.audio)}
                        </p>
                      </>
                    )
                  })}
                </div>

                <div>
                  {data.meanings.map((meaning, index) => {
                    return (
                      <>
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
                      </>
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
            ))}
      </section>
    </>
  )
}
