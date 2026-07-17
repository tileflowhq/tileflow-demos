import { defineTileflow, labels, osm, roads } from "@tileflow/core";

export default defineTileflow({
  themes: {
    light: {
      colors: {
        background: "#ebebeb",
        land: "#ebebeb",
        water: "#82c8ed",
        park: "#e8ebe8",
        building: "#e7e7e7",
        road: "#ffffff",
        roadMajor: "#ffffff",
        roadCasing: "#e3e3e3",
        boundary: "#d4d4d4",
        text: "#5f5f5f",
        textMuted: "#8a8a8a",
        textHalo: "#ffffff",
      },
      modules: {
        labels: {
          road: "#777777",
          water: "#337fa5",
        },
      },
    },
  },
  maps: {
    madrid: {
      basemap: osm(),
      theme: "light",
      poi: "none",
      modules: [
        labels({
          preset: "essential",
          places: "none",
          roads: "minimal",
          water: "minimal",
        }),
        roads({
          detail: "all", // "none" | "highways" | "major" | "streets" | "all"
          hierarchy: "clear", // "subtle" | "clear" | "strong"
          weight: "bold", // "thin" | "regular" | "bold"
          outline: "strong", // "none" | "subtle" | "strong"
          extras: {
            // Optional; each extra defaults to false
            paths: false, // true | false
            rail: false, // true | false
            ferry: false, // true | false
          },
        }),
      ],
      view: {
        center: [-3.7038, 40.4168],
        zoom: 15,
      },
    },
  },
});
