import { Map } from 'mapbox-gl'

export const initMap = (container: HTMLDivElement, coords: [number,number]) => {
    return new Map({
        container,
        style: 'mapbox://styles/mapbox/dark-v10',
        pitchWithRotate: false,
        center: coords,
        zoom : 15,
        accessToken: 'pk.eyJ1Ijoiam9ja2VraW1uaWxzc29uIiwiYSI6ImNtNzh4cnVzeDAxN2gyd3NobjRsc2ZrMzgifQ.q5yggQA8gs91ihaXy54bUw',
        doubleClickZoom: false
    });
}