import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import axios from '../axios'

function Feed() {
    const [postsData, setPostsData] = useState([])

    const syncFeed = () => {
        axios.get('/retrieve/posts')
            .then((res) => {
                console.log(res.data)
                setPostsData(res.data)
            })
    }

    useEffect(() => {
        syncFeed()
    }, [])

    return (
        <div className="feed">
            <div className="feed__storyReel">
                <StoryReel />
            </div>
            <MessageSender />

            {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar} 
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))

            }
            
        </div>
    )
}

export default Feed
