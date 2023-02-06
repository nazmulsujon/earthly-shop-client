import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";

function App() {
  return (
    <section className="max-w-[1400px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </section>
  );
}

export default App;
