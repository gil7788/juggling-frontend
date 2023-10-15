import Input from "./Input";

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
    <div className="bg-white rounded-lg shadow-lg p-4">
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
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={onGenerate}
      >
        Generate
      </button>
    </div>
  );
}
