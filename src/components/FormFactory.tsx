interface FormFactoryProps {
    patternLengthLabel: string;
    numberOfBallsLabel: string;
    patternLengthValue: string;
    numberOfBallsValue: string;
    onPatternLengthChange: (value: string) => void;
    onNumberOfBallsChange: (value: string) => void;
    onGenerate: () => void;
  }

export default function FormFactory(props: FormFactoryProps) {
    const {
      patternLengthLabel,
      numberOfBallsLabel,
      patternLengthValue,
      numberOfBallsValue,
      onPatternLengthChange,
      onNumberOfBallsChange,
      onGenerate,
    } = props;
  
    return (
      <div>
        <Input
          label={patternLengthLabel}
          value={patternLengthValue}
          onInputChange={onPatternLengthChange}
        />
        <Input
          label={numberOfBallsLabel}
          value={numberOfBallsValue}
          onInputChange={onNumberOfBallsChange}
        />
        <button onClick={onGenerate}>Generate</button>
      </div>
    );
  }
  
  interface InputProps {
    label: string;
    value: string;
    onInputChange: (value: string) => void;
  }
  
  function Input(props: InputProps) {
    const { label, value, onInputChange } = props;
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onInputChange(e.target.value);
    };
  
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          type="text"
          name={label}
          value={value}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
    );
  }