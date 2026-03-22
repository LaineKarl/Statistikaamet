type Props = {
  question: string;
};

function QuestionCard({ question }: Props) {
  return (
    <div>
      <h2 style={{ marginTop: "150px" }}>{question}</h2>
    </div>
  );
}

export default QuestionCard;