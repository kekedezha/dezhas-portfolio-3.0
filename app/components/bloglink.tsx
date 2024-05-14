import React, { useState, useEffect } from 'react';
import ArrowIcon from './arrowicon'


// Define props for BlogLink
interface BlogLinkProps {
    slug: string,
    name: string,
    timer: boolean
}

// Define BlogLink with explicit prop types
export const BlogLink: React.FC<BlogLinkProps> = ({ slug, name, timer }) => {

  //Define state variable that will contain countdown timer
  const [countdown, setCountdown] = useState<string | null>(null);
  const RACE_DAY: string = "5-4-2024";
  const RACE_DAY_DATE: Date = new Date(RACE_DAY);
  const _sec:number = 1000;
  const _mins:number = _sec * 60;
  const _hour:number = _mins * 60;
  const _day:number = _hour * 24;

  //setInterval function for the countdown timer 
  setInterval(() => {
    const now: Date = new Date();
    const difference: number = (RACE_DAY_DATE.getTime() - now.getTime());
    let days:number = Math.floor(difference / _day);
    let hours:number = Math.ceil((difference % _day) / _hour);
    let minutes:number = Math.floor((difference % _hour) / _mins)
    let seconds:number = Math.floor((difference % _mins) / _sec);

    setCountdown(days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + "seconds!");
}, 1000);

    return (
      <div className="group">
        <a
          href={slug}
          target='_blank'
          className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
        >
          <div className="flex flex-col">
            <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100 px-10 text-left">
              {name}
            </p>
            {timer == true ? 
            <p className='text-lg font-medium text-neutral-900 dark:text-neutral-100 px-10 text-left'>
              Countdown until my next Ultra Marathon (50M) at Grayson Highlands State Park: <br/>
              {countdown?.includes('-') ? 
                <span className='text-green-700'>Completed May 4th, 2024! 50 Miles and 9500 ft of climbing in 13hrs 29mins 🎉</span>
                :
                <span className='text-red-700'>{countdown}</span>
              }
            </p>
            :
            <></>}
          </div>
          <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
            <ArrowIcon />
          </div>
        </a>
      </div>
    );
  }