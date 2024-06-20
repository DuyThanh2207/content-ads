import type { PropsWithChildren } from "react";
import { useDrag } from "react-dnd";
import { ComponentRender, ComponentType } from "../types/component-render";

type Props = {
  type: string;
  addComponent: (data: ComponentRender) => void;
};

export const DragComponent = ({
  children,
  type,
  addComponent,
}: PropsWithChildren<Props>) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "components",
    item: { type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ name: string }>();
      if (item && dropResult) {
        addComponent({
          type: item.type as ComponentType,
          content:
            item.type === "paragraph"
              ? "Paragraph"
              : item.type === "button"
              ? "Button"
              : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
        });
        alert("Successfully!");
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ opacity }} className="cursor-move">
      {children}
    </div>
  );
};
