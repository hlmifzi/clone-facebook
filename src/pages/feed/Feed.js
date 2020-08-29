import React from 'react'
import StoryReel from '../../components/story/StoryReel'
import './feed.css'
import MessageSender from '../../components/messageSender/MessageSender'
import Post from './Post'

const Feeds = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://lh3.googleusercontent.com/a-/AOh14GisXmJazHmMR7aS7h_AzdJ1d9Q_BY-iRRYZu9JPmA"
                image="https://lh4.googleusercontent.com/-bpa9xQcWVDo/VNPfo4TV9iI/AAAAAAAACM0/QdfcUEtLB5U/s1600/beautiful-nature-beach-wallpaper-for-desktop-14-hd-wallpapers.jpg"
                username="Helmi Fauzi "
                timestamp="tim"
                message="Its Work"
            />
            <Post
                profilePic="https://lh3.googleusercontent.com/a-/AOh14GisXmJazHmMR7aS7h_AzdJ1d9Q_BY-iRRYZu9JPmA"
                image="https://lh4.googleusercontent.com/-bpa9xQcWVDo/VNPfo4TV9iI/AAAAAAAACM0/QdfcUEtLB5U/s1600/beautiful-nature-beach-wallpaper-for-desktop-14-hd-wallpapers.jpg"
                username="M. Cholis Malik"
                timestamp="tim"
                message="Its Work"
            />
            <Post
                profilePic="https://lh3.googleusercontent.com/a-/AOh14GisXmJazHmMR7aS7h_AzdJ1d9Q_BY-iRRYZu9JPmA"
                image="https://lh4.googleusercontent.com/-bpa9xQcWVDo/VNPfo4TV9iI/AAAAAAAACM0/QdfcUEtLB5U/s1600/beautiful-nature-beach-wallpaper-for-desktop-14-hd-wallpapers.jpg"
                username="M. Cholis Malik"
                timestamp="tim"
                message="Its Work"
            />
        </div>
    )
}

export default Feeds
