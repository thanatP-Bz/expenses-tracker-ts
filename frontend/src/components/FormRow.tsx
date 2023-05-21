interface Props {
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const FormRow = ({ type, name, placeholder, value, onChange }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormRow;
