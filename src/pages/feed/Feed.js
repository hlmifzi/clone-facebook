import React from 'react'
import StoryReel from '../../components/story/StoryReel'
import './feed.css'
import MessageSender from '../../components/messageSender/MessageSender'
import Post from './Post'
import useFeed from './hooks/useFeed'
import { useDidMount } from '../../utils/componentLifeCycle'

const Feeds = () => {
    const { posts } = useFeed().state
    const { _getFeeds } = useFeed()

    useDidMount(() => {
        _getFeeds()
    });

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {
                posts.map((v, i) => (
                    <Post
                        key={i}
                        profilePic={v.data.profilePic}
                        image={v.data.image}
                        username={v.data.username}
                        timestamp={v.data.timestamp}
                        message={v.data.message}
                    />
                ))
            }
        </div>
    )
}

export default Feeds
