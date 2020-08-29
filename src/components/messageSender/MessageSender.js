import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import Icon from '../../assets/icon/Icon'
import './message-sender.css'

const MessageSender = () => {
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        //db stuff

        setInput("")
        setImageUrl("")
    }
    return (
        <div className="message-sender">
            <div className="message-sender__top">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="message-sender__input"
                        placeholder={`What's on your mind`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder={`image url (optional)`}
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="message-sender__bottom">
                <div className="message-sender__option">
                    <Icon.Videocam style={{ color: "red" }} />
                    <h3>Live Vide</h3>
                </div>
                <div className="message-sender__option">
                    <Icon.PhotoLibrary style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="message-sender__option">
                    <Icon.InsertEmoticon style={{ color: "orange " }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
