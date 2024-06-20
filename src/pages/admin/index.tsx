import { useContext, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DragComponent } from "../../components/DragComponent";
import { ViewRender } from "../../components/ViewRender";
import { ComponentContext } from "../../contexts/ComponentProvider";
import useImportFile from "../../hooks/useImportFile";
import { ComponentRender } from "../../types/component-render";
import { exportFile } from "../../utils/file.helper";

const COMPONENTS = [
  {
    type: "paragraph",
    render: <input disabled value="Paragraph Element" />,
  },
  {
    type: "button",
    render: <button>Button Element</button>,
  },
  {
    type: "image",
    render: (
      <img
        className="bg-gray-300 object-cover"
        width={50}
        height={50}
        src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        alt="img-placeholder"
      />
    ),
  },
];

const Admin = () => {
  const { setComponentsData, componentsData } = useContext(ComponentContext);
  const [removedComponent, setRemovedComponent] = useState<ComponentRender[]>(
    []
  );
  const navigate = useNavigate();
  const form = useForm<{ components: ComponentRender[] }>();
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "components",
  });
  const { data: dataImport, onHandleImport } = useImportFile<ComponentRender>();

  const onUndo = () => {
    const { components } = form.getValues();
    const componentsLength = components.length;
    const lastElm = components[componentsLength - 1];
    if (componentsLength > 0) {
      remove(componentsLength - 1);
      setRemovedComponent((prev) => [...prev, lastElm]);
    }
  };

  const onRedo = () => {
    const componentsRemovedLength = removedComponent.length;
    const lastElmRemoved = removedComponent[componentsRemovedLength - 1];
    if (componentsRemovedLength > 0) {
      append(lastElmRemoved);
      setRemovedComponent((prev) => {
        const temp = [...prev];
        temp.pop();
        return temp;
      });
    }
  };

  const onSave = () => {
    const { components } = form.getValues();
    setComponentsData(components);
    alert("Successfully!");
  };

  const onExport = () => {
    const { components } = form.getValues();
    exportFile(components, "content-ads.json", "application/json");
  };

  useEffect(() => {
    form.reset({ components: componentsData });
  }, [componentsData]);

  useEffect(() => {
    if (dataImport.length > 0) {
      form.reset({ components: dataImport });
    }
  }, [dataImport]);

  return (
    <div>
      <h1>Admin Page</h1>
      <DndProvider backend={HTML5Backend}>
        <div className="grid grid-cols-12 mt-4 h-full min-h-[85vh]">
          <div className="col-span-2 border border-black border-solid p-2 h-full">
            <div className="flex flex-col gap-4">
              {COMPONENTS.map((c) => (
                <DragComponent
                  key={c.type}
                  type={c.type}
                  addComponent={(data) => {
                    append(data);
                    setRemovedComponent([]);
                  }}
                >
                  {c.render}
                </DragComponent>
              ))}
            </div>
          </div>
          <div className="col-span-10 border border-l-0 border-black border-solid p-2 h-full">
            <div className="flex w-full justify-center gap-2 mb-4">
              <button onClick={onSave}>Save</button>
              <button onClick={onUndo}>Undo</button>
              <button onClick={onRedo}>Redo</button>
              <button onClick={onExport}>Export</button>
              <button onClick={onHandleImport}>Import</button>
              <button onClick={() => navigate("/consumer")}>Consumer</button>
            </div>
            <FormProvider {...form}>
              <ViewRender fields={fields} />
            </FormProvider>
          </div>
        </div>
      </DndProvider>
    </div>
  );
};

export default Admin;
