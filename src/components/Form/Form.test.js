import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

test("Koşulların onaylanmasına göre buton aktfiliği", async () => {
  render(<Form />);

  const user = userEvent.setup();

  const orderBtn = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  expect(orderBtn).toBeDisabled();

  expect(checkBox).not.toBeChecked();

  await user.click(checkBox);
  expect(orderBtn).toBeEnabled();

  await user.click(checkBox);
  expect(orderBtn).toBeDisabled();
});

test("Onay butonu hover olduğun zaman bildirim çıkarma", async () => {
  render(<Form />);

  const user = userEvent.setup();

  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  await user.click(checkBox);

  fireEvent.mouseEnter(button);

  const popup = screen.getByText("Kısa sürede ", { exact: false });

  expect(popup).toBeVisible();

  fireEvent.mouseLeave(button);

  expect(popup).not.toBeVisible();
});
