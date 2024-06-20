import { useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  idx: number;
};

const Image = ({ name, idx }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const { getValues, setValue } = useFormContext();

  const convertToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setValue(`${name}.${idx}.content`, reader.result?.toString());
      setIsEdit(false);
    };
    reader.readAsDataURL(file);
  };

  const onChangeImage = (file?: File) => {
    if (file) {
      convertToBase64(file);
    }
  };

  return !isEdit ? (
    <div className="flex gap-2">
      <img
        className="bg-gray-300 object-cover"
        width={100}
        height={100}
        src={getValues(`${name}.${idx}.content`)}
        alt="img"
      />
      <button onClick={() => setIsEdit(true)}>Edit</button>
    </div>
  ) : (
    <div className="flex gap-2">
      <label htmlFor={`${name}.${idx}.content`}>Select Image...</label>
      <input
        onChange={(data) => onChangeImage(data.target.files?.[0])}
        className="hidden"
        type="file"
        id={`${name}.${idx}.content`}
        accept="image/*"
      />
      <button onClick={() => setIsEdit(false)}>Done</button>
    </div>
  );
};

export default Image;
