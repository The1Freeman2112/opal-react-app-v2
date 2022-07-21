import { useFormikContext } from 'formik';
import React from 'react'
import coordinateDTO from '../utils/coordinates.model';
import Map from '../utils/Map';

interface MapFieldProps {
    coordinates: coordinateDTO[];
    latField: string;
    lngField: string;
}

const MapField: React.FC<MapFieldProps> = (props) => {

    const { values } = useFormikContext<any>();

    function handleMapClick(coordinates: coordinateDTO) {
        values[props.latField] = coordinates.lat;
        values[props.lngField] = coordinates.lng;
    }

    return (
        <Map
            coordinates={props.coordinates}
            handleMapClick={handleMapClick}
        />
    )
}

MapField.defaultProps = {
    coordinates: []
}

export default MapField