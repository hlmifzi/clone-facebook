import React from 'react'
import Icon from '../../assets/icon/Icon'
import { Avatar, IconButton } from '@material-ui/core'

import './header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
            </div>
            <div className="header__input">
                <Icon.SearchIcon />
                <input placeholder="Search Facebook" type="text" />
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <Icon.HomeIcon fontSize="large" />
                </div>
                <div className="header__option ">
                    <Icon.FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <Icon.SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <Icon.StorefrontIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <Icon.SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Helmi Fauzi</h4>
                </div>

                <IconButton>
                    <Icon.AddIcon />
                </IconButton>
                <IconButton>
                    <Icon.ForumIcon />
                </IconButton>
                <IconButton>
                    <Icon.NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <Icon.ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
