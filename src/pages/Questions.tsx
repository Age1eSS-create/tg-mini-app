import {ReactElement, useState} from "react";
import {shareURL} from "@telegram-apps/sdk";
import {questions} from "../constants/questions.ts";
import {QuestionCard} from "../components/QuestionCard.tsx";

export const Questions = (): ReactElement => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isSuccess, setIsSuccess] = useState(true);

    const onClick = (indexAnswer: number) => {
        if (indexAnswer !== questions[currentQuestion].correctAnswer) {
            setIsSuccess(false);
            return;
        }

        setCurrentQuestion((value: number): number => ++value);
        setScore((value: number): number => value + 1);
    }

    const onReset = () => {
        setCurrentQuestion(0);
        setScore(0);
        setIsSuccess(true);
    }

    const onShare = () => {
        shareURL("https://t.me/ReactRushBot", `Я прошёл тест и набрал ${score} очков! Попробуй и ты 👉`)
    }

    return <div>
        <h2 className="points">Общий счет: {score}</h2>
        {isSuccess && <QuestionCard question={questions[currentQuestion]} callback={onClick} />}
        {!isSuccess && <div className="button-container">
            <button onClick={onReset}>Повторить</button>
            <button className="share" onClick={onShare}>Поделиться</button>
        </div>}
    </div>
};