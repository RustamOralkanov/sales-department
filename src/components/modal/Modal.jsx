/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Modal } from "antd";

import "./Modal.scss";

const SdModal = ({ isModalOpen, handleCancel }) => {
    return (
        <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            centered={true}
            footer={null}
            destroyOnClose={true}
            className="sd-modal"
        >
            <iframe
                src="https://www.youtube.com/embed/_EjCRFolyok?si=07aHrrZalubPzu_0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </Modal>
    );
};

export default SdModal;
