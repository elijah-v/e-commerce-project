import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
 const [{cart, user}]= useStateValue();   
 const login = ()=>{
     if(user){
         auth.signOut();
     }
 };

return <nav className='header'>

    <Link to='/'>
    <img className='header__logo' src='https:/pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo'/>
    </Link>

    <div className='header__search'>
    <input type='text' className='header__searchInput'/>
    <SearchIcon className='header__icon'/>
    </div>

    <div className='header__nav'>
    <Link to={!user && './login'} className='header__link'>
    <div onClick={login} className='header__option'>
<span className='header__optionLineOne'>Hello {user?.email}</span>
<span className='header__optionLineTwo'>{user ? 'Sign out': 'Sign in'}</span>
    </div>
    </Link>

    <Link className='header__link'>
    <div className='header__option'>
        <span className='header__optionLineOne'>Returns</span>
        <span className='header__optionLineTwo'>Orders</span>
    </div>
    </Link>

    <Link className='header__link'>
    <div className='header__option'>
        <span className='header__optionLineOne'>Posts</span>
        <span className='header__optionLineTwo'>Feedback</span>
    </div>
    </Link>
    </div>

    <Link to='/checkout' className='header__link'>
    <div className='header__optionCart'>
    <ShoppingBasketIcon />
<span className='header__optionLineTwo header__cartCount'>{cart?.length}</span> 
    </div>
    </Link>
    </nav>
    };

export default Header;