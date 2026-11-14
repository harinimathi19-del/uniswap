const params = new URLSearchParams(location.search);
const q = (params.get("q") || "").toLowerCase();

const fCat = document.getElementById("fCat");
const fCond = document.getElementById("fCond");
const fMax = document.getElementById("fMax");
const fSort = document.getElementById("fSort");

fCat.innerHTML = "<option>All</option>" + CATEGORIES.map(c => `<option>${c.name}</option>`).join("");
if (params.get("cat")) fCat.value = params.get("cat");

function render() {
  let list = getProducts().filter(p =>
    (fCat.value === "All" || p.category === fCat.value) &&
    (fCond.value === "All" || p.condition === fCond.value) &&
    (!fMax.value || p.price <= Number(fMax.value)) &&
    (p.title.toLowerCase().includes(q) || (p.college || "").toLowerCase().includes(q))
  );

  if (fSort.value === "low") list.sort((a, b) => a.price - b.price);
  if (fSort.value === "high") list.sort((a, b) => b.price - a.price);

  document.getElementById("countText").textContent = list.length + " items found";
  document.getElementById("grid").innerHTML =
    list.length ? list.map(cardHtml).join("") : "<p>No items match your filters.</p>";
}

[fCat, fCond, fMax, fSort].forEach(el => el.addEventListener("input", render));
render();
