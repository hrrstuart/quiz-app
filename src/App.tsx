import React from 'react';
import './App.css';
import Quiz from './components/Quiz';
import IApp from './types/App';
import axios from 'axios';

class App extends React.Component<{}, IApp> {
    constructor(props: any) {
        super(props);
        this.state = {
            quiz: undefined
        };
    }

    componentDidMount() {
        this.newQuestion();
    }

    newQuestion() {
        axios.get(`https://opentdb.com/api.php?amount=1`)
            .then(res => {
                const data = res.data.results[0];
                console.log(res);

                this.setState({ quiz: data });
            })
            .catch(() => {
                this.setState({ quiz: undefined });
            })
    }

    render() {
        return (
            <div className="App">
                {this.state.quiz ? <Quiz quiz={this.state.quiz}/> : 'Loading...'}
            </div>
        )
    }
}

export default App;
