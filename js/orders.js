const orders = getOrders();
const box = document.getElementById("orderList");

if (orders.length === 0) {
  box.innerHTML = "<p>No orders yet. <a href='explore.html' style='color:#0b8a7a'><b>Start shopping</b></a></p>";
} else {
  box.innerHTML = orders.map(o => `
    <div class="order-box">
      <p><b>Order ID:</b> ${o.orderId} · ${o.date}
         <span class="status" style="float:right">${o.status}</span></p>
      <hr style="margin:8px 0">
      ${o.items.map(i => `<p>${i.title} × ${i.qty} — ₹${i.price * i.qty}</p>`).join("")}
      <hr style="margin:8px 0">
      <p><b>Total: ₹${o.total}</b></p>
      <p class="meta">Meet at: ${o.address.place} · ${o.address.pay}</p>
    </div>`).join("");
}
