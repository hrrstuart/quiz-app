import React, { Component } from "react";
import * as he from "he";

interface IAnswer {
    handleClick: (content: string) => void;
    bgColour: string;
    content: string;
}

class Answer extends Component<IAnswer, {}> {
    constructor(props: IAnswer) {
        super(props);
    }

    render() {
        const { handleClick, bgColour, content } = this.props;
        return (
            <button onClick={() => handleClick(content)} className="answer" style={{ backgroundColor: bgColour }}>
                {he.decode(content)}
            </button>
        )
    }
}

export default Answer;
