import { Outlet } from "react-router-dom";
import { Header } from "./pages/components/header";

function App() {
  return (
    <>
      {/* <Header /> */}

      <div className="max-w-5xl mx-auto">
        {" "}
        <Outlet />
      </div>
    </>
  );
}

export default App;
