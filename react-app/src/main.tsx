import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function main() {
  // TODO: App 컴포넌트를 render 해주세요.

  const container = document.getElementById("root") as HTMLElement;

  const root = createRoot(container);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

main();
