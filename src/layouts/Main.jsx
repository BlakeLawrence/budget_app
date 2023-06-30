// react router dom imports
import { Outlet, useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helpers";

// loader
export function MainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div>
      <h1>Main</h1>
      {/*     children passed down are displayed in outlet */}
      <Outlet />
      <h1>{userName}</h1>
      <h1>Main</h1>
    </div>
  );
};

export default Main;
