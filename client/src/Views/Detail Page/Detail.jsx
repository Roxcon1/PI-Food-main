import DetailCard from "../../Components/DetailCard/DetailCard";
import style from "./Detail.module.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/actions";
import { useParams } from "react-router-dom";


const Detail = () => {
    const ParID = useParams()

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRecipe(ParID.id))
    },[dispatch])
    
    return(
        
        <div className={style.pageBg}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"/>
            <DetailCard></DetailCard>
        </div>
    )
}

export default Detail;