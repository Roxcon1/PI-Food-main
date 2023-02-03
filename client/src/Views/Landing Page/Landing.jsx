import { Link } from "react-router-dom"
import style from "./Landing.module.css"
import cooking from "../../images/cooking.png"

const Landing = () => {
    return(
        <body className={style.landing}>
        <div>
            <div className={style.landing}>
                <button type="button" className={style.button}>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"/>
                <Link to="/home" className={style.font}><img src={cooking} align="center" alt="Link Caido"/>Bienvenido a la Cocina.</Link>
                </button>
            </div>
        </div>
        </body>
    )
}

export default Landing;