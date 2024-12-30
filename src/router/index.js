import { ROUTER } from "../ultis/router";
import HomePage from "../page/users/homepage";
import ProfilePage from "../page/users/profilepage";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "../page/users/layoutComponent/masterLayout";

const renderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTER.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTER.USER.PROFILE,
      component: <ProfilePage />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
