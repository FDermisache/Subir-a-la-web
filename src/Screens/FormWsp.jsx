import React, { useState } from 'react'
import extratcFormData from '../helpers/extracFormData'
import './whatstapp.css'

const FormWsp = () => {
    const [mensajes, setMensajes] = useState([])
    const handleSubmitUncontrolledForm = (evento) => {
        evento.preventDefault()
        const messageJSX = evento.target
        const nuevoMensaje ={
            mensaje: messageJSX.text.value,
            hora: new Date().toLocaleTimeString()
        }
        /*  extratcFormData(messageJSX) */
        setMensajes([...mensajes, nuevoMensaje])
        messageJSX.reset()
    }
        return(
            <div className='FormWsp'>
            <form onSubmit={handleSubmitUncontrolledForm}>
            <span className='emoji'><i class="bi bi-emoji-smile"></i><i class="bi bi-link-45deg"></i></span>
            <label htmlFor="text"></label>
            <input type='text' id='text' name='text' placeholder='Ingrese un mensaje' />
            <button><i class="bi bi-play-fill"></i></button>
            <span><i class="bi bi-mic"></i></span>
            </form>
            <MessageList msm={mensajes} />
        </div>
        )
    
}


const MessageList = ({msm}) =>{
    return(
        <div>
            {msm.map(ms =>{
                return(
                    <NewMessage mensaje={ms.mensaje} hora={ms.hora}  />
                )
            })}
        </div>
    )
} 



const NewMessage = ({mensaje, hora}) => {
    return(
        <div className='ContenedorMessage'>
            <span className='formYo'>YO</span>
            <p className='formTextYo'>{mensaje}</p>
            <span className='formHoraYo'>{hora}</span>
        </div>
    )
}

export default FormWsp