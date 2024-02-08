(function () {
  const weekNames = [
    "söndag",
    "måndag",
    "tisdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lördag",
  ];

  const getNameOf = (n) => weekNames[n];
  const today = new Date().getDay();
  const pageTitle = document.getElementById("day-name");

  pageTitle.innerHTML = getNameOf((today + 3) % 7);

  [2, 3, 4, 5, 6, 7].map((n) => {
    const element = document.getElementById(`x${n}`);

    const lillDay = (today + 3 * n) % 7;

    if (lillDay === 6) {
      element.style.color = "#000000";
    }

    element.innerHTML =
      Array.from({ length: n }, (_, i) => "lill-").join("") +
      getNameOf(lillDay);
  });
})();
