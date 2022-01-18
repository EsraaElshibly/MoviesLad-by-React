import React, { useContext } from 'react';
import '../Movies/Moviee.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux' ;
import ChangeCounter from '../store/Action/counterAction.js' 
import { languageContext } from '../Context/languageContext.js';

export default function Navbar () {
    var counter = useSelector( (state) => state.count.count)
    const dispatch = useDispatch()
    const HandleCount =() => {
        // dispatch( ChangeCounter(counter == 0 ? 1 : 0) )
        console.log("from counting");
    }

    const favList = useSelector( (state) => state.favList.favList)

    // ============= Using Context to change language in nav ==============
    const {lang , setLang} = useContext(languageContext)

    const tooggleLang =() => {
        setLang(lang == "en" ? "ar" : "en")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item ">
                    <Link to="/" className="navbar-brand active" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item ">
                    <Link to="/Movies" className="navbar-brand" href="#">Movies</Link>
                    </li>
                    
                    <li className="nav-item ">
                    <Link to="/Favourite" className="navbar-brand ">Favourite <span className={`counter`}> {favList.length} </span></Link>
                    </li>
                    <li className='lang'>{lang}</li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-dark" type="submit" onClick={() => {tooggleLang()}}>Toggle</button>
                </form>
                </div>
            </div>
        </nav>
    )
}
