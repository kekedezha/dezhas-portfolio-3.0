import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Image from 'next/image'


type PropType = {
  slides: any[]
  options?: EmblaOptionsType,
  strava: boolean
}

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h12",
  timeZone: "UTC",
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, strava } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 })
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  const getPace = (distanceMeters: number, timeSeconds: number): string => {
    if (distanceMeters <= 0 || timeSeconds <= 0) {
      return "N/A";
    }

    const miles = distanceMeters / 1609.344;
    const paceSecondsPerMile = timeSeconds / miles;

    const minutes = Math.floor(paceSecondsPerMile / 60);
    const seconds = Math.round(paceSecondsPerMile % 60);

    // Handle edge case where seconds round up to 60
    const formattedSeconds = seconds === 60 ? "00" : seconds.toString().padStart(2, "0");
    const formattedMinutes = seconds === 60 ? minutes + 1 : minutes;

    return `${formattedMinutes}:${formattedSeconds} /mi`;
  }

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    setIsPlaying(autoplay.isPlaying())
    emblaApi
      .on('autoplay:play', () => setIsPlaying(true))
      .on('autoplay:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoplay.isPlaying()))
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number text-center flex flex-col justify-center">
                {strava ? (
                  <div className="embla__slide__number text-center flex flex-col justify-center">
                    <p className="text-base text-zinc-400 w-full tracking-tighter underline">
                      {slide.name}
                    </p>
                    {slide.sport_type === "Run" ?
                      <p className="mt-2 text-base text-zinc-400 w-full tracking-tighter">
                        Distance: {(slide.distance * 0.000621371).toFixed(2)} miles
                      </p>
                      :
                      <></>
                    }
                    {slide.elapsed_time > 3600 ?
                      <p className="mt-2 text-base text-zinc-400 w-full tracking-tighter">
                        Time: {Math.floor((slide.moving_time / 60) / 60)} hours {Math.floor((slide.moving_time / 60)) % 60} mins
                      </p>
                      :
                      <p className="mt-2 text-base text-zinc-400 w-full tracking-tighter">
                        Time: {Math.floor((slide.moving_time / 60)) % 60} mins {Math.floor(slide.moving_time) % 60} seconds
                      </p>
                    }
                    {slide.sport_type === "Run" ?
                      <p className="mt-2 text-base text-zinc-400 w-full tracking-tighter">
                        Pace: {getPace(slide.distance, slide.moving_time)}
                      </p>
                      :
                      <></>
                    }
                    <p className="mt-2 text-base text-zinc-400 w-full tracking-tighter">
                      Activity: {slide.sport_type}
                    </p>
                    <p className="mt-2 text-base text-zinc-400 w-full tracking-tighter">
                      Date: {new Date(slide.start_date_local).toLocaleString('en-US', dateOptions)}
                    </p>
                  </div>
                )
                  :
                  (
                    <div className="embla__slide__number text-center flex flex-col justify-center">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width="250"
                        height="50"
                        className="rounded-lg object-cover sm:object-center"
                      />
                      <p className="mt-2 text-base text-zinc-400 w-full tracking-tighter" >{slide.title}</p>
                      <p className="text-sm text-zinc-400 w-full tracking-tighter" >{slide.purpose}</p>
                    </div>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  )
}

export default EmblaCarousel