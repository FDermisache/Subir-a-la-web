
//RAFCE = React arrow function component export default
//Un componente de React exportado por defecto

import React, { useState } from 'react'

const EstadosScreen = () => {
    // useState :
    //Es una funcion que nos permite generar estados de react
    //Devuelve un array con el valor de tu estado y una funcion de seteo
    //useState => [stateValue, setState] stateValue: Valor de mi estado / setState: Funcion que va a venir de un array.
    //useState espera recibir el valor inicial de tu estado

    //REGLAS
    //NO se puede reasignar el valor de un estado
    //Si queremos cambiar el valor de un estado debemos usar SIEMPRE LA FUNCION DE SETEO

    //Funcion de seteo/setting
    //La funcion de setting recibe:
    //1. un valor, que sera el nuevo valor del estado

    //La funcion de setting hara que mi componente vuelva a cargarse
    
    //Esto es un array 
    let [contador, setContador] = useState(1) /*  Desetrucutramos el array:le ponemos el nombre que queramos a los dos nombres y luego llamaos a la funcion de seteo useState 
    */

const [ErrorMin, SetErrorMin] = useState(false)

// ESTADO PREVIO CLASE 28:
// La funcion setter puede recibir una callback
//  El valor del retorno de la callback es el valor que tendra mi estado 
// La cllback recibira un parametro con el valor del estado previo (prevState), que vale esto? lo que vale contador. Para que queremos hacer esto? Si yo ejecuto esto 3 veces, el estado previo, va a tomar el valor mas actual, Con la forma de 'incrementar' si ponemos el setContador 3 veces, siempre va a seguir sumando de 1 en 1. Siempre que dependamos del estado previo lo debemos usar.
const incrementar28= () => {
    setContador ((prevState)=>{
        return prevState + 1
    })
}



    const incrementar = () => {
        //Llamo a la funcion de setting
        setContador(contador + 1)  /* Cuando quereamos llamar a la funcion de seteo usamos setContador(es la que va a ir cambiando el estado), y cuando quiera llamar al valor del estado llamo a contador(Va a ir cambiando dependiendo si sumamos o restamos, empieza en 1) */
        SetErrorMin(false)
    }

    const decrementar = () => {
        if (contador > 1){
        setContador( contador - 1 ) 
        }
        else{
            SetErrorMin(true)
        }
    }
    /* 
    PROBLEMA:
    Quiero que cuando CAMBIE el contador VUELVA a imprimir el componente

    SOLUCION:
    Usa estados de react
    */

    const handleShowHiddenText = () =>{
        setIsHiddenText(!isHiddenText)/* Niego el valor boolean, si era falso, ahora es verdadero y viceversa */
    }
    //state isHiddenText : boolean (default true)
    const [isHiddenText, setIsHiddenText] = useState(false)

    return (
        <div>
            {console.log('Me imprimi')}
            <h1>Estados en React</h1>
            <div>
                <button onClick={decrementar}>Restar</button> {/*  Asociamos el click a la funcion, osea, cuando le doy click va a pasar la funcion de decrementar */}
                <span>{contador}</span>
                <button onClick={incrementar}>Sumar</button>
                {ErrorMin && <span>Error, el valor minimo es 1</span>}
            </div>

            <button onClick={handleShowHiddenText}>Abrir</button> {/* El valor empieza con false, la condicion es que si, es menor a 1 entonces se convierte en true  */}
            
            
            {
                !isHiddenText && <span>Texto oculto</span> /* traduccion: Si no esta oculto, &&: entonces muestra el span */
            }
        </div>
    )
}
//condicion ? caso verdadero : caso falso

export default EstadosScreen