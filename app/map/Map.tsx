"use client";

import { MapContainer, Marker, TileLayer, Popup, Tooltip } from "react-leaflet"
import { CRS } from "leaflet";
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function Map(props: any) {
    const { position, zoom } = props;

    //const HeatmapLayer = useMemo(() => dynamic(
    //    HeatmapLayerFactory<[number, number, number]>(),
    //    {
    //        loading: () => <p>A map is loading</p>,
    //        ssr: false
    //    }
    //), [])

    return <MapContainer className="h-screen" center={position} zoom={zoom} scrollWheelZoom={true} crs={CRS.EPSG3857} zoom={8}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>
}
