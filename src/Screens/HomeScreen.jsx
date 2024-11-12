import React from "react";
import { WorkspaceList } from "../Components";
import { Link } from "react-router-dom";
import WspWorkspaces from "../Workspace Contactos/WspWorkspaces";
import contactos from "../Workspace Contactos/WspDataWorkspace";


const HomeScreen = () => {
    const workspaces = [
		{
			img: '',
			title: 'UTN PWA TN',
			miembros: [],
			id: 1
		},
		{
			img: '',
			title: 'UTN PWA TM',
			miembros: [],
			id: 2
		},
		{
			img: '',
			title: 'UTN Fiesta',
			miembros: [],
			id: 3
		}
	]
    return (
        <div>
			{/* Hace lo mismo que el <a></a> */}
			<Link to={'/whatsapp/1'}>Ir a WhatsApp</Link>
			<br />
			<Link to={'/estados'}>Ir a estados</Link>
            <WorkspaceList workspaces={workspaces}/>
			<Link to={'/formularios'}>Ir a formularios</Link>
			<br />
			
			<br />
			<Link to="/contacts">Contactos</Link> {/*  Generamos el link que contiene la lista de contactos */}
			<div>
        </div>
    
        </div>
    )
}


export default  HomeScreen