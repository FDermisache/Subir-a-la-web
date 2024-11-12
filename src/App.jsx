import React from 'react'
import './global.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import WorkspaceScreen from './Screens/WorkspaceScreen'
import EstadosScreen from './Screens/EstadosScreen'
import Whatsapp from './Screens/Whatsapp'
import FormulariosScreen from './Screens/FormulariosScreen'
import WspWorkspaces from './Workspace Contactos/WspWorkspaces'
import contactos from './Workspace Contactos/WspDataWorkspace'
import ContactDetail from './Workspace Contactos/ContacDatail'
import ContactsScreen from './Workspace Contactos/ContactosScreen'


/* 
Lista de rutas de mi aplicacion
<Routes>
</Routes>

Ruta de mi aplicacion
<Route/>
*/
function App() {
	
	return (
		<div>
			<Routes>
				<Route path='/' element={<HomeScreen/>}/>
				<Route path='/home' element={<HomeScreen/>}/>
				<Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
				<Route path='/prueba' element={<h1>Hola soy la prueba</h1>}/>
				<Route 
					path='/estados' 
					element={<EstadosScreen/>}
				/>
				<Route path='/whatsapp/:pepe' element={<Whatsapp/>}/>
				{/* <Route path='/ListaContactos/:WspWorkspaces_id' element={<WspWorkspaces />} /> */}
				
				<Route path='/formularios' element={<FormulariosScreen/>}/>

				<Route path='/contact/:contact_id' element={<WspWorkspaces />} />  {/* Esta ruta me lleva al id de cada mensaje */}
                <Route path="/contacts" element={<ContactsScreen />} /> {/* Esta ruta me muesta la lista de contactos */}
                {/* <Route path="/contactss/:contact_id" element={<ContactDetail />} /> */}
			</Routes>
		</div>
	)
}

export default App

/* 
-PARAMETRO DE BUSQUEDA:
'/workspace/:workspace_id' , esto sirve para buscar algo segun su ID, si tenemos algun 'producto' con el ID 1, podemos buscarlo con /workspace/1
- 	los dos puntos, indica que ese valor de la ruta es un parametro de busqueda. 
*/