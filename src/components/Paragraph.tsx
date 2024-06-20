import { useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  idx: number;
};

const Paragraph = ({ name, idx }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const { register, getValues } = useFormContext();

  return !isEdit ? (
    <div className="flex gap-2">
      <span>{getValues(`${name}.${idx}.content`)}</span>
      <button onClick={() => setIsEdit(true)}>Edit</button>
    </div>
  ) : (
    <div className="flex gap-2">
      <input
        placeholder="Edit Paragraph Text"
        {...register(`${name}.${idx}.content`)}
      />
      <button onClick={() => setIsEdit(false)}>Done</button>
    </div>
  );
};

export default Paragraph;
