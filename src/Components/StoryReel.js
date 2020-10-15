import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/p720x720/120475770_10216776048569665_2723876376217946266_o.jpg?_nc_cat=110&_nc_sid=13bebb&_nc_ohc=R_08me25zcsAX83uEFX&_nc_ht=scontent-mia3-2.xx&tp=6&oh=30e1cf7293e3d6a392feafec5d56c0ed&oe=5FAE6306"
                profileSrc="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/94235878_10215623293391506_6975524731248181248_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=YS7V780FovUAX9hcoKp&_nc_ht=scontent-mia3-1.xx&oh=b58138cdf6056d96d32eec3c5ad82db2&oe=5FADF4F4"
                title="Adrian"
            />
            <Story 
                image="https://images.squarespace-cdn.com/content/v1/5d3b3b3b8e1a1d000123d049/1587576075681-T3S77ZQUUUXB95D15GRM/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/famous+streets+in+London.jpg"
                profileSrc="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/119655124_1680428768785553_7450682548836172920_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=whV2KuFdU_cAX_0wn8_&_nc_ht=scontent-mia3-2.xx&oh=0643c4ad9869da8db03480f08f5f25ba&oe=5FAC3A4F"
                title="Simoney"
            />
            <Story 
                image="https://i.insider.com/58e78f6a8af578032f8b6314?width=1100&format=jpeg&auto=webp"
                profileSrc="https://image.cnbcfm.com/api/v1/image/105608434-1543945658496rts28qzc.jpg?v=1554921416&w=1400&h=950"
                title="Tim"
            />
        </div>
    )
}

export default StoryReel
