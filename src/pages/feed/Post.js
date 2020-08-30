import React from 'react'
import { Avatar } from '@material-ui/core'
import Icon from '../../assets/icon/Icon'
import './post.css'

const Post = ({ profilePic, image, username, timestamp, message }) => {
    return (
        <>
            <div className="post" >
                <div className="post__top">
                    <Avatar src={profilePic} className="post__avatar" />
                    <div className="post__topInfo">
                        <h3>{username}</h3>
                        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    </div>
                </div>

                <div className="post__bottom">
                    {message}
                </div>

                <div className="post__image">
                    <img src={image} alt="post" />
                </div>

                <div className="post__options">
                    <div className="post__option">
                        <Icon.ThumbUp />
                        <p>Like</p>
                    </div>
                    <div className="post__option">
                        <Icon.ChatBubbleOutline />
                        <p>Comment</p>
                    </div>
                    <div className="post__option">
                        <Icon.NearMe />
                        <p>Share</p>
                    </div>
                    <div className="post__option">
                        <Icon.AccountCircle />
                        <Icon.ExpandMoreOutlined />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
