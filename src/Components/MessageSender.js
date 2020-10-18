import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'

import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

import axios from '../axios'
import FormData from 'form-data'
import { useStateValue } from '../StateProvider'

function MessageSender() {
    const [{user}, dispatch] = useStateValue()

    const [input, setInput] = useState('')
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState('')

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (image) {
            const imgForm = new FormData();
            imgForm.append('file', image, image.name)

            axios.post('/upload/image', imgForm, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`
                }
            })
            .then((res) => {
                console.log(res.data)

                const postData = {
                    text: input,
                    imgName: res.data.filename,
                    avatar: user.photoURL,
                    timestamp: Date.now(),
                    user: user.displayName,
                }

                console.log(postData)
                savePost(postData)
            })
        }
        else {
            const postData = {
                text: input,
                avatar: user.photoURL,
                timestamp: Date.now(),
                user: user.displayName,
            }

            console.log(postData)
            savePost(postData)
        }
        
        setImageUrl('')
        setImage(null)
        setInput('')
    }

    const savePost = async (postData) => {
        await axios.post('/upload/post', postData)
            .then((res) => {
                console.log(res)
                window.location.reload(false)
            })
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user?.photoURL} alt={user?.displayName}/>

                <form>
                    <input type="text" className="messageSender__input" placeholder="What's on your mind?" value={input} onChange={(e) => setInput(e.target.value)}/>

                    <input type="file" className="messageSender__fileSelector" onChange={handleChange}/>

                    <button onClick={handleSubmit} type="submit" disabled={!input}>
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
