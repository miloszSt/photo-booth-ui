import React from "react";
import PropTypes from "prop-types";

const style = {
    WebkitTransform: 'rotate(90deg)'
};

class Video extends React.Component {

    constructor(props) {
        super(props);
        console.log("Video", props);
        this.handleOnClick.bind(this);
    }

    handleOnClick = (event) => {
        console.log(this);
        this.props.handleOnClick(this.reloadVideo);
    };

    reloadVideo() {
        const video = document.getElementById('video');
        video.load();
    }


    loopVideo() {
        const { currentState } = this.props;
        return currentState.hasOwnProperty("loop") ? currentState.loop : false;
    }

    render() {
        return (
            <video id="video" autoPlay loop={this.loopVideo()} style={style} onClick={this.handleOnClick}>
                <source src={this.props.currentState.animations[0]} type="video/mp4"/>
            </video>
        );
    }
}

Video.propTypes = {
  currentState: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired
};

export default Video;