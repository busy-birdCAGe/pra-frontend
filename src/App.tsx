import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import AuthPage from "./pages/authPage/AuthPage";
import NavWrapper from "./pages/NavWrapper";
import RequestsPage from "./pages/requestsPage/RequestsPage";
import CommunityPage from "./pages/communityPage/CommunityPage";
import NotificationsPage from "./pages/notificationsPage/NotificationsPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import AccountInfo from "./pages/settingsPage/AccountInfo";
import HelpAndSupport from "./pages/settingsPage/HelpAndSupport";
import SettingsRoutes from "./utils/SettingsRoutes";
import SettingsPage from "./pages/settingsPage/SettingsPage";
import { Box } from "@mui/material";
import ToggleTheme from "./components/ToggleTheme";
import NewAuthPage from "./pages/authPage/NewAuthPage";
import { isLocalHost, isQA } from "./utils/Utils";

function App() {
  const router = createBrowserRouter([
    // {
    //   TODO: create an error page to catch all nonexistent routes
    //   path: "*",
    //   element: <ErrorPage />,
    // },
    {
      path: "/",
      element: <NewAuthPage />,
    },
    {
      //pathless route to nest routes
      element: <PrivateRoutes />,
      children: [
        {
          element: <NavWrapper />,
          children: [
            {
              index: true,
              path: "requests",
              element: <RequestsPage />,
            },
            {
              path: "community",
              element: <CommunityPage />,
            },
            {
              path: "notifications",
              element: <NotificationsPage />,
            },
          ],
        },
        {
          path: "settings",
          children: [
            {
              index: true,
              element: <SettingsPage />,
            },
            {
              element: <SettingsRoutes />,
              children: [
                {
                  path: "accountInfo",
                  element: <AccountInfo />,
                },
                {
                  path: "helpAndSupport",
                  element: <HelpAndSupport />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        // bgcolor: theme.palette.background.paper,
        bgcolor: "background.paper",
        minHeight: "100vh",
        padding: 0,
      }}
    >
      {(isLocalHost() || isQA()) && <ToggleTheme />}
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
