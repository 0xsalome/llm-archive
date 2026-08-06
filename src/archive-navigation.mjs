export const archiveSidebar = [
  {
    label: "Start Here",
    items: ["archive/first-note"],
  },
  {
    label: "Technology",
    items: [
      {
        label: "音は身体をどう震わせるか\n音波・脳波・倍音をめぐる観察",
        link: "/archive/sound-body-brain-waves/",
      },
      "archive/everyday-uncanny-technologies-japan",
      {
        label: "Massive Attackのフジロック演出\n何を根拠に信じるか",
        link: "/archive/massive-attack-fuji-what-to-believe/",
      },
    ],
  },
  {
    label: "Ecology",
    items: [
      {
        label: "複雑さを手放さない学問\n環境人文学と南方熊楠の萃点",
        link: "/archive/environmental-humanities-minakata-suiten/",
      },
      {
        label: "日本各地の地質と焼き物の変遷\n土が様式を、移動と市場が産地をつくる",
        link: "/archive/japan-geology-and-ceramics-history/",
      },
      {
        label: "港が器の名を運んだ\n地質と焼き物の佐賀編",
        link: "/archive/saga-geology-and-ceramics/",
      },
    ],
  },
  {
    label: "Reading",
    items: [
      {
        label: "人工美学 概念編",
        link: "/archive/artificial-aesthetics-overview/",
      },
      {
        label: "人工美学 深掘り編",
        link: "/archive/artificial-aesthetics-compression-deep-dive/",
      },
    ],
  },
  {
    label: "References",
    items: ["archive/github-open-source-license-lineage"],
  },
];

const itemToEntryId = (item) => {
  if (typeof item === "string") return item;
  return item.link.replace(/^\/+/, "").replace(/\/$/, "");
};

export const archiveCategoryItems = archiveSidebar.map((category) => ({
  label: category.label,
  items: category.items.map(itemToEntryId),
}));
