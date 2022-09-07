import { useEffect } from "react"
import Draggable from "react-draggable"

const DraggableBox = () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    useEffect(() => {

    })

    const handleDragLimits = () => {
        
    }
    return (
        <Draggable defaultPosition={{x: 30, y: 80}} bounds={{top: 65, bottom: window.innerHeight-215}} onDrag={() => handleDragLimits()} >
            <div className="draggable-box">
                DRAG ME
            </div>
        </Draggable>
    )
}

export default DraggableBox