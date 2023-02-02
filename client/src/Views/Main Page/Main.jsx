import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import style from "./Main.module.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDiets, getRecipes } from "../../redux/actions";


const Main = () => {


const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRecipes())
    },[dispatch])

const dispatchDiets = useDispatch()
useEffect(()=>{
    dispatchDiets(getDiets())
},[dispatchDiets])
    return(
        <div className={style.mainBg}>
            <CardsContainer />
        </div>
    )
}

export default Main;