'use client'

import React, { useState } from 'react'
//import QRCode from 'qrcode.react'
import QRCode from 'react-qr-code'

function qrcodeTeste() {
    const [numero, mensagem] = useState('5561991160014', 'Olá, gostaria de saber mais')
    const teste = 'www.google.com'
    //'5561991160014' 
    //mensagem = ;

    //const link = useState('')

    //const WhatsappURL = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    const WhatsappURL = 'https://g1.globo.com/';


    https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}

    return (

        <div>

        <QRCode value='WhatsappURL'>
           
        </QRCode>

        <a href='https://wa.me/5561991160014?text=Olá%2C%20gostaria%20de%20saber%20mais'> WhatsApp </a>
        </div>

      

    )

    //return (
    //    <div style={{ textAlign: 'center', padding: '20px' }}>
    //        <h1>Entre em contato pelo WhatsApp</h1>
    //        <QRCode value={link} size={256} />
    //        <p>Escaneie o QR Code para iniciar a conversa no WhatsApp</p>
    //    </div>
    //);

 
} export default qrcodeTeste;


