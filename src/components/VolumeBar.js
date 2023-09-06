import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateMarginLeft } from "../redux/actions/cssActions"

function VolumeBar() {
    const marginLeft = useSelector(state => state.css.marginLeft)

    const dispatch = useDispatch()

    const handleMarginChange = (newMarginLeft) => {
        dispatch(updateMarginLeft(newMarginLeft))
    }

    return(
        <div className="volume-bar">
            <input 
                type="range" 
                id = "volume-slider"
                className="volume-slider" 
                min="0" max="100" 
                value={marginLeft} 
                step="1" 
                onChange = {e => handleMarginChange(e.target.value)}
            />
        </div>
    )
}

export default VolumeBar