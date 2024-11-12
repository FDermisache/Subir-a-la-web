import React from 'react'
import './WorkspaceItem.css'
import { Link } from 'react-router-dom'

const WorkspaceItem = ({img, title, miembros, id}) => {

    return (
        <div className="workspace-item">
            <img src={img}/>
            <h2>{title}</h2>
            <span>Hay {miembros.length} miembros</span>
            <Link to={'/workspace/' + id}>Ir al espacio de trabajo</Link> {/* Agregando el + id , vamos a ir al id que le hayamos pasado desde App :worskapace */}
            
        </div>
    )
}
/* SPA single page application: Significa que se hace todo dentro del index */
export default WorkspaceItem
