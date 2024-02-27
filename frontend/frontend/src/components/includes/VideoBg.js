import React from 'react'
import B_Roll from '../../assets/B-Roll Vidéo Restaurant - Food vidéo - La Promenade.mp4'

const VideoBg = () => {
    return (
        <div className="main">
            <video src={B_Roll} autoPlay loop muted/>
        </div>
    )
}
export default VideoBg;