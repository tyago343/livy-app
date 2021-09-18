import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { GnomeList } from "./gnomelist";
const props = {
  gnomes: [
    {
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
    {
      id: 1,
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
  ],
};
describe("Test for the list of gnomes", () => {
  test("Gnome list display an array of gnomes", async () => {
    render(
      <BrowserRouter>
        <GnomeList {...props} />
      </BrowserRouter>
    );
    const items = await screen.findAllByTestId("gnome-card");
    expect(items).toHaveLength(props.gnomes.length);
  });
  test("Paginator is in the screen and contains qty of pages", async () => {
    render(
      <BrowserRouter>
        <GnomeList {...props} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("paginator")).toMatchSnapshot(`
      <ol
        class="css-b58ksj-GnomeList"
        data-testid="paginator"
      >
        <li
          class="css-n1yxqf"
          id="1"
        >
          1
        </li>
      </ol>
    `);
  });
});
