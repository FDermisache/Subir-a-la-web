import React from "react";
import { useParams } from "react-router-dom";
import contactos from './WspDataWorkspace';

const ContactDetail = () => {
    const { contact_id } = useParams();
    const contacto = contactos.find((c) => c.id === parseInt(contact_id));

    if (!contacto) {
        return <div>Contacto no encontrado.</div>;
    }

    return (
        <div>
            {contacto.messages.map((message) => (
                <div key={message.id} className="ContenedorMessage">
                    <p>{message.emisor}: {message.texto}</p>
                    <span>Hora: {message.hora}</span>
                </div>
                
            ))}
        </div>
    );
};

export default ContactDetail;
