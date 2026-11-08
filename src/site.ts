// One place for the facts the pages share. Edit these, not the pages.
export const STUDIO = {
  name: "CoKo Entertainment",
  legalName: "CoKo Entertainment LLC",
  tagline: "A one-person studio using AI tools to bring game ideas to life.",
  email: "colekotecki@cokoentertainment.com",
};

export const GAME = {
  title: "Harness the Elements",
  slug: "harness-the-elements",
  pitch:
    "A roguelike deck-builder about raising a team of elemental creatures. Build a deck from their cards, grow their stats, and fight your way past three floor bosses.",
  status: "Coming soon to Steam",
  // Fill in once the Steam store page exists. Until then the page shows "Coming soon".
  steamAppId: "",
};

export const steamUrl = (id: string) => `https://store.steampowered.com/app/${id}/`;
