import { useState } from "react";
import axios from "axios"

const Form = () => {

    const [form,setForm] = useState({
        name:"",
        summary:"",
        healthscore:0,
        image:"",
        steps:"",
        diets:""

    })

    const [errors, setErrors] = useState({
        name:"",
        summary:"",
        healthscore:0,
        image:"",
        steps:"",
        diets:""

    })

    const validate = (form) => {
        const valid = /^[A-Z a-z]+$/;
        const linkVal =/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/

        console.log(form)

        if(form.name && valid.test(form.name) && form.name.length > 12){
                if(form.name < 50) setErrors({...errors, name:""})
                else setErrors({...errors, name:"El Titulo no puede ser mayor a 50 caracteres"})
         }else {
            setErrors({...errors, name:"Ingresar almenos 12 Caracteres para una receta"})
        }
        if (form.name === "") setErrors({...errors, name:"Una Receta sin Titulo no es valida"})

        if(form.summary && form.summary.length < 160) {
            setErrors({...errors, name:""})
        } else {
            setErrors({...errors, name:"El resumen no puede ser mas largo que 160 caracteres"})
        } setErrors({...errors, name:"Una Receta sin Resumen no es valida"})
            
        if(form.healthscore && form.healthscore > 100) {
            setErrors({...errors, name:""})
        }else{
            setErrors({...errors, name:"El puntaje de salud de tu Receta no puede ser mayor a 100"})
        }
        if (form.healthscore === 0) setErrors({...errors, name:"El puntaje de salud de tu Receta no puede ser 0"})        
        
        if(form.image && linkVal.test(form.image)) setErrors({...errors, name:""})
        else setErrors({...errors, name:""})
        
        if(form.steps && form.steps.length > 20) setErrors({...errors, name:""})
        else setErrors({...errors, name:"Una Receta sin Pasos no es valida"})
            
        if(form.diets.length) setErrors({...errors, name:""})
        else setErrors({...errors, name:"Una Receta sin Dietas no es valida"}) 
    }

    const changeHandler = (event) => {
        setForm({
        ...form,
        name:"",
        summary:"",
        healthscore:0,
        image:"",
        steps:"",
        diets:""
        });
        const property = event.target.name
        const value = event.target.value
        validate({...setForm, [property]:value})
        setForm({...setForm, [property]:value})
        
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/recipes", form)
        .then((res)=>alert(res))
        .catch(err => alert(err))

    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Nombre de la Receta</label>
                    <input type="text" value={form.name} onChange={changeHandler} name="name"/>
                    {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
                <label>Resumen de el Plato</label>
                    <input type="text" value={form.summary} onChange={changeHandler} name="summary"/>
                    {errors.summary && <span>{errors.summary}</span>}
            </div>

            <div>
                <label>Puntaje de Salud de la Receta</label>
                    <input type="number" value={form.healthscore} onChange={changeHandler} name="healthscore"/>
                    {errors.healthscore && <span>{errors.healthscore}</span>}
                
            </div>

            <div>
                <label>Imagen de la Comida</label>
                    <input type="text" value={form.image} onChange={changeHandler} name="image"/>
                    {errors.image && <span>{errors.image}</span>}
                
            </div>


            <div>
                <label>Paso a Paso</label>
                    <input type="text" value={form.steps} onChange={changeHandler} name="steps"/>
                    {errors.steps && <span>{errors.steps}</span>}
            </div>

            <div>
                <label>Tipos de Dietas</label>
                    <input type="text" value={form.diets} onChange={changeHandler} name="diets"/>
                    {errors.diets && <span>{errors.diets}</span>}
            </div>
            <div>
                <button type="submit">Enviar Receta</button>
                <button type="reset">Limpiar el Formulario</button>
            </div>
        </form>
    )
}

export default Form;