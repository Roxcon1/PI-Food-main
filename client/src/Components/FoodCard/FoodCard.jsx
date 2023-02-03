import style from "./FoodCard.module.css"
import { Link } from "react-router-dom"

const Card = (props) => {
    return (
        <div className={style.card}>
            <p className={style.text}>{props.Name}</p>
            <img src={props.Image} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" className={style.imageContainer}/>
            <p className={style.text}>HealthScore <p className={style.number}>{props.healthScore}</p></p>
            <button className={style.link}>
                <Link to={`/detail/${props.Id}`}><p className={style.linkText}>See More</p></Link>
            </button>
            <div className={style.text}>Tipos de Dietas <p className={style.diets}>{props.diets.slice().join(", ")} </p></div>
        </div>
    )
}

export default Card