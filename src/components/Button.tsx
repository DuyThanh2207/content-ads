import { useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  idx: number;
};

const Button = ({ name, idx }: Props) => {
  const { register, getValues } = useFormContext();
  const [isEdit, setIsEdit] = useState(false);

  return isEdit ? (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label htmlFor={`${name}.${idx}.content`}>Button Text</label>
        <input
          id={`${name}.${idx}.content`}
          type="text"
          placeholder="Button Label"
          {...register(`${name}.${idx}.content`)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={`${name}.${idx}.message`}>Alert Message</label>
        <input
          id={`${name}.${idx}.message`}
          type="text"
          placeholder="Alert Message"
          {...register(`${name}.${idx}.message`)}
        />
      </div>
      <button onClick={() => setIsEdit(false)}>Done</button>
    </div>
  ) : (
    <div className="flex gap-2">
      <button>{getValues(`${name}.${idx}.content`)}</button>
      <button onClick={() => setIsEdit(true)}>Edit</button>
    </div>
  );
};

export default Button;
