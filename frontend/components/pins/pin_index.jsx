import { allPhotos  } from "../splash/fetch_splash_info";
import React from 'react'
import PinPhotoContainer from "./pin_item";
import Masonry from 'react-masonry-css'

const DiscoverPins = (props) => {

    const { photoNumber } = props

    const randomPhotos = () => {
        const allPhotosDup = [...allPhotos]
        const photoUrlArray = []
        let totalPhotos = 51
        for (let i = 0; i < photoNumber; i++) {
            const photoIndex = Math.floor(Math.random() * totalPhotos)
            totalPhotos -= 1
            photoUrlArray.push(allPhotosDup[photoIndex])
            allPhotosDup.splice(photoIndex, 1)
        }
        return photoUrlArray
    }

    const breakpoints = {
        default: 7,
        1850: 6,
        1630: 5,
        1340: 4,
        1080: 3,
    }

    return (
        <div className="pins-container">
            <Masonry
                className={`masonry-grid ${photoNumber === 28 ? "splash-background-grid" : ""}`}
                breakpointCols={breakpoints}
                columnClassName="masonry-grid-column"
            >
                {
                    randomPhotos().map( (photoUrl, i) => <PinPhotoContainer photoUrl={photoUrl}
                                                                        key = {i}
                                                                        photoId = {i}
                                                                            />)
                }
            </Masonry>
        </div>
    )
    
}

export default DiscoverPins

