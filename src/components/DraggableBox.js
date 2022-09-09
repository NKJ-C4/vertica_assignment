import { useEffect, useState } from "react"
import Draggable from "react-draggable"
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
      globalPosition: state.position
    }
}
const DraggableBox = props => {
    const [defaultDimensions, setDefaultDimensions] = useState(null)

    const checkForOutside = (e, i) => {
        const { y } = i
        if(y>-300){
            setDefaultDimensions({x: 20, y: -350});
        } else{
            setDefaultDimensions(null)
        }
        
        console.log("dmns", e, i)
    }

    const handleDragStart = () => {
        setDefaultDimensions(null)
    }
    return (
        <Draggable 
            bounds="parent" 
            onStart={() => handleDragStart()}
            onDrag={() => props.handlePositionChange("")} 
            onStop={(e, i) => checkForOutside(e,i)}
            defaultPosition={{x: 20, y: -350}}
            position={defaultDimensions}
        >
            <div 
                className={
                    "draggable-box" + 
                    (props.position === "lower_right" ? 
                    " lr" 
                    : props.position === "center" ? 
                    " centered" 
                    : "")
                } 
                    id="dragme" 
                    style={{border: props.globalPosition === "returned" ? "3px solid #3498db" : "none"}}
            >
                <span className="positionSpan">
                    {props.position === "lower_right" ? 
                        "Lower Right" 
                        : props.position === "center" ? 
                        "Center" 
                        : "Floating..."
                    }
                </span>
                <span className="dragMeAround">Drag Me Around...</span>
            </div>
        </Draggable>
    )
}

export default connect (mapStateToProps)(DraggableBox)