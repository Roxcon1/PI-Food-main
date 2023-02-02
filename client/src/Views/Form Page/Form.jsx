import { useState } from "react";
import axios from "axios"

const Form = () => {

    const [form,setForm] = useState({
        name:"",
        summary:"",
        healthscore:0,
        image:"",
        steps:"",
        diets: []

    })

    const [errors, setErrors] = useState({
        name:"",
        summary:"",
        healthscore:0,
        image:"",
        steps:"",
        diets: []

    })

    const validate = (form) => {
        const nameCheck = /^\S[a-zA-Z\s]{1,20}\S$/;
        const summaryCheck = /^[a-zA-ZÀ-ÿ0-9\s]{25,500}$/u;
        const healthScoreCheck = /^([1-9][0-9]|100)$/;
        const imageCheck = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?.*(png|jpg|jpeg|gif)$/;
        const stepsCheck = /^[a-zA-ZÀ-ÿ0-9\s]{25,500}$/u;
        
        if(nameCheck.test(form.name)){
            setErrors({...errors,name:""})
        } else {
            setErrors({...errors,name:"Err en Name"})
        } if (form.name === "") setErrors({errors,name:"Nada en Name"})

        if(summaryCheck.test(form.summary)){
            setErrors({...errors,summary:""})
        } else {
            setErrors({...errors,summary:"Err en summary"})
        } if (form.name === "") setErrors({errors,name:"Nada en summary"})

        if(healthScoreCheck.test(form.name)){
            setErrors({...errors,name:""})
        } else {
            setErrors({...errors,name:"Err en HS"})
        } if (form.name === "") setErrors({errors,name:"Nada en hs"})

        if(imageCheck.test(form.name)){
            setErrors({...errors,name:""})
        } else {
            setErrors({...errors,name:"Err en Image"})
        } if (form.name === "") setErrors({errors,name:"Nada en image"})

        if(stepsCheck.test(form.name)){
            setErrors({...errors,name:""})
        } else {
            setErrors({...errors,name:"Err en steps"})
        } if (form.steps === "") setErrors({errors,steps:"Nada en steps"})

    }

    const changeHandler = (event) => {
        let property = event.target.name
        let value = event.target.value
        validate({...form, [property]:value})
        setForm({...form, [property]:value})
        
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(form)
        /*axios.post("http://localhost:3001/recipes", form)
        .then((res)=>alert(res))
        .catch(err => alert(err))*/

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
                <button type="submit">Enviar Receta</button>
                <button type="reset">Limpiar el Formulario</button>
            </div>
        </form>
    )
}

export default Form;