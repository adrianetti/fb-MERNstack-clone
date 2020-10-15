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


function Header() {
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
                    <Avatar alt="Adrian" src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/94235878_10215623293391506_6975524731248181248_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=YS7V780FovUAX9hcoKp&_nc_ht=scontent-mia3-1.xx&oh=b58138cdf6056d96d32eec3c5ad82db2&oe=5FADF4F4"/>

                    <h4>
                        Adrian
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
                        
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>                    
                </div>
            </div>


            
        </div>
    )
}

export default Header
