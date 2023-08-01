// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { useTheme } from "@mui/material/styles";
// import { useThemeContext } from "./ThemeContext";
import { Box } from "@mui/material";
import AuthPage from "./pages/authPage/AuthPage";

function App() {
  //const theme = useTheme(); // Get the theme object from Material UI

  //const { themeMode, toggleTheme } = useThemeContext(); // Get the theme mode and toggleTheme function from the context

  // const handleThemeToggle = () => {
  //   setCount((count) => count + 1);
  //   toggleTheme(); // Call the toggleTheme function to switch between light and dark themes
  // };

  //const [count, setCount] = useState(0);

  return (
    <Box
    sx={{
      height: "100vh",
    }}
  >
    <>
      <AuthPage/>
      {/* <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </Box>
      <h1>Vite + React</h1>
      <div className="card">
        <Button color="primary" onClick={handleThemeToggle}>
        count is now at {count}, theme is at {themeMode}
        </Button>
        <p>
        Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        </div>
        <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
      </Box>
  );
}

export default App;
