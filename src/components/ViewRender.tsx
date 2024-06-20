import { Fragment } from "react";
import { useDrop } from "react-dnd";
import { FieldArrayWithId } from "react-hook-form";
import { ComponentRender } from "../types/component-render";
import Button from "./Button";
import Image from "./Image";
import Paragraph from "./Paragraph";

type Props = {
  fields: FieldArrayWithId<
    {
      components: ComponentRender[];
    },
    "components",
    "id"
  >[];
};

export const ViewRender = ({ fields }: Props) => {
  const [_, drop] = useDrop(() => ({
    accept: "components",
    drop: () => ({ name: "view_render" }),
  }));

  return (
    <div
      ref={drop}
      className="flex flex-col items-center w-full gap-4 min-h-full"
    >
      {fields.map((field, idx) => (
        <Fragment key={field.id}>
          {field.type === "paragraph" ? (
            <Paragraph idx={idx} name="components" />
          ) : field.type === "button" ? (
            <Button idx={idx} name="components" />
          ) : (
            <Image idx={idx} name="components" />
          )}
        </Fragment>
      ))}
    </div>
  );
};
