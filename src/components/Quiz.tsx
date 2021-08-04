import React from 'react'
import IApp from '../types/App';

export default function Quiz(quiz: IApp ) {
    const { question, incorrect_answers, correct_answer } = quiz.quiz!;

    return (
        <div>
            <h1>{decodeURIComponent(question).replace(/&#039;/gi, "'").replace(/&quot;/gi, "\"")}</h1>
            <ul>
                <div>{incorrect_answers[0]}</div>
                <div>{incorrect_answers[1]}</div>
                <div>{incorrect_answers[2]}</div>
                <div>{correct_answer}</div>
            </ul>

            <div>
                Type:
                Difficulty:
            </div>
        </div>
    )
}
