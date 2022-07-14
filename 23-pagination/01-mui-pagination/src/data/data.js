export const PRODUCTS = [
  { id: "p1", title: "p1" },
  { id: "p2", title: "p2" },
  { id: "p3", title: "p3" },
  { id: "p4", title: "p4" },
  { id: "p5", title: "p5" },
  { id: "p6", title: "p6" },
  { id: "p7", title: "p7" },
  { id: "p8", title: "p8" },
  { id: "p9", title: "p9" },
  { id: "p10", title: "p10" },
  { id: "p11", title: "p11" },
  { id: "p12", title: "p12" },
  { id: "p13", title: "p13" },
  { id: "p14", title: "p14" },
  { id: "p15", title: "p15" },
  { id: "p16", title: "p16" },
  { id: "p17", title: "p17" },
  { id: "p18", title: "p18" },
  { id: "p19", title: "p19" },
  { id: "p20", title: "p20" },
  { id: "p21", title: "p21" },
];

export const getData = ({ skip, limit }) => {
  return new Promise((resolve, reject) => {
    const data = PRODUCTS.slice(skip, limit);

    resolve({
      data: data,
      count: PRODUCTS.length,
    });
  });
};
