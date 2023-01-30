import style from "./FoodCard.module.css"

const Card = (props) => {
    return (
        <div className={style.card}>
            <p>Id de la receta: {props.Id}</p>
            <p>Nombre: {props.Name}</p>
            <img src={props.Image} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" className={style.imageContainer}/>
            <p>Tipo de Comida: {props.dishTypes}</p>
            <p>Tipo de Dieta: {props.diets.map(diet => <div>{diet}</div>)}</p>
        </div>
    )
}

export default Card