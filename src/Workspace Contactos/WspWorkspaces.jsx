import React from 'react'
import { useParams } from 'react-router-dom'
import contactos from './WspDataWorkspace'
import './MensajePers.css'



const WspWorkspaces = () => {
    
    const { contact_id } = useParams(); 
    const contacto = contactos.find((c) => c.id === Number(contact_id));

    if (!contacto) {
        return <div>Contacto no encontrado.</div>;
    }

    return (
        <div>
            <span>{contacto.nombre}</span>
            <MensajesLista messages={contacto.messages} />
        </div>
    );
};

 const MensajesLista = ({messages}) =>{
    return(
        
        messages.map(messages =>{
            return <Mensaje_wsp key={messages.id} autor={messages.emisor} texto={messages.texto} id={messages.id} hora={messages.hora}/>
            
        })
    )
}

const Mensaje_wsp = ({autor, texto, id, hora}) =>{
    return(
        <div>
            <span>{autor}</span>
            <span>{texto}</span>
            <span>{hora}</span>
        </div>
    )
}


console.log(contactos)



export default WspWorkspaces