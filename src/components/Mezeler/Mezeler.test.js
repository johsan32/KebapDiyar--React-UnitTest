import { render, screen } from "@testing-library/react";
import Mezeler from ".";
import userEvent from "@testing-library/user-event";

test("Meze Ekleme ve Çıakrma işlemin toplam fiyata olan etkisi", async () => {
  render(<Mezeler />);
  const user = userEvent.setup();

  const total = screen.getByRole("heading", {
    name: /Meze Tabağı Ücreti :/i,
  });

  const atomCheck = await screen.findByRole("checkbox", {
    name: /Atom/i,
  });

  await user.click(atomCheck);

  expect(total).toHaveTextContent("90");

  const biberboraniCheck = await screen.findByRole("checkbox", {
    name: /Biberborani/i,
  });
  await user.click(biberboraniCheck);

  expect(total).toHaveTextContent("180");

  await user.click(atomCheck);
  expect(total).toHaveTextContent("90");

  await user.click(biberboraniCheck);
  expect(total).toHaveTextContent("0");
});
