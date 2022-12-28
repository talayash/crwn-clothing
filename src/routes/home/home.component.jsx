import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

// Home Component
const Home = () => {
  return (
    <div>
        <Outlet />
        <Directory />
    </div> 
  );
}

export default Home;
