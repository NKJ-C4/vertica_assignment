import { useEffect, useState } from 'react';
import '../App.css';
import DraggableBox from '../components/DraggableBox';
import Footer from '../components/Footer';
import MoveableArea from '../components/MoveableArea';
import NavBar from '../components/NavBar';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    globalPosition: state.position
  }
}

function Home (props) {
  const [position, setPositition] = useState("");
  const [showDraggableBox, setShowDraggableBox] = useState(true);

  // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  useEffect(() => { 
    if(props.globalPosition === "returned"){
      setPositition("center")
    }
  }, [props.globalPosition])

  const handlePositionChange = (value) => {
    setPositition(value)
  }

  document.addEventListener('keydown', (e) => {
    if(e.key === "Escape"){
      setShowDraggableBox(false);
    } else if(e.key === "Enter") {
      setShowDraggableBox(true);
    }
  })

  return (
    <div className="Home">
      <NavBar handlePositionChange={handlePositionChange} position={position} />
      <div className='moveableArea-floatingBlock' style={{height: vh-130}}>
        <MoveableArea position={position} showDraggableBox={showDraggableBox} />
        {showDraggableBox ? <DraggableBox position={position} handlePositionChange={handlePositionChange} /> : null}
      </div>
      <Footer position={position} handlePositionChange={handlePositionChange} />
    </div>
  );
}

export default connect (mapStateToProps)(Home);
