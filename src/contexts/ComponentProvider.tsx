import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { ComponentRender } from "../types/component-render";

type ComponentContextType = {
  componentsData: ComponentRender[];
  setComponentsData: Dispatch<SetStateAction<ComponentRender[]>>;
};

export const ComponentContext = createContext<ComponentContextType>({
  componentsData: [],
  setComponentsData: () => {},
});

function ComponentProvider({ children }: PropsWithChildren) {
  const [componentsData, setComponentsData] = useState<ComponentRender[]>([]);
  return (
    <ComponentContext.Provider value={{ componentsData, setComponentsData }}>
      {children}
    </ComponentContext.Provider>
  );
}

export default ComponentProvider;
