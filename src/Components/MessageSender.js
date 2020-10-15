import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'

import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

function MessageSender() {
    const [input, setInput] = useState('')
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitting");

    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/94235878_10215623293391506_6975524731248181248_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=YS7V780FovUAX9hcoKp&_nc_ht=scontent-mia3-1.xx&oh=b58138cdf6056d96d32eec3c5ad82db2&oe=5FADF4F4"/>

                <form>
                    <input type="text" className="messageSender__input" placeholder="What's on your mind?" value={input} onChange={(e) => setInput(e.target.value)}/>

                    <input type="file" className="messageSender__fileSelector" onChange={handleChange}/>

                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red'}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
