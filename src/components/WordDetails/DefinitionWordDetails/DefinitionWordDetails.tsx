import classes from './DefinitionWordDetails.module.scss'

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

interface PropsTypes {
  meanings: Meaning[]
}

export default function DefinitionWordDetails({ meanings }: PropsTypes) {
  if (meanings) console.log(meanings)
  return (
    <div>
      {meanings.map((meaning, index) => {
        return (
          <section key={index}>
            <div className={classes['meaning__wrapper']}>
              <p className={classes['meaning__part-of-speech']}>
                {meaning.partOfSpeech}
              </p>
            </div>
            <div className={classes['meaning__wrapper']}>
              <p className={classes['meaning__title']}>Definitions</p>
              <div className={classes['meaning__content']}>
                <ul>
                  {meaning.definitions.map((definition, index) => (
                    <li key={index}>{definition.definition}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={classes['meaning__wrapper']}>
              <p className={classes['meaning__title']}>Synonyms</p>
              <div className={classes['meaning__content']}>
                {meaning.synonyms.length === 0 ? (
                  <p
                    className={classes['meaning__nosynonyms']}
                  >{`[ no synonyms ]`}</p>
                ) : (
                  <p
                    className={classes['meaning__synonyms']}
                  >{`[ ${meaning.synonyms.map(
                    (synonym) => ` ${synonym}`,
                  )} ]`}</p>
                )}
              </div>
            </div>
            <div className={classes['meaning__wrapper']}>
              <p className={classes['meaning__title']}>Antonyms</p>
              <div className={classes['meaning__content']}>
                {meaning.antonyms.length === 0 ? (
                  <p
                    className={classes['meaning__nosynonyms']}
                  >{`[ no antonyms ]`}</p>
                ) : (
                  <p
                    className={classes['meaning__synonyms']}
                  >{`[ ${meaning.antonyms.map(
                    (antonym) => ` ${antonym}`,
                  )} ]`}</p>
                )}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
