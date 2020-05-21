const user = [
  {
    name: "Risyad Pangestu",
    nickname: "Risyad",
    instagram: "risyadpangestuu",
    facebook: "Risyad Pangestu",
    twitter: "risyadddp",
    linkedIn: "Risyad Pangestu",
  },
  {
    name: "Dimas Satria",
    nickname: "Tole",
    instagram: "24dim",
    facebook: "Dimas Satria",
    twitter: "risyadddp",
    linkedIn: "Dimas Satria",
  },
  {
    name: "Muhammad Luthfi A",
    nickname: "Hyung",
    instagram: "luthfi",
    facebook: "Muhammad Luthfiasnyah",
    twitter: "Luthfi Hyung",
    linkedIn: "Luthfiasnyuah",
  },
]

[
  {
    head: { vars: ["fishname"] },
    results: {
      bindings: [
        { fishname: { type: "literal", value: "Pufferfish" } },
        { fishname: { type: "literal", value: "Flounder" } },
        { fishname: { type: "literal", value: "Dorado" } },
      ],
    },
  }
];


module.exports = user;
