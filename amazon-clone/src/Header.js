import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppindBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();

    console.log(basket);

    return (
        <nav className="header">
            {/* Logo on the left -> img */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            
            {/* Serch box */}
            <div className="header__serach">
                <input text="text" className="header_searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            

            {/* 3 links */}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Sapir</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
  
            </div>

            {/* Basket icon with number */}
            <Link to="/checkout"className="header__link">
                    <div className="header__optionBasket">
                        {/* Shopping basket icon */}
                        <ShoppindBasketIcon/>
                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
            </Link>

        </nav>
    )
}

export default Header
