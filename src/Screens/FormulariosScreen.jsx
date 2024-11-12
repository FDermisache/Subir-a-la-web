import React, { useState } from 'react'
import extratcFormData from '../helpers/extracFormData'
const FormulariosScreen = () => {
    /* Creamos un estado de usuarios, empieza con un array vacio [] */
const [usuarios, setUsuarios] = useState([])



const handleSubmitUncontrolledForm = (evento) =>{/* Lo que empieza con Handle esta asociado a eventos */ /*  El (evento) es un obejeto con datos del evento en particular, nos da informacion sobre el evento, a que hora salio, de donde,etc. */
    evento.preventDefault() /* Evito que se comporte como deberia de comportarse por defecto */

   /*  evento.target */ /* El target de un elemento, es el elemento HTML que emitio dicho evento, En este caso es el form, ya que fue quien activo la funcion */
    const formJSX = evento.target
 /* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    const formData = new FormData(formJSX) /* Es como una funcion y con el new le estamos diciendo que nos cree un nuevo objeto, nos va a devolver un objeto con el cual vamos a poder manipular informacion de mi formulario */
    console.log(formData.get('nombre')) /*  Con el get puedo obtener el valor de un campo de mi formulario, el name del input debe coincidir con el parametro pasado en () */
    
    /* Obtener un objeto con los valores de nuestro formulario, obtenemos lo que pasa el usuario */
    const forms_keys =formData.keys().toArray()/* Devuelve una lista de llaves['nombre'] y esto lo vamos a pasar a un array */

    const form_values = {} /* Creamos un objeto para ir llenando con los valores que vayan pasando en el form */

    for (let key of forms_keys){ /* por cada elemento de mi arrays */
        /* Creo nuevas propiedades con el [key] */
        form_values[key] = formData.get(key)
    }

    /* PASAMOS TODO LO QUE ESTA ENCERRADO A UN ARCHIVO JS Y LO IMPORTAMOS Y LO LLAMAMOS COMO ABAJO */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    const nuevoUser = extratcFormData(formJSX)

    /* Validaciones  EN EL ARCHIVO DEL PROFE HAY OTRA FORMA PARA EVITAR LOS PREVSTATE*/
    let hayErrores = false /* Me sirve para marcar si hay algun error de validacion en mi form*/

    const [errors, setErrors] = useState({nombre:null/* (puede ir false tbm, pero como estamos trabajando con un error tipo string, usamos null) */, contrasenia:null}) /* Que hace? Marca en donde hay errores, en este caso no hay errores ya que los valores son nulls pero si en algun momento esto es TRUE es que hay un error */
    if (!nuevoUser.nombre){
        setErrors((prevStateErrors) => {
            return {...prevStateErrors, nombre:'El nombre es obligatorio'}
        })
        hayErrores = true
    }
    if (!nuevoUser.contrasenia){
        setErrors((prevStateErrors) => {
            return {...prevStateErrors, contrasenia:'El contrasenia es obligatorio'}
        })
        hayErrores = true
    }
    /* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    /* No hubo contrasenia entonces quiero cambiar mi estado de errores para que haya un error en contrasenia */
    
    if (!nuevoUser.contrasenia){
        setErrors((prevStateErrors) => {
            return {...prevStateErrors, contrasenia:'El contrasenia es obligatorio'} /* Clono el estado de errors, y remplazo el valor de contrasenia por el mensaje que quiero que muestre */
        })
        hayErrores = true
    }
    else{
        setErrors((prevStateErrors) => {
            return {...prevStateErrors, contrasenia:'null'} /* Aca reseteamos el valor, borramos el error. */
        })
        
    }








    /* Crear un objeto DAte con la fecha actual.
    -Un objeto date nos permite manipular las fechas */
    const fechaActual = new Date()
    nuevoUser.horaCreacion = `${fechaActual.getHours}:${fechaActual.getMinutes}`
    
console.log('form enviado')

/*  Estados en formularios, Crear un rectangulo con la informacion que ponga el usuario en el form y imprimirla*/

/* usuarios.push(nuevoUser) = ESTO ESTA MAL */

/* const usuarios2 = usuarios
usuarios2.push(nuevoUser)
setUsuarios()  = ESTO TAMBIEN ESTA MAL, PORQUE SEGUIMOS MODIFICANDO EL ARRAY YA QUE ESTADO 2 COPIA LA REFERENCIA Y NO EL VALOR, QUE EN ESTE CASO EL VALOR ES UN ARRAY VACIO*/

/* Necesito clonar nuevoUSer y guardarlo en otra variable */

/* -OPCION 1: */
/* const nuevoUser2 = [...usuarios]
nuevoUser2.push(nuevoUser)
setUsuarios(nuevoUser2) */

/* ES LO MISMO QUE ARRIBA PERO MEJOR: */
setUsuarios([...usuarios, nuevoUser])

}

return (
    <div>
        <h1>Formularios en React</h1>
        <form onSubmit={handleSubmitUncontrolledForm}>
            <label htmlFor="nombre">Ingrese su nombre</label>
            <input type='nombre' id='nombre' name='nombre' />
            <label htmlFor="contrasenia">Ingrese su nombre</label>
            <input type='password' id='contrasenia' name='contrasenia' />
            <button type='submit'>Enviar </button>
        </form>
        <UsersList users={usuarios} />
    </div>
)
}


const UsersList = ({users}) =>{
    return(
        <div>
            {users.map(user =>{
                return(
                    <UserCard nombre={user.nombre} contrasenia={user.contrasenia}  />
                )
            })}
        </div>
    )
} 

const UserCard = ({nombre, contrasenia, hora}) => {
    return(
        <div>
        <h2>Nombre: {nombre}</h2>
        <h2>Contraseña {contrasenia}</h2>
        </div>
    )
}

export default FormulariosScreen


/* Formas de trabajar con Formularios:
- Opcion 1 : Queres controlar los inputs (controlo cada movimiento del usuario)
- Opcion 2: Queres esperar a que el usuario envie el formulario (Espero que envie y controlo los movimientos)
- Lo mas rapido es no controlar pero depende del tiempo o que hayamos ofrecido.

*/