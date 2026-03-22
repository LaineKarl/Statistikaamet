import type { UserAnswer } from "../types/quiz";

type Props = {
    userAnswers: UserAnswer[];
    onNext: () => void;
};

function Feedback({ userAnswers, onNext }: Props) {
    const lastAnswer = userAnswers[userAnswers.length - 1];

    if (!lastAnswer) {
        return null;
    }

    return (
        <div style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2>{lastAnswer.isCorrect ? "Õige!" : "Vale!"}</h2>
            <button onClick={onNext} style={{ marginTop: 50, padding: "10px 20px", fontSize: "16px", textAlign: "center" }}>Järgmine</button>
        </div>
    );
}

export default Feedback;