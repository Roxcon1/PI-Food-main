
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../FoodCard/FoodCard"
import style from "./CardsContainer.module.css"
import LoadPg from "../../Views/Load Page/Load";



const CardsContainer = () => {
const [currentPage, setCurrentPage] = useState(0) 
const [search, setSearch] = useState('')

const dietsGlobal = useSelector(state=>state.diets)

console.log(dietsGlobal)

const recipesGlobal = useSelector(state=>state.recipes);
const num = 1;

const reload = () => {
    setCurrentPage(0)
}

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
    setCurrentPage(currentPage + 9)
    reload()
    return recipesGlobal.sort((a, b) => {
        return a.food_name > b.food_name ? 1 : -1
})
};

const oppositeAlphabetic = () => {
    setCurrentPage(currentPage + 9)
    reload()
    return recipesGlobal.sort((a, b) => {
        return a.food_name < b.food_name ? 1 : -1    
}).slice(currentPage, currentPage + 9)
};

const unHealthy = () => {
    setCurrentPage(currentPage + 9)
    reload()
    return recipesGlobal.sort((a, b) => {
        return a.food_healthScore > b.food_healthScore ? 1 : -1
}).slice(currentPage, currentPage + 9)
};

const healthy = () => {
    setCurrentPage(currentPage + 9)
    reload()
    return recipesGlobal.sort((a, b) => {
        return a.food_healthScore < b.food_healthScore ? 1 : -1
}).slice(currentPage, currentPage + 9)
};

const filterByDiets = ({target}) => {
    setCurrentPage(currentPage + 9)
    reload()
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
    return (
    <div key={num + 1} className={style.wholePage}>
        <div className={style.menus}>
            <input className={style.input} type="text" placeholder="  Search Recipe by Name" value={search} onChange={searchOnChange}/>
        </div>
            
        <div className={style.menus}>
            <div className={style.dropdown}>
                <div className={style.select}>
                    <span >Name</span>
                    <div></div>
                
                <ul className={style.menu}>
                    <li>
                        <button className={style.innerButtons} onClick={alphabeticOrder}>Asending Alphabetic Order</button>
                    </li>
                    <li>
                        <button className={style.innerButtons} onClick={oppositeAlphabetic}>Desending Alphabetic Order</button>
                    </li>
                </ul>
                </div>
            </div>

            <div className={style.dropdown}>
            <div className={style.select}>
                    <span className={style.inSelect}>Diet</span>
                    <div className={style.caret}></div>
                <ul className={style.menu}>
            {dietsGlobal.map(diet => {
                return (<li>
                <button className={style.innerButtons} onClick={filterByDiets} value={diet.diet_name}>{diet.diet_name}</button>
                </li>
                )
            })}
            </ul> 
            </div>
            </div>
            <div className={style.dropdown}>
                <div className={style.select}>
                    <span className={style.inSelect}>HealthScore</span>
                    <div className={style.caret}></div>
                
                <ul className={style.menu}>
                    <li>
                         <button className={style.innerButtons} onClick={healthy}><p>Asending HealthScore</p></button>
                    </li>
                    <li>
                        <button className={style.innerButtons} onClick={unHealthy}>Desending HealthScore</button>
                    </li>
                </ul>
                </div>
                </div>
            </div>


            

            <div className={style.menus}>
                <button className={style.innerButtons} onClick={prevPage}>Prev</button>
                <button className={style.innerButtons} onClick={nextPage}>Next</button>
            </div>
            <div className={style.centerAlign}>
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
        </div>
    )
}

export default CardsContainer;