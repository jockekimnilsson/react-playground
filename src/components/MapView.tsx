import { useEffect, useRef } from 'react'
import { initMap } from '../utils/initMap';

export const MapView = () => {

    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef.current) {
            initMap(
                mapRef.current,
                [11.974560, 57.708870]
            )
        }
    }, []);

    return (
        <div 
            ref={mapRef}
            className="map"
            />
    )
}