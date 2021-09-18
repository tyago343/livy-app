import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { GnomeCard } from "./gnomecard";
import "@testing-library/jest-dom";
const props = {
  gnome: {
    id: 0,
    name: "Tobus Quickwhistle",
    thumbnail:
      "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
    age: 306,
    weight: 39.065952,
    height: 107.75835,
    hair_color: "Pink",
    professions: [
      "Metalworker",
      "Woodcarver",
      "Stonecarver",
      " Tinker",
      "Tailor",
      "Potter",
    ],
    friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
  },
  index: 1,
};
describe("Gnome Card Compoent", () => {
  test("Gnome card render gnome information", () => {
    render(
      <BrowserRouter>
        <GnomeCard {...props} />
      </BrowserRouter>
    );
    const { gnome } = props;
    expect(screen.getByText(gnome.name)).toBeInTheDocument();
    expect(screen.getByText(gnome.hair_color)).toBeInTheDocument();
  });
  test("Gnome card render error when gnome not was passed in props", () => {
    const { container } = render(
      <BrowserRouter>
        <GnomeCard />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchInlineSnapshot(
      `Something it's wrong with this one :(`
    );
  });
});
