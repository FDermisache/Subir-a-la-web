import React from "react";
import { Link } from "react-router-dom";
import contactos from "./WspDataWorkspace";
import './Contactos.css'

const ContactsScreen = () => { /*  Hace un mapeo de cada contacto accediendo por contando.id y genera un span con el nombre de cada contacto */
    return (
        <div className="ContendorPrincipalContactos">
            <div className="ContenedorHeader">
            <h3>Chats</h3><span><i className="bi bi-plus-square"></i><i className="bi bi-three-dots-vertical"></i></span>
            </div>
            <div className="ContenedorBuscar">
                <span><i className="bi bi-search"></i></span>
            <label htmlFor="buscar"></label>
            <input type='text' id='buscar' name='buscar' placeholder='Buscar' />
            </div>
            <div className="ContenedorFiltros">
                <span className="filtros">Todos</span>
                <span className="filtros">No leidos</span>
                <span className="filtros">Favoritos</span>
                <span className="filtros">Grupos</span>
            </div>
            <div className="ContenedorArchivados">
                <span><i className="bi bi-box-arrow-in-down"></i></span>
                <span className="Archivados">Archivados</span>
            </div>
            <div className="PantallaWsp">
                <div className="ImagenWsp">
                <img src="https://static.whatsapp.net/rsrc.php/v3/y6/r/wa669aeJeom.png" alt="imagen wsp" />
                </div>
                <div className="TituloWsp">
                <h1>Descarga WhatsApp para Windows</h1>
                </div>
                <div className="DescripcionWsp">
                <span className="Descargar">Descarga la aplicacion para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia mas rapida.</span>
                </div>
                <div className="BotonWsp">
                <button className="BotonDescargar">Descargar de Microsoft Store</button>
                </div>
                <div className="SeguridadWsp">
                <span className="Seguridad"><i class="bi bi-lock"></i>Tus mensajes personales estan cifrados de extremo a extremo.</span>
                </div>
            </div>
            {contactos.map((contacto) => (
                <Link key={contacto.id} to={`/contact/${contacto.id}`}>
                    <div className="ContenedorContacto">
                        <div className="linea"></div>
                        <span>{contacto.imagen}</span>
                        <span>{contacto.nombre}</span>
                        <span className="horaContacto">{contacto.hora}</span>
                        <span className="MensajePersonal"><i class="bi bi-check-all"></i>{contacto.msm}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ContactsScreen;