import DetailCard from "../../Components/DetailCard/DetailCard";
import style from "./Detail.module.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";


const Detail = () => {
    const ParID = useParams()

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRecipe(ParID.id))
    },[dispatch])
    
    return(
        
        <div>
            <button>
            <Link to="/home">Home</Link>
            </button>
            <DetailCard></DetailCard>
        </div>
    )
}

export default Detail;