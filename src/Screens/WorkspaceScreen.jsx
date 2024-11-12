import React from "react"
import { useParams } from "react-router-dom"
import workspaces from "../data/workspaceData"

const WorkspaceScreen = () => {
    /* const params = useParams()  */
    /* Desestructuramos */
    const {workspace_id}= useParams()
    /* const workspace_id = params.workspace_id */ //les devolvera un objeto con los parametros de busqueda de esa url {workspace_id: "1"}

    /* Como buscar el workspace por id */
    const workspaceFound = workspaces.find(
        (workspace) =>{
        return workspace.id == workspace_id
    }
    )
    return (
        <div>
            <h1>{workspaceFound.title}</h1>
              <MessageList message={workspaceFound.messages}/>   {/* lo que hacemos aca es lo siguiente: 1.Encontramose el workspace mediande el find (que viene del arhivo js), 2.Llamamos a los mensajes mediante el . , 3.Se lo pasamos a la lista(MessageList), esta recibe los mensajes, hace el mapeo de los mensajes, por cada mensaje genera un mensaje, le va pasando cada item(key,texto.etc), el Message recibe las props({texto,autor,id,hora}) y renderiza cada uno de los mensajes */}
        </div>
    )
}

const MessageList = ({message}) => {
    return(
        message.map(message =>{
            return<Message key={message.id} texto={message.mensaje} autor={message.autor} id={message.id} hora={message.hora} />
        })
    )
}

const Message = ({texto,autor,id,hora}) =>{
    return(
        <div>
            <span>{autor}</span>
            <p>{texto}</p>
            <span>{hora}</span>
        </div>
    )
}


const DummyComponent = () => {
    const params = useParams()
    console.log({params})
    return (
        <div>Hola</div>
    )
}
export default WorkspaceScreen