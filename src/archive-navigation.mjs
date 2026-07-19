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
    ],
  },
  {
    label: "Ecology",
    items: [
      {
        label: "複雑さを手放さない学問\n環境人文学と南方熊楠の萃点",
        link: "/archive/environmental-humanities-minakata-suiten/",
      },
    ],
  },
  {
    label: "Reading",
    items: [
      {
        label: "人工美学\n概念編",
        link: "/archive/artificial-aesthetics-overview/",
      },
      {
        label: "人工美学\n深掘り編",
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
