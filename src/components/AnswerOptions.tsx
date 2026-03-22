type Props = {
  options: string[];
  onOptionClick: (index: number) => void;
  disabled?: boolean;
 
};

function AnswerOptions({ options, onOptionClick, disabled }: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onOptionClick(index)}
          disabled={disabled}
          style={{
            flex: 1,                    
            maxWidth: "200px",          
            minHeight: "80px",          
            padding: "20px",
            fontSize: "16px",
            cursor: disabled ? "not-allowed" : "pointer",

            display: "flex",            
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default AnswerOptions;