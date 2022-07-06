import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { WeatherProvider } from "./context";
import { Home, Weather } from "./pages";
import { darkTheme } from "./themes";

function App() {
  return (
    <BrowserRouter>
      <NextUIProvider theme={darkTheme}>
        <WeatherProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":city" element={<Weather />} />
          </Routes>
        </WeatherProvider>
      </NextUIProvider>
    </BrowserRouter>
  );
}

export default App;
