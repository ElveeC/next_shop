import { FC, ChangeEvent } from "react";

type RadioProps = {
  name: string;
  id: string;
  isChecked: boolean;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioProps> = (radio: RadioProps) => {
  const { name, id, isChecked, label, onChange } = radio;

  return (
      <div>
        <input name={name} id={id} value={id} type="radio" checked={isChecked} onChange={onChange}/>
        <label htmlFor={id}>{label}</label>
      </div>
  );
}

export default Radio;
