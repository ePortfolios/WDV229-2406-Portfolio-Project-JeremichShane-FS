import { Outlet } from "react-router-dom";
import { Footer, Header } from "../layout";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Root;
