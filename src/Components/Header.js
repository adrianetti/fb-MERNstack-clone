import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';

import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { useHistory } from 'react-router';


function Header() {
    const [{ user }, dispatch] = useStateValue();
    const history = useHistory();
    
    const signOut = () => {
        auth.signOut()
        history.push("/login")
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="fb-logo"/>
            </div>

            <div className="header__input">
                <SearchIcon />
                <input placeholder="Search" type="text"/>
            </div>

            <div className="header__center">
                <div className="header__option
                header__option--active">
                    <HomeIcon fontsize="large"/>
                </div>

                <div className="header__option">
                    <FlagIcon fontsize="large"/>
                </div>

                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontsize="large"/>
                </div>

                <div className="header__option">
                    <StorefrontOutlinedIcon fontsize="large"/>
                </div>

                <div className="header__option">
                    <SupervisedUserCircleOutlinedIcon fontsize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar alt={user?.displayName} src={user?.photoURL}/>

                    <h4>
                        {user?.displayName}
                    </h4>
                    
                    <IconButton>
                        <AddIcon />
                    </IconButton>

                    <IconButton>
                        <ForumIcon />
                    </IconButton>

                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>
                        
                    <IconButton onClick={signOut}>
                        <ExpandMoreIcon />
                    </IconButton>                    
                </div>
            </div>


            
        </div>
    )
}

export default Header
