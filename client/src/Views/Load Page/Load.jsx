import { Link } from "react-router-dom"
import style from "./Load.module.css"

const LoadPg = () => {
    return (
        <div className={style.Page}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"/>
            <p>You're in the Error page</p>
            <p>in case you find yourself in here, an error must have occured in our Database</p>
            <p>Please click the button bellow to Return to our Landing Page</p>  
            <button>
            <Link to="/"> Landing </Link>
            </button>
        </div>
    )
}

export default LoadPg