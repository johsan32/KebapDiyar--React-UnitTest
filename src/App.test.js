import { render, screen } from "@testing-library/react";
import App from "./App";

test(" header başlıklar ekrana basılır", () => {
  render(<App />);

  const head = screen.getByText(/Kebap Diyarı/i);
  const nav = screen.getByText(/Unit Test/i);
  expect(head).toBeInTheDocument();
  expect(nav).toBeInTheDocument();
});
