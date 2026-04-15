function InputWrapper({ id, label, children }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block font-semibold"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export function TextInput({ id, label, value, onChange }) {
  return (
    <InputWrapper
      id={id}
      label={label}
    >
      <input
        id={id}
        name={id}
        type="text"
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={(e) => onChange(e.target.value ?? "")}
      />
    </InputWrapper>
  );
}

export function TextareaInput({ id, label, value, onChange, rows = "5" }) {
  return (
    <InputWrapper
      id={id}
      label={label}
    >
      <textarea
        id={id}
        name={id}
        type="text"
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={(e) => onChange(e.target.value ?? "")}
        rows={rows}
      ></textarea>
    </InputWrapper>
  );
}

export function SelectInput({ id, label, value, onChange, options }) {
  return (
    <InputWrapper
      id={id}
      label={label}
    >
      <select
        id={id}
        name={id}
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={(e) => onChange(e.target.value ?? "")}
      >
        {options.map((o) => (
          <option
            key={o}
            value={o}
          >
            {o}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
}

export function SubmitButton({ label = "Submit", onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600 disabled:bg-purple-300 disabled:text-purple-600 disabled:cursor-none"
    >
      {label}
    </button>
  );
}
