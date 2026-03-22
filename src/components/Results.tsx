import type { UserAnswer } from "../types/quiz";

type Props = {
    userAnswers: UserAnswer[];
};

function Results({ userAnswers }: Props) {
  const score = userAnswers.filter((a) => a.isCorrect).length;
  const questions = userAnswers.map((a) => a.questionId);
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  let message = "";

    if (percentage === 100) {
    message = "Suurepärane! Mõistad baasteadmisi hästi!";
    } else if (percentage >= 70) {
    message = "Väga hea sooritus!";
    } else if (percentage >= 50) {
    message = "Päris hea, aga saab paremini!";
    } else {
    message = "Tuleb veel harjutada! Proovi uuesti!";
    }

  return (
    <div style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Tulemused</h1>
      <p>Skoor: {score} / {total} ({percentage}%)</p>

        <table border={1} cellPadding={10} style={{ margin: 32, borderCollapse: "collapse", width: "80%" }}>
          <thead>
            <tr>
              <th>Küsimus</th>
              <th>Sinu vastus</th>
              <th>Vastus</th>
            </tr>
          </thead>
          <tbody>
            {userAnswers.map((a) => (
              <tr key={a.questionId} style={{backgroundColor: a.isCorrect ? "#4DC14D" : "#DC1919"}}>
                <td>{a.question}</td>
                <td>{a.selectedAnswer}</td>
                <td>{a.isCorrect ? "Õige" : "Vale"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p>{message}</p>

        <button onClick={() => window.location.reload()} style={{ marginTop: 20, padding: "10px 20px", fontSize: "16px", textAlign: "center" }}>
          Alusta uuesti
        </button>
      </div>);
}

export default Results;