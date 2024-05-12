export type StravaDetailedActivity = {
    id: number,
    external_id: string,
    upload_id: number,
    athlete: object,
    name: string,
    distance: number,
    moving_time: number,
    elapsed_time: number,
    total_elevation_gain: number,
    elev_high: number,
    elev_low: number,
    type: string,
    sport_type: string,
    workout_type: number,
    start_date: string,
    start_date_local: string,
    timezone: string,
    utc_offset: number,
    location_city: null,
    location_state: null,
    location_country: null,
    achievement_count: number,
    kudos_count: number,
    comment_count: number,
    athlete_count: number,
    photo_count: number,
    total_photo_count: number,
    map: object,
    trainer: boolean,
    commute: boolean,
    manual: boolean,
    private: boolean,
    flagged: boolean,
    upload_id_str: string,
    average_speed: number,
    max_speed: number,
    has_kudoed: boolean,
    hide_from_home: boolean,
    gear_id: string,
    kilojoules: number,
    average_watts: number,
    device_watts: boolean,
    max_watts: number,
    weighted_average_watts: number,
    description: string,
    photos: object,
    gear: Gear,
    calories: number,
    segment_efforts: Array<object>,
    device_name: string,
    embed_token: string,
    splits_metric: Array<Splits>,
    splits_standard: Array<Splits>,
    laps: Array<object>,
    best_efforts: Array<object>
};

type BestEfforts = {

}

type Splits = {
    distance: number,
    elapsed_time: number,
    elevation_difference: number,
    moving_time: number,
    split: number,
    average_speed: number,
    average_grade_adjusted_speed: number,
    average_heartrate: number,
    pace_zone: number
}

type Gear = {
    id: string,
    primary: boolean,
    name: string,
    nickname: string | null,
    resource_state: number,
    retired: boolean,
    distance: number,
    converted_distance: number
}