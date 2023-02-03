import { useState } from "react";
import axios from "axios"
import style from "./Form.module.css"

const Form = () => {

    const [form,setForm] = useState({
        name:"",
        summary:"",
        healthscore:0,
        image:"",
        steps:"",

    })

    const [errors, setErrors] = useState({
        name:"",
        summary:"",
        healthscore:0,
        image:"",
        steps:"",

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
        axios.post("http://localhost:3001/recipes", form)
        .then((res)=>alert(res))
        .catch(err => alert(err))

    }

    return(
        <div className={style.background}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"/>
            
        <form onSubmit={submitHandler} >
            <p className={style.titleMain}>Create your own Recipe!</p>
            <div>
                <p className={style.title}>Recipe's title</p>
                <div className={style.divInput}>
                    <input className={style.input} type="text" value={form.name} onChange={changeHandler} name="name"/>
                     {errors.name && <span>{errors.name}</span>}
                </div>
            </div>

            <div>
                <p className={style.title}>Recipe's Summary</p>
                <div className={style.divInput}>
                    <input className={style.input} type="text" value={form.summary} onChange={changeHandler} name="summary"/>
                     {errors.summary && <span>{errors.summary}</span>} 
                     </div>
            </div>

            <div>
                <p className={style.title}>HealthScore</p>
                <div className={style.divInput}>
                    <input className={style.input} type="number" value={form.healthscore} onChange={changeHandler} name="healthscore"/>
                     {errors.healthscore && <span>{errors.healthscore}</span>} 
                     </div>
            </div>

            <div>
                <p className={style.title}>Recipe's Picture</p>
                <div className={style.divInput}>
                    <input className={style.input} type="text" value={form.image} onChange={changeHandler} name="image"/>
                     {errors.image && <span>{errors.image}</span>} 
                     </div>
            </div>

            <div>
                <p className={style.title}>Step by Step</p>
                <div className={style.divInput}>
                    <input className={style.input} type="text" value={form.steps} onChange={changeHandler} name="steps"/>
                     {errors.steps && <span>{errors.steps}</span>} 
                     </div>
            </div>
            <div>
                <button className={style.Buttons} type="submit">Create Recipe</button>
            </div>
        </form>
        </div>
    )
}

export default Form;