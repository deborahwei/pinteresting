import { allPhotos  } from "./fetch_splash_info";
import React from 'react'
import SplashPinContainer from "./splash_pin_item";
import Masonry from 'react-masonry-css'
import { BREAKPOINTS } from "../../util/constants_util"

const DiscoverPinsContainer = (props) => {

    const { photoNumber = 51 } = props

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

    return (
        <div className="pins-container">
            <Masonry
                className={`masonry-grid ${photoNumber === 28 ? "splash-background-grid" : ""}`}
                breakpointCols={BREAKPOINTS}
                columnClassName="masonry-grid-column"
            >
                {
                    randomPhotos().map( (photoUrl, i) => <SplashPinContainer photoUrl={photoUrl}
                                                                        key = {i}
                                                                        photoId = {i}
                                                                            />)
                }
            </Masonry>
        </div>
    )
    
}

export default DiscoverPinsContainer

