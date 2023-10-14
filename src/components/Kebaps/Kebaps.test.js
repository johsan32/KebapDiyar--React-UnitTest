import { render, screen } from "@testing-library/react";
import Kebaps from ".";
import userEvent from "@testing-library/user-event";

test("API den gelen her bir çeşit için ekrana bir kart basılır ", async () => {
  render(<Kebaps />);
  const images = await screen.findAllByRole("img", { name: "çeşit" });

  expect(images).toHaveLength(4);
});

test("Çeşit Ekleme İşleminin toplam fiyata yansıması", async () => {
  render(<Kebaps />);

  const user = userEvent.setup();
  const total = screen.getByRole("heading", { name: /Kebap Menü Toplamı :/i });
  const buttons = await screen.findAllByRole("button", { name: "Ekle" });
  await user.click(buttons[0]);
  expect(total).toHaveTextContent("225");

  await user.dblClick(buttons[1]);
  expect(total).toHaveTextContent("675");
});

test("Çeşit sıfırlama işleminin toplama yansıması", async () => {
  render(<Kebaps />);

  const user = userEvent.setup();

  const total = screen.getByRole("heading", {
    name: /Kebap Menü Toplamı :/i,
  });

  const delButtons = await screen.findAllByRole("button", { name: "Kaldır" });
  const addButtons = await screen.findAllByRole("button", { name: "Ekle" });

  await user.click(addButtons[2]);
  await user.dblClick(addButtons[3]);
  expect(total).toHaveTextContent("675");

  await user.click(delButtons[2]);
  expect(total).toHaveTextContent("450");

  await user.click(delButtons[3]);
  expect(total).toHaveTextContent("0");
});
