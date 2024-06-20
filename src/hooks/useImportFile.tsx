import { useState } from "react";

function useImportFile<T>() {
  const [data, setListData] = useState<T[]>([]);

  const onImport = async (file?: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        if (event.target?.result) {
          setListData(JSON.parse(event.target.result as string));
        }
      };
      reader.readAsText(file);
    }
  };

  const onHandleImport = () => {
    const input: HTMLInputElement = document.createElement("input");
    input.style.display = "none";
    input.type = "file";
    input.onchange = function (this: GlobalEventHandlers, event: any) {
      onImport(event.target?.files?.[0]);
    };
    document.body.appendChild(input);
    input.click();
  };

  return {
    onHandleImport,
    data,
  };
}

export default useImportFile;
