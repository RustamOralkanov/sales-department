import React, { useState } from "react";
import SdModal from "../modal/Modal";
import Banner from "../../assets/images/sd-banner.png";
import Play from "../icons/play/Play";

import "./Banners.scss";

const Banners = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-wrapper">
                    <h1 className="banner-title">Отдел продаж</h1>
                    <h2 className="banner-address">ул. Жандосова 94А </h2>
                </div>
                <div className="banner-img">
                    <img src={Banner} alt="image" />
                </div>
                <div className="banner-play" onClick={showModal}>
                    Смотреть видео
                    <Play />
                </div>
                <SdModal
                    isModalOpen={isModalOpen}
                    handleCancel={handleCancel}
                />
            </div>
        </section>
    );
};

export default Banners;
