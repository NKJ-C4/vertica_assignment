import { NavLink } from "react-router-dom";
import { changePosition } from "../Store/action";
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
      globalPosition: state.position
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickBack: () => {
            dispatch(changePosition("returned"))
        }
    }
}
const Page2Footer = props => {
    return (
        <div className="page2-footer">
            <NavLink to={"/"}><button onClick={() => props.onClickBack()}>{"< "}Back</button></NavLink>
        </div>
    )
}

export default connect (mapStateToProps, mapDispatchToProps)(Page2Footer);