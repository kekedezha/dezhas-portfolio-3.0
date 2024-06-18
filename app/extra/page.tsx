"use client"

import React from "react";
import { useEffect, useState } from "react";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import EmblaCarousel from "../components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';
import { SHOES } from './shoes';
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const strava_activities_endpoint = "https://www.strava.com/api/v3/athlete/activities?per_page=10"
const strava_single_activity_endpoint = "https://www.strava.com/api/v3/activities/"
const strava_refresh_endpoint = "https://www.strava.com/api/v3/oauth/token?"
const strava_athlete_stats_endpoint = "https://www.strava.com/api/v3/athletes/"
const STRAVA_REFRESH_TOKEN = process.env.NEXT_PUBLIC_STRAVA_REFRESH_TOKEN;
const STRAVA_CLIENT_ID = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.NEXT_PUBLIC_STRAVA_CLIENT_SECRET;
const MY_ATHLETE_ID = 69048099;
const OPTIONS: EmblaOptionsType = { loop: true }

export default function ExtrasPage() {
    const [stravaAccessToken, setStravaAccessToken] = useState<string>("55abd378ded6af1d8f706f94cd1bbc36a248692a");
    const [tokenExpiresAt, setTokenExpiresAt] = useState<number>(1715719407);
    const [currentTime, setCurrentTime] = useState<number>(1715203560)
    const [ultraFiddy, setUltraFiddy] = useState<any>({});
    const [fiddyHours, setFiddyHours] = useState<number>(0);
    const [fiddyMins, setFiddyMins] = useState<number>(0);
    const [sixtyHours, setSixtyHours] = useState<number>(0);
    const [sixtyMins, setSixtyMins] = useState<number>(0);
    const [ultraSixtyK, setUltraSixtyK] = useState<any>({});
    const [myStravaProfile, setMyStravaProfile] = useState<any>({});
    const [timeoutDelay, setTimeoutDelay] = useState<number>(1500);

    const [lastTenActivities, setLastTenActivities] = useState<Array<object>>([]);

    setInterval(() => {
        const now: number = Date.now();
        setCurrentTime(now);
    }, 1000);

    
    setTimeout(() => {
        if (currentTime > tokenExpiresAt){
            refreshToken();
        }
    }, timeoutDelay);
    
    const refreshToken = async() => {
        const refreshURL: string = strava_refresh_endpoint + "client_id=" + STRAVA_CLIENT_ID + "&client_secret=" + STRAVA_CLIENT_SECRET + 
            "&grant_type=refresh_token&refresh_token=" + STRAVA_REFRESH_TOKEN;

        try 
        {
            const refreshTokenResponse = await fetch(refreshURL, {
                method: 'POST'
            })

            if(refreshTokenResponse.ok) {
                const jsonRefreshToken = await refreshTokenResponse.json();
                setStravaAccessToken(jsonRefreshToken.access_token);
                setTokenExpiresAt(jsonRefreshToken.expires_at);
            }
        } catch(error) {
            throw new Error("Oh no something went wrong" + error);
        }
        setTimeoutDelay(30000)
    }

    useEffect(() => {

        const getUltraActivities = async () => {
            const fiddy: number = 11336245915;
            const sixtyK: number = 9681825811;
    
            const fiddyURL: string = strava_single_activity_endpoint + fiddy;
            const sixtyKURL: string = strava_single_activity_endpoint + sixtyK;
    
            try 
            {
                const responseFiddy = await fetch(fiddyURL, {
                    headers: {
                        Authorization: `Bearer ${stravaAccessToken}`
                    }
                });
                const responseSixty = await fetch(sixtyKURL, {
                    headers: {
                        Authorization: `Bearer ${stravaAccessToken}`
                    }
                });
    
                if(responseFiddy.ok) {
                    const jsonResponseFiddy = await responseFiddy.json();
                    setUltraFiddy(jsonResponseFiddy);
                    setFiddyMins(Math.floor(jsonResponseFiddy.elapsed_time/60)%60);
                    setFiddyHours(Math.floor((jsonResponseFiddy.elapsed_time/60)/60));

                }
    
                if(responseSixty.ok) {
                    const jsonResponseSixty = await responseSixty.json();
                    setUltraSixtyK(jsonResponseSixty);
                    setSixtyMins(Math.floor(jsonResponseSixty.elapsed_time/60)%60);
                    setSixtyHours(Math.floor((jsonResponseSixty.elapsed_time/60)/60));
                }
            } catch(error) {
                console.log("Oops there was an error \n" + error);
            }
        };

        const getRecentActivities = async() => {
            try 
            {
                const recentActivitiesResponse = await fetch(strava_activities_endpoint, {
                    headers: {
                        Authorization: `Bearer ${stravaAccessToken}`
                    }
                });

                if(recentActivitiesResponse.ok) {
                    const jsonResponse = await recentActivitiesResponse.json();
                    setLastTenActivities(jsonResponse);
                }
            } catch(error) {
                console.log("Oops there was an error \n" + error);
            }
        };

        const getProfile = async() => {
            const athleteURL = strava_athlete_stats_endpoint + MY_ATHLETE_ID + "/stats";

            try 
            {
                const athleteResponse = await fetch(athleteURL, {
                    headers: {
                        Authorization: `Bearer ${stravaAccessToken}`
                    }
                });

                if(athleteResponse.ok) {
                    const jsonAthleteResponse = await athleteResponse.json();
                    setMyStravaProfile(jsonAthleteResponse.ytd_run_totals);
                }
            } catch(error) {
                console.log("Oops there was an error \n" + error);
            }

        };

        getUltraActivities();
        getRecentActivities();
        getProfile();

    }, [stravaAccessToken])

    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="mt-auto w-full">
                    <h2 className="w-full text-3xl text-center font-bold tracking-tight text-zinc-400">
                       ...a little extra info about me :)
                    </h2>
                </div>
                <div className="max-w-2xl mt-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Strava
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Some of my Strava stats:
                    </p>
                    <p className="mt-2 text-xs text-zinc-400">
                        Info and stats pulled from Strava&#39;s V3 API 
                    </p>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <Card>    
                        <h3 className="text-center my-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                            Stats - 2024
                        </h3>

                        <Image 
                            src="/strava_profile.jpeg"
                            alt= "Strava Profile Pic"
                            width="150"
                            height="150"
                            className="mx-auto rounded-full"
                        />

                        <p className="text-center mt-2 duration-150 text-zinc-400 group-hover:text-zinc-300 underline md:no-underline">
                            Athlete: Christian Dezha
                        </p>

                        <div className="flex flex-col md:flex-row justify-center text-center md:gap-80">
                            <p className="md:mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                Runs: {myStravaProfile.count ? 
                                    myStravaProfile.count
                                :
                                    <Box sx={{display: 'flex'}}>
                                        <CircularProgress />
                                    </Box>
                                    // <Spinner label="Loading..." labelColor="primary" size="sm" className="ml-2"/>
                                }
                            </p>
                            <p className="md:mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                Time: {myStravaProfile.elapsed_time ?
                                    `${Math.floor((myStravaProfile.elapsed_time/60)/60)} hours ${Math.floor((myStravaProfile.elapsed_time/60))%60} mins`
                                :
                                    <Box sx={{display: 'flex'}}>
                                        <CircularProgress />
                                    </Box>
                                    // <Spinner label="Loading..." labelColor="primary" size="sm" className="ml-2"/>
                                }
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center text-center md:gap-60">
                            <p className="pl-3 mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                Distance: {myStravaProfile.distance ?
                                    `${(myStravaProfile.distance * 0.000621371).toFixed(2)} miles`
                                :
                                    <Box sx={{display: 'flex'}}>
                                        <CircularProgress />
                                    </Box>
                                    // <Spinner label="Loading..." labelColor="primary" size="sm" className="ml-2"/>
                                }
                            </p>
                            <p className="pl-3 my-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                Elevation Gain: {myStravaProfile.elevation_gain ?
                                    `${Math.round(myStravaProfile.elevation_gain * 3.28084)} ft`
                                :
                                    <Box sx={{display: 'flex'}}>
                                        <CircularProgress />
                                    </Box>
                                    // <Spinner label="Loading..." labelColor="primary" size="sm" className="ml-2"/>
                                }
                            </p>
                        </div>
                    </Card>
                </div>
                <div className="mx-auto w-1/2 h-px bg-zinc-800" />
                <p className="text-zinc-400 text-center">
                    Ultra Runs
                </p>
                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    <Card>
                        {ultraFiddy.name ? (
                            <>
                                <h2 className=" text-center mt-4 px-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                    {ultraFiddy.name}
                                </h2>
                                <p className="text-center mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Distance: {(ultraFiddy.distance * 0.000621371).toFixed(2)} miles
                                </p>
                                <p className="text-center mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Elevation Gain: {Math.round(ultraFiddy.total_elevation_gain * 3.28084)} ft
                                </p>
                                <p className="text-center my-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Time: {fiddyHours} hrs {fiddyMins} mins
                                </p>
                            </>
                        )
                        :
                            <Box sx={{ display: 'flex', my: '5rem', width: 1, mx: 'auto', justifyContent: 'center' }}>
                                <CircularProgress />
                            </Box>
                            // <Spinner label="Loading..." size="lg" labelColor="primary" className="my-5 w-full mx-auto"/>
                        }
                        
                    </Card>
                    <Card>
                        {ultraSixtyK.name ? (
                            <>
                                <h2 className="text-center mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                    {ultraSixtyK.name}
                                </h2>

                                <p className="text-center mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Distance: {(ultraSixtyK.distance * 0.000621371).toFixed(2)} miles
                                </p>
                                <p className="text-center mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Elevation Gain: {Math.round(ultraSixtyK.total_elevation_gain * 3.28084)} ft
                                </p>
                                <p className="text-center my-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Time: {sixtyHours} hrs {sixtyMins} mins
                                </p>
                            </>
                        )
                        :
                            <Box sx={{ display: 'flex', my: '5rem', width: 1, mx: 'auto', justifyContent: 'center' }}>
                                <CircularProgress />
                            </Box>
                            // <Spinner label="Loading..." labelColor="primary" size="lg" className="my-5 w-full mx-auto"/>
                        }
                        
                    </Card>
                </div>
                <div className="mx-auto w-1/2 h-px bg-zinc-800" />
                <p className="text-zinc-400 text-center">
                    10 Most Recent Activities
                </p>
                {lastTenActivities.length == 10 ? 
                    <EmblaCarousel slides={lastTenActivities} options={OPTIONS} strava={true} />
                :
                <Box sx={{ display: 'flex', width: 1, mx: 'auto', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
                    // <Spinner label="Loading..." labelColor="primary" size="lg" className="w-full mx-auto"/>
                }
                <div className="w-full h-px bg-zinc-800" />
            </div>
            <div className="px-6 pt-20 mx-auto space-y-2 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mt-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Shoes
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        My current shoe rotation:
                    </p>
                </div>

                <EmblaCarousel slides={SHOES} options={OPTIONS} strava={false} /> 
            </div>
        </div>
      );
}