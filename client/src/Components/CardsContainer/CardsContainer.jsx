import { useSelector } from "react-redux";
import Card from "../FoodCard/FoodCard"
import style from "./CardsContainer.module.css"

const CardsContainer = () => {
	const recipesGlobal = useSelector(state=>state.recipes);
    return (
        <div className={style.container}>
            {recipesGlobal.map(recipe => {
                return <Card 
                Id={recipe.food_id}
                Name={recipe.food_name}
                Image={recipe.food_image}
                dishTypes={recipe.dishTypes}
                diets={recipe.diets}
                />
            })}
        </div>
    )
}





export default CardsContainer;