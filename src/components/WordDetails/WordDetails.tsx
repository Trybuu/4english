import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { Word } from '../../helpers/getRandomWord'
import MainWordDetails from './MainWordDetails/MainWordDetails'

import classes from './WordDetails.module.scss'
import LoadingEffect from '../../ui/loadingEffect/LoadingEffect'
import DefinitionWordDetails from './DefinitionWordDetails/DefinitionWordDetails'
import LicenseWord from './LicenseWord/LicenseWord'

// TODO: Fix this data type...
interface WordState {
  word: { word: { wordData: Word[] } }
}

export default function WordDetails() {
  const data = useSelector((state: WordState) => state.word)

  const [wordData, setWordData] = useState<Word[] | null>(null)

  useEffect(() => {
    if (data !== null) {
      setWordData(data.word.wordData)
    }
  }, [data])

  return (
    <section className={classes['section-wrapper']}>
      <h2>Word Details</h2>

      {wordData === null ? (
        <LoadingEffect />
      ) : (
        wordData.map((data, index) => (
          <section key={index} className={classes['section-wrapper']}>
            <section className={classes['word-details']} key={Math.random()}>
              <MainWordDetails word={data.word} phonetics={data.phonetics} />
              <DefinitionWordDetails meanings={data.meanings} />
              <LicenseWord
                license={data.license}
                sourceUrls={data.sourceUrls}
              />
            </section>
          </section>
        ))
      )}
    </section>
  )
}
