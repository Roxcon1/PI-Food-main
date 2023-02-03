import { Link } from "react-router-dom"
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={style.mainContainer}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"/>
            <button className={style.buttons}>
            <Link to="/">landing</Link>
            </button>
            <button className={style.buttons}>
            <Link to="/home">Home</Link>
            </button>
            <button className={style.buttons}>
            <Link to="/create">Form</Link>
            </button>
        </div>
    )
}

export default Navbar;