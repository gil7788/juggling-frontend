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
      <div className="mb-4">
        <label className="font-semibold text-gray-800 mb-2">{label}</label>
        <br />
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

  export default Input;