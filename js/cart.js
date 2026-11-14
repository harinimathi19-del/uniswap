function renderCart() {
  const items = getCart()
    .map(c => ({ ...getProductById(c.id), qty: c.qty }))
    .filter(i => i.id);

  const listBox = document.getElementById("cartItems");
  const sumBox = document.getElementById("summary");

  if (items.length === 0) {
    listBox.innerHTML = "<p>Your cart is empty. <a href='explore.html' style='color:#0b8a7a'><b>Go shopping</b></a></p>";
    sumBox.innerHTML = "";
    refreshCartBadge();
    return;
  }

  listBox.innerHTML = items.map(i => `
    <div class="cart-item">
      ${pictureHtml(i)}
      <div class="cart-info">
        <h3>${i.title}</h3>
        <p class="meta">${i.condition} · ${i.college || i.place}</p>
        <p class="price">₹${i.price}</p>
      </div>
      <div class="qty">
        <button onclick="changeQty(${i.id}, -1); renderCart()">-</button>
        <b> ${i.qty} </b>
        <button onclick="changeQty(${i.id}, 1); renderCart()">+</button>
      </div>
      <button class="btn btn-outline" onclick="removeFromCart(${i.id}); renderCart()">🗑</button>
    </div>`).join("");

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  sumBox.innerHTML = `
    <div class="summary">
      <h3>Order Summary</h3>
      <p><span>Items total</span><span>₹${total}</span></p>
      <p><span>Delivery</span><span>Free (meet on campus)</span></p>
      <hr>
      <p><b>Total</b><b>₹${total}</b></p>
      <br>
      <a href="checkout.html" class="btn btn-full">Proceed to Checkout</a>
    </div>`;
  refreshCartBadge();
}

renderCart();
