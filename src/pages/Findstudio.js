import React from "react";
import Findbanner from "../components/Findbanner";
import Findcard from "../components/Findcard";
import Findbrands from "../components/Findbrands";
import Findbanner2 from "../components/Findbanner2";
import Findbanner3 from "../components/Findbanner3";
import Findfooter from "../components/Findfooter";
import Findslider from "../components/Findslider";
import Gmaps from "../components/Gmaps";
import Findlocation from "../components/Findlocation";
import Findlocationhor from "../components/Findlocationhor";
// import { useJsApiLoader } from '@react-google-maps/api';
// import { mapoptions } from "../components/Mapconfiguration";




const Findstudio = () => {
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: mapoptions.googleMapApiKey
    // })
    return (
        <div>
            <Findbanner />
            <Findlocation/>
            <Findlocationhor/>
            <Findcard />
            <Findbrands />
            <Findbanner2 />
            <Findslider />
            <Findbanner3 />
            <Findfooter />
            {/* <Gmaps isLoaded={isLoaded} /> */}
          




        </div>
    )
}

export default Findstudio;