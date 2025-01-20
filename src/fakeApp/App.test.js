import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello world", () => {
    render(<App />);
    const helloWorldEl = screen.getByText(/hello world/i);
    expect(helloWorldEl).toBeInTheDocument();
});
