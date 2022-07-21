import React, { useState } from 'react'
import { MapContainer, Marker, TileLayer, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import coordinateDTO from './coordinates.model';

let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = defaultIcon;

interface MapProps {
    height?: string;
    coordinates: coordinateDTO[];
    handleMapClick(coordinates: coordinateDTO): void;
}

function MapClick(props: mapClickProps){
    useMapEvent('click', eventArgs => {
        props.setCoordinates({lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng})
    })
    return null;
}

interface mapClickProps{
    setCoordinates(coordinates: coordinateDTO): void;
}



const Map: React.FC<MapProps> = (props) => {
    const [coordinates, setCoordinates] = useState<coordinateDTO[]>(props.coordinates);
    return (
        <MapContainer
            center={[35.732707227404376, -81.33948738196987]} zoom={14}
            style={{ height: props.height }}
        >
            <TileLayer attribution="React Movies"
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <MapClick setCoordinates={coordinates =>{
                setCoordinates([coordinates]);
                props.handleMapClick(coordinates);
            }} />
            {coordinates.map((coordinate, index) => <Marker key={index} position={[coordinate.lat, coordinate.lng]} />)} 
        </MapContainer>
    )
}

Map.defaultProps = {
    height: '500px'
}

export default Map