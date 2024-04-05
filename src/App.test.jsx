import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "./App";
import { AppContextProvider } from "./context/appContext";

describe("App", () => {
  it("Should render app", () => {
    render(
      <AppContextProvider>
        <App />
      </AppContextProvider>
    )    
  })
  
})