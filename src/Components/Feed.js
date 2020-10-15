import React from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
            profilePic="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/94235878_10215623293391506_6975524731248181248_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=YS7V780FovUAX9hcoKp&_nc_ht=scontent-mia3-1.xx&oh=b58138cdf6056d96d32eec3c5ad82db2&oe=5FADF4F4"
            message="I love u so much💞"
            timestamp="1602784795000"
            imgName="imgName"
            username="Adrian"
            />
            
        </div>
    )
}

export default Feed
