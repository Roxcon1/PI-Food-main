import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import style from "./Main.module.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";


const Main = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getRecipes())
    },[dispatch])

    return(
        <div className={style.mainBg}>
            <CardsContainer/>
        </div>
    )
}

export default Main;