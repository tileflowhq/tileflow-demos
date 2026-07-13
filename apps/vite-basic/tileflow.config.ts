import { defineTileflow, labels, osm, poi } from "@tileflow/core";

export default defineTileflow({
  themes: {
    light: {
      colors: {
        background: "#f8f7f7",
        land: "#f4f2ed",
        water: "#8ed6e8",
        park: "#9febbcff",
        building: "#faf9ecff",
        road: "#ffffff",
        roadMajor: "#e7e4e0ff",
        roadCasing: "#afaaa3ff",
        boundary: "#c9ced3",
        text: "#566371",
        textMuted: "#8a98a8",
        textHalo: "#ffffff",
      },
      typography: {
        font: "Inter",
      },
      modules: {
        labels: {
          road: "#7a8794",
          water: "#4b8fa8",
        },
        poi: {
          food: "#d97706",
          culture: "#7c3aed",
          transit: "#2563eb",
        },
      },
    },
  },
  maps: {
    madrid: {
      basemap: osm(),
      icons: "./assets/map-icons",
      theme: "light",
      modules: [
        labels({
          roads: "minimal",
          water: "balanced",
        }),
        poi({
          preset: "balanced",
          categories: ["food", "coffee", "culture", "transit", "shopping"],
          icons: "essential",
          minZoom: 14,
        }),
      ],
      view: {
        center: [-3.7038, 40.4168],
        zoom: 15,
      },
    },
  },
});
