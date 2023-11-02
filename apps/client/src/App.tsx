import "@mantine/core/styles.css";
import "./App.scss";

import { MantineProvider } from "@mantine/core";
import { Router } from "./Router";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme} withCssVariables>
      <Router />
    </MantineProvider>
  );
}
