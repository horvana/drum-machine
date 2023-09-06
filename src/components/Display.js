import Toggle from "./Toggle"
import VolumeBar from "./VolumeBar"
import Legend from "./Legend"

function Display() {
    return(
        <div id="display">
            <Toggle />
            <Legend />
            <VolumeBar />
        </div>
    )
}

export default Display