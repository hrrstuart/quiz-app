import React, { useState } from 'react'
import * as he from "he";
import Answer from './Answer';
import IApp from '../types/App';
import Answers from '../types/Answers';
import '../css/quiz.css';

export default function Quiz(quiz: IApp) {
    const { question, incorrect_answers, correct_answer, type, difficulty, category } = quiz.quiz!;
    const newArr = shuffleArray([ ...incorrect_answers, correct_answer ]);
    const [answers, setAnswers] = useState<Array<Answers>>(newArr);
    console.log('Arr:', newArr);

    function shuffleArray(array: Array<any>): Answers[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array.map((content, index) => {
            let correct = content === correct_answer;
            return { content, correct, bgColour: '#333', id: index };
        });
    }

    function handleClick(content: string) {
        let answer = answers.find(a => a.content === content)!;
        if (answer.correct) {
            answer.bgColour = "green";
        }
        else {
            answer.bgColour = "red";
            answers.find(a => a.correct)!.bgColour = "green";
        }

        setAnswers(previous => {
            const newArr = previous.filter(a => a.content !== content);
            return [...newArr, answer].sort((a, b) => a.id - b.id);
        })
    }

    function list(array: Array<Answers>): JSX.Element[] {
        return array.map(str => <Answer handleClick={handleClick} bgColour={str.bgColour} content={str.content} />);
    }
    


    return (
        <div className="quiz-box">
            <h2>{he.decode(question)}</h2>
            <ul>
                <div className="answer-list">
                    {list(answers)}
                </div>
            </ul>

            <div>
                <b>Type:</b> {type} - <b>Difficulty:</b> {difficulty} - <b>Category:</b> {category}
            </div>
        </div>
    )
}
