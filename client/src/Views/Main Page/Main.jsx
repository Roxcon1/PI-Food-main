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
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"/>
            <CardsContainer />
        </div>
    )
}

export default Main;