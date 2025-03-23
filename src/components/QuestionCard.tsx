import {ReactElement} from "react";
import {IQuestion} from "../types/IQuestion.ts";
import {AnswerCard} from "./AnswerCard.tsx";

interface questionCardProps {
    question: IQuestion;
    callback: (answer: number) => void;
}

export const QuestionCard = (props: questionCardProps): ReactElement => {
    return <div>
        <div className="question">{props.question.question}</div>
        <div className="answers">
            {props.question.answers.map((item: string, index: number): ReactElement => <AnswerCard answer={item} index={index} callback={props.callback}/>)}
        </div>
    </div>
}