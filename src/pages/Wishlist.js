import { Timer } from "@mui/icons-material";
import React from "react";
import Header from "../components/Header";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Wishlistsidetab from "../components/Wishlistsidetab";
import Footer from "../components/Footer";
import Mobilefooter from "../components/Mobilefooter";
import Mobilefooter1 from "../components/Mobilefooter1";


const Wishlist = () => {
    return (
        <div>
            <Timer />
            <Header />
            <Header1 />
            <Header2 />
            <Wishlistsidetab />
            <Footer />
            <Mobilefooter />
            <Mobilefooter1 />
        </div>
    )
}

export default Wishlist;