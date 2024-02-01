import classes from './LicenseWord.module.scss'

interface PropsTypes {
  license: {
    name: string
    url: string
  }
  sourceUrls: string[]
}

export default function LicenseWord({ license, sourceUrls }: PropsTypes) {
  return (
    <div>
      <p className={classes['title']}>License</p>
      <div className={classes['content']}>
        <p>
          <a href={license.url}>{license.name}</a>
        </p>
        {sourceUrls.map((source) => {
          return (
            <a href={source} target="_blank">
              {source}
            </a>
          )
        })}
      </div>
    </div>
  )
}
