import { useSelector } from "react-redux";
import LoadPg from "../../Views/Load Page/Load";

const DetailCard = () => {
    const recipes = useSelector(state=>state.recipes);

    console.log(recipes)

    if(!recipes.length) {
        return (
            <LoadPg></LoadPg>
        )
    } 

    return (
        <div>
            <img src={recipes[0].food_image} alt=""/>
            <p>{recipes[0].food_name}</p>
            <p>{recipes[0].dishtypes}</p>
            <p>{recipes[0].food_healthScore}</p>
            <p>{recipes[0].food_summary}</p>
            <p>Diets {recipes[0].diets.map(diet => <p>{diet}</p>)}</p>
            <p>Steps{recipes[0].food_steps.map(step => <p>{step}</p>)}</p>
        </div>
    )
}

export default DetailCard