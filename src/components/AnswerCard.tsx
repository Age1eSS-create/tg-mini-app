import {ReactElement} from "react";

interface answerCardProps {
    callback: (answer: number) => void;
    index: number;
    answer: string;
}

export const AnswerCard = (props: answerCardProps): ReactElement => {

    const onClick = (): void => {
        props.callback(props.index);
    }

    return <div className="answer" onClick={onClick}>
        {props.answer}
    </div>
}