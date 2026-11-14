document.getElementById("catRow").innerHTML = CATEGORIES.map(c => `
  <a class="cat-box" style="background:${c.bg}" href="explore.html?cat=${encodeURIComponent(c.name)}">
    <span class="ci">${c.icon}</span>${c.name}
  </a>`).join("");

document.getElementById("featured").innerHTML =
  getProducts().slice(0, 8).map(cardHtml).join("");
