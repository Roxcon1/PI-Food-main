import style from "./FoodCard.module.css"
import { Link } from "react-router-dom"

const Card = (props) => {
    return (
        <div key={props.Id} className={style.card}>
            <img src={props.Image} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" className={style.imageContainer}/>
            <p>Nombre: {props.Name}</p>
            <p>HealthScore: {props.healthScore}</p>
            <p>Tipo de Comida: {props.dishTypes}</p>
            <button>
                <Link to={`/detail/${props.Id}`}>detail</Link>
            </button>
            <div>Tipos de Dietas {props.diets.map(diet => <p>{diet}</p>)}</div>
        </div>
    )
}

export default Card