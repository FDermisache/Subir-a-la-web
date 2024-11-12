import React, { useState } from 'react'
import './whatstapp.css'
import FormWsp from './FormWsp';
import WspWorkspaces from '../Workspace Contactos/WspWorkspaces';
import ContactsScreen from '../Workspace Contactos/ContactosScreen';

const Whatsapp = () => {
    const mensajes = [
        {
            emisor: 'YO',
            hora: '23:10',
            id: 1,
            texto: 'Hola que tal?',
            status: <i className="bi bi-check-all"></i>
        },
        {
            emisor: 'USUARIO',
            hora: '23:11',
            id: 2,
            texto: 'Si, hoy aprendi estados',
            status: <i className="bi bi-check-all"></i>
        },
        {
            emisor: 'YO',
            hora: '23:12',
            id: 3,
            texto: 'Eso que significa 🤓?',
            status: <i className="no bi-check-all"></i>
        },
        {
            emisor: 'YO',
            hora: '23:13', 
            id: 4,
            texto: 'Estas ahi?',
            status: <i className="bi bi-check"></i>
        },
    ]
    const WSPJSX= mensajes.map((msj)=>{
        return(
            <div className="ContainerMessage" key={msj.id}>
            {msj.emisor === 'YO'
            ? (
            <div className="messageContainerYo">
            <div className="messageYo">
                <span className="emisorYo">{msj.emisor}</span>
                <span className="textoYo">{msj.texto}</span>
                <span className="horaYo">{msj.hora} {msj.status}</span>
                
            </div>
            </div>
        ) : (
            <div className="messageContainerUsuario">
                <div className="messageUsuario">
                <span className="emisor">{msj.emisor}</span>
                <span className="texto">{msj.texto}</span>
                <span className="hora">{msj.hora} {msj.status}</span>
                </div>
            </div>
            
        )}
        </div>
    );
});



return (
    <div className='Container-Principal'>
        {WSPJSX}
        <FormWsp />
        
        
    </div>
)
}
export default Whatsapp

