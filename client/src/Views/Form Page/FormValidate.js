const title = document.getElementById("Title")
    const summary = document.getElementById("Summary")
    const stepbystep = document.getElementById("StepByStep")
    const error = document.getElementById("Error")

    
    console.log(title)

const expressions = {
    title: /^[a-zA-Z0-9\_\-]{12,60}$/,
    summaryNStepbyStep: /^[a-zA-Z0-9\_\-]{12,600}$/,
    image: /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?.*(png|jpg|jpeg|gif)$/,
    healthscore: /^([0-9]|[1-9][0-9]|100)$/

 }
 
 const fields = {
    food_name: false,
    food_summary: false,
    food_healthScore: false,
    food_image: false,
    food_steps: false,

}
    
const submitHandler = () => {
    let errorMessages = [] 

    if(title.value === null || title.value === ""){
        errorMessages.push("Your recipe must have a title")
    }

    if(summary.value === null || summary.value === ""){
        errorMessages.push("Your recipe must have a summary")
    }

    if(stepbystep.value === null || stepbystep.value === ""){
        errorMessages.push("Your recipe must have a guide")
    }

    error.innerHTML = errorMessages.join(", ")
        
    /*axios.post("http://localhost:3001/recipes", form)
    .then((res)=>alert(res))
    .catch(err => alert(err))*/

}
