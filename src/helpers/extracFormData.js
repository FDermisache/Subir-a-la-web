const extratcFormData = (formJSX) => {
    const formData = new FormData(formJSX) /* Es como una funcion y con el new le estamos diciendo que nos cree un nuevo objeto, nos va a devolver un objeto con el cual vamos a poder manipular informacion de mi formulario */
    console.log(formData.get('text')) /*  Con el get puedo obtener el valor de un campo de mi formulario, el name del input debe coincidir con el parametro pasado en () */
    
    /* Obtener un objeto con los valores de nuestro formulario */
    const forms_keys = formData.keys().toArray()/* Devuelve una lista de llaves['nombre'] y esto lo vamos a pasar a un array */

    const form_values = {} /* Creamos un objeto para ir llenando con los valores que vayan pasando en el form */

    for (let key of forms_keys){ /* por cada elemento de mi arrays */
        /* Creo nuevas propiedades con el [key] */
        form_values[key] = formData.get(key)
    }
    return form_values
}

export default extratcFormData