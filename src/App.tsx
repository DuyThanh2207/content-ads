import { RouterProvider } from "react-router-dom";
import ComponentProvider from "./contexts/ComponentProvider";
import { router } from "./routers";

function App() {
  return (
    <ComponentProvider>
      <RouterProvider router={router} />
    </ComponentProvider>
  );
}

export default App;
