import React from 'react';
import statesConfig from './config/statesConfig';
import Video from './components/Video.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statesConfig: [],
            currentStateIdx: null,
            currentState: {}
        };

        this.goToNextState.bind(this);
    }

    componentDidMount() {
        this.setState({
            statesConfig,
            currentState: statesConfig.states[0],
            currentStateIdx: 0
        });
    }

    goToNextState = (callbackFn)  => {
        const currentStateIndex = this.state.currentStateIdx + 1;
        if (currentStateIndex < this.state.statesConfig.states.length) {
            this.setState((prevState, props) => ({
                currentStateIdx: prevState.currentStateIdx + 1,
                currentState: prevState.statesConfig.states[prevState.currentStateIdx + 1]
            }));
            callbackFn();
        }
    };


    renderCurrentState() {
        const { currentState } = this.state;

        if (currentState.type === "ZACHETA" || currentState.type === "ROB_FOTE") {
            return (
                <Video
                    currentState={currentState}
                    handleOnClick={this.goToNextState} />
            );
        }

        return null;
    }

    render() {
        return (
            <div>
                {this.renderCurrentState()}
            </div>
        )
    }
}

export default App;