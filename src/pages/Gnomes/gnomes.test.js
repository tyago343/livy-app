import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { GnomesProvider } from "../../context/gnomes.context";
import { GnomesPage } from "./gnomes";
describe("Test for the Gnomes page", () => {
  test("Gnomes page render the gnomes list", async () => {
    function Wrapper({ children }) {
      return (
        <BrowserRouter>
          <GnomesProvider>{children}</GnomesProvider>
        </BrowserRouter>
      );
    }
    render(<GnomesPage />, { wrapper: Wrapper });
    await waitForElementToBeRemoved(() => screen.getAllByLabelText(/loading/i));
    expect(screen.getByTestId("gnomelist")).toBeInTheDocument();
  });
});
