import "../../../assets/sass/favorites.scss"
import NotFavorites from "./favoritescomponent/NotFavorites";
import BorderFavorites from "./favoritescomponent/BorderFavorites";
import React, {useState} from 'react';


function Favorites() {
    const[ren, setRen] = useState();
    let favorites;
    
    let favorit = JSON.parse(localStorage.getItem('favorites'));
    if (favorit?.length === 0 || favorit == null) {
        favorites = <NotFavorites />
    } else {
        favorites = <BorderFavorites ren={setRen}/>
    }

    return (
        <div>
            {favorites}
        </div>
    )
}

export default Favorites