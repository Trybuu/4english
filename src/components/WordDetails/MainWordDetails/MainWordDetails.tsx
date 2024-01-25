import { useEffect, useMemo } from 'react'
import playIcon from '../../../../public/icons/play-solid.svg'
import classes from './MainWordDetails.module.scss'

interface Phonetic {
  text: string
  audio: string
}

interface MainWordProps {
  word: string
  phonetics: Phonetic[]
}

export default function MainWordDetails({ word, phonetics }: MainWordProps) {
  const phoneticsAudioUrls: (HTMLAudioElement | undefined)[] = useMemo(() => {
    const urls: (HTMLAudioElement | undefined)[] = []

    if (phonetics && Array.isArray(phonetics) && phonetics.length > 0) {
      phonetics.forEach((phonetic) => {
        if (phonetic.audio === '') {
          urls.push(undefined)
        } else {
          const audioElement = new Audio(phonetic.audio)
          urls.push(audioElement)
        }
      })
    }

    return urls
  }, [phonetics])

  function renderAudioPlayButtons(
    arr: (HTMLAudioElement | undefined)[],
    index: number,
  ) {
    if (arr[index] === undefined) {
      return (
        <button className={classes['button-play']} disabled>
          <img
            className={classes['button-play__icon']}
            src={playIcon}
            alt="Play phonetic word disabled"
          />
        </button>
      )
    } else {
      return (
        <button
          className={classes['button-play']}
          id={`playButton-${index}`}
          onClick={() => playAudio(index)}
        >
          <img
            className={classes['button-play__icon']}
            src={playIcon}
            alt="Play phonetic word"
          />
        </button>
      )
    }
  }

  function playAudio(index: number) {
    const audioElement = phoneticsAudioUrls[index]
    if (audioElement) {
      audioElement.play()
    }
  }

  useEffect(() => {
    phoneticsAudioUrls.forEach((audioElement) => {
      if (audioElement) {
        audioElement.addEventListener('ended', () => {
          audioElement.currentTime = 0
        })
      }
    })

    return () => {
      phoneticsAudioUrls.forEach((audioElement) => {
        if (audioElement) {
          audioElement.pause()
          audioElement.currentTime = 0
        }
      })
    }
  }, [phoneticsAudioUrls])

  return (
    <section>
      <h1 className={classes['word']}>{word}</h1>
      {phonetics.map((phonetic, index) => (
        <div className={classes['phonetics']} key={index}>
          <p>{phonetic.text}</p>
          {renderAudioPlayButtons(phoneticsAudioUrls, index)}
        </div>
      ))}
    </section>
  )
}
