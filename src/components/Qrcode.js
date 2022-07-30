import React from "react";
import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react"
import "./qrcode.css";


const Qrcode = () => {
    const [url, setUrl] = useState("")
    const [name, setName] = useState("")
    const qrRef = useRef()

    const downloadQRCode = (e) => {
        e.preventDefault();
        let canvas = qrRef.current.querySelector("canvas");
        let image = canvas.toDataURL("image/png");
        let anchor = document.createElement("a");
        anchor.href = image;
        anchor.download = `${name}.png`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        setUrl("");
    }

    const qrCodeEncoder = (e) => {
        setUrl(e.target.value)

    }

    const setNameEncoder = (e) => {
        setName(e.target.value)
    }


    const qrcode = (
        <QRCodeCanvas
            id="qrCode"
            value={url}
            size={300}
            bgColor={"#fff"}
            level={"H"}
        />
    )

    return (
        <div>
            <div className="qrcode_container">
                <div className="qr_code_img">
                    <div ref={qrRef}>{qrcode}</div>

                </div>
                <div className="qr_code_input_group">
                    <form className="qr_code_input_group" onSubmit={downloadQRCode}>
                        <div className="qr_code_input_group_container">
                            <div><label className="qr_code_label">Enter Name</label></div>
                            <div><input className="qr_code_label_input" type="text" value={name} onChange={setNameEncoder} placeholder="Please enter your Name " /></div>
                            <div><label className="qr_code_label">Enter URL</label></div>
                            <div><input className="qr_code_label_input" type="text" value={url} onChange={qrCodeEncoder} placeholder="Please enter your URL " /></div>
                            <div><button type="submit" className="qr_code_label_button" disabled={!url} >Download QR Code</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Qrcode;