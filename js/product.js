const id = new URLSearchParams(location.search).get("id");
const p = getProductById(id);
const box = document.getElementById("detail");

if (!p) {
  box.innerHTML = "<p>Product not found.</p>";
} else {
  box.innerHTML = `
    <div>${pictureHtml(p, true)}</div>
    <div class="detail-info">
      <h1>${p.title}</h1>
      <div class="price-row">
        <span class="price" style="font-size:30px">₹${p.price}</span>
        <span class="mrp">₹${p.mrp}</span>
        <span class="off">${discount(p)}% OFF</span>
      </div>
      <p class="meta">${p.category} · Condition: ${p.condition}</p>
      <div class="info-box">${p.desc || "No description given."}</div>
      <div class="info-box">
        <b>Seller:</b> ${p.seller}<br>
        <b>College:</b> ${p.college || "-"}<br>
        <b>Place:</b> 📍 ${p.place}<br>
        <b>Phone:</b> ${p.phone}
      </div>
      <div class="btn-row">
        <button class="btn" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
        <button class="btn btn-yellow" onclick="addToCart(${p.id}); location.href='cart.html'">⚡ Buy Now</button>
        <button class="btn btn-outline" onclick="toggleWish(${p.id})">🤍 Wishlist</button>
      </div>      <br>
      <a class="btn btn-outline" href="mailto:${p.email}">✉️ Email Seller</a>
      <a class="btn btn-outline" href="tel:${p.phone}">📞 Call Seller</a>
    </div>`;

  document.getElementById("related").innerHTML = getProducts()
    .filter(x => x.category === p.category && x.id !== p.id)
    .slice(0, 4).map(cardHtml).join("") || "<p>No similar items yet.</p>";
}
