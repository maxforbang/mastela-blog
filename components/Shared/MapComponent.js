import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import {Skeleton} from "@mui/material";
import {useState} from "react";

export const MapComponent = (props) => { // https://github.com/trulymittal/google-maps-directions-tutorial

	const center = { lat: 48.8584, lng: 2.2945 }
	const [map, setMap] = useState(null)

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: "AIzaSyBkUUllAq0QVQC-7qGWob_FBcAFeb6lkwQ",
		libraries: ['places'],
	})

	if (!isLoaded) {
		return <Skeleton />
	}

	return (
		<GoogleMap
			center={center}
			zoom={15}
			mapContainerStyle={{ width: '100%', height: '95%' }}
			options={{
				zoomControl: false,
				streetViewControl: false,
				mapTypeControl: false,
				fullscreenControl: false,
			}}
			onLoad={map => setMap(map)}
		>
			<Marker position={center} />
		</GoogleMap>
	)
}