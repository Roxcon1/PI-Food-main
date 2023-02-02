
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../FoodCard/FoodCard"
import style from "./CardsContainer.module.css"
import LoadPg from "../../Views/Load Page/Load";



const CardsContainer = () => {
const [currentPage, setCurrentPage] = useState(0) 
const [search, setSearch] = useState('')
const [dietSearch, setDietSearch] = useState('')

const dietsGlobal = useSelector(state=>state.diets)

console.log(dietsGlobal)

const recipesGlobal = useSelector(state=>state.recipes);
const num = 1;

if (!recipesGlobal.length) return (
    <LoadPg></LoadPg>
)


const nextPage = () => {
    if( recipesGlobal.filter( food => food.food_name.includes( search )).length > currentPage + 9)
    setCurrentPage(currentPage + 9)
};

const prevPage = () => {
    if (currentPage > 0)
    setCurrentPage(currentPage - 9)
};

const searchOnChange = ({target}) => {
    setCurrentPage(0)
    setSearch(target.value)

};
const alphabeticOrder = () => {
    setCurrentPage(1)
    return recipesGlobal.sort((a, b) => {
        return a.food_name > b.food_name ? 1 : -1
})
};

const oppositeAlphabetic = () => {
    setCurrentPage(1)
    return recipesGlobal.sort((a, b) => {
        return a.food_name < b.food_name ? 1 : -1    
}).slice(currentPage, currentPage + 9)
};

const unHealthy = () => {
    setCurrentPage(1)
    return recipesGlobal.sort((a, b) => {
        return a.food_healthScore > b.food_healthScore ? 1 : -1
}).slice(currentPage, currentPage + 9)
};

const healthy = () => {
    setCurrentPage(1)
    return recipesGlobal.sort((a, b) => {
        return a.food_healthScore < b.food_healthScore ? 1 : -1
}).slice(currentPage, currentPage + 9)
};

const filterByDiets = ({target}) => {
    setCurrentPage(1)
    const diet = target.value
    console.log(recipesGlobal)
    if(!diet) return recipesGlobal
    else {const filtered = recipesGlobal.filter( food => food.diets === diet)
    return filtered.slice(currentPage, currentPage + 9)
    }
};

const filterRecipes = () => {
    if(search.length === 0) return recipesGlobal.slice(currentPage, currentPage + 9)
    else {const filtered = recipesGlobal.filter( food => food.food_name.includes( search ))
    return filtered.slice(currentPage, currentPage + 9)
    }
};

const reload = () => {
    setCurrentPage(0)
}
    return (
        <div key={num + 1} className={style.container}>
            <div>
                <button onClick={alphabeticOrder}>Aa-Zz</button>
                <button onClick={reload}>r</button>
                <button onClick={oppositeAlphabetic}>Zz-Aa</button>
            </div>
            <div>
            {dietsGlobal.map(diet => {
                return <button onClick={filterByDiets} value={diet.diet_name}>{diet.diet_name}</button>
            })}
            </div>
            <div>
                <button onClick={healthy}>Healthy</button>
                <button onClick={unHealthy}>unHealthy</button>
            </div>
            <div>
                <input type="text" placeholder="Buscar Recetas por Nombre" value={search} onChange={searchOnChange}/>
            </div>
            <div>
                <button onClick={prevPage}>Anterior</button>
                <button onClick={nextPage}>Siguiente</button>
            </div>
        
            {filterRecipes(recipesGlobal).map(recipe => {
                return <Card
                Id={recipe.food_id}
                Name={recipe.food_name}
                Image={recipe.food_image}
                healthScore={recipe.food_healthScore}
                dishTypes={recipe.dishTypes}
                diets={recipe.diets}
                />
            })}
        </div>
    )
}

export default CardsContainer;