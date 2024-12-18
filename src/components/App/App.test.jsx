import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";

describe("App component", () => {
  it("App renders", () => {
    render(<App />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText('Find course:')).toBeInTheDocument();
  });

  it("typing in Searchbox works", async () => {
    render(<App/>);

    expect(screen.queryByDisplayValue(/React/)).toBeNull()
    await userEvent.type(screen.getByRole('textbox'), 'React')

    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
  })

  it('search filter is working', async () => {
    render(<App/>);
    expect(screen.getByText(/Vue/)).toBeInTheDocument();
    expect(screen.getByText(/JS/)).toBeInTheDocument();

    await userEvent.type(screen.getByRole('textbox'), 'J')

    expect(screen.queryByText(/Vue/)).toBeNull();
    expect(screen.getByText(/JS/)).toBeInTheDocument();
  })
});
