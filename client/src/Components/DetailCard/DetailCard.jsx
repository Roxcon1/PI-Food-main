import { useSelector } from "react-redux";
import LoadPg from "../../Views/Load Page/Load";
import style from "./DetailCard.module.css"


const DetailCard = () => {

    function htmlRemove(str){
        if(str === null || str === '') {
            return false
        } else
        str.toString()

        return str.replace(/(<([^>]+)>)/ig, '')

    }
    const recipes = useSelector(state=>state.recipes);

    console.log(recipes)

    if(!recipes.length) {
        return (
            <LoadPg></LoadPg>
        )
    } 


    <p className={style.text}>{recipes[0].diets.slice().join(", ")} </p>

    return (
        <div className={style.wholePage}> 
            <p className={style.title}>{recipes[0].food_name}</p>
            <img className={style.image} src={recipes[0].food_image} alt=""/>
            <div className={style.title}>This Dish can be Served as a: <p className={style.text}>{recipes[0].dishTypes}</p></div>
            <div className={style.title}>HealthScore <p className={style.number}>{recipes[0].food_healthScore}</p></div>
            <div className={style.title}>A little Summary <p className={style.text}>{htmlRemove(recipes[0].food_summary)}</p></div>
            <div className={style.title}>Diets <p className={style.text}>{recipes[0].diets.slice().join(", ")}</p></div>
            <div className={style.title}>Steps{recipes[0].food_steps.map(step => <p className={style.text}>{step}</p>)}</div>
        </div>
    )
}

export default DetailCard