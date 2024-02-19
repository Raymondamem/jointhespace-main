import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import MainContext from "./contexts/MainContext";
import { Modal } from "./components/Modal";

function App() {
  return (
    <>
      <MainContext>
        <RouterProvider router={router}></RouterProvider>
        <Modal />
      </MainContext>
    </>
  );
}

export default App;
