function loadNavbar() {
  const user = getUser();
  document.getElementById("navbar").innerHTML = `
    <div class="navbar"><div class="nav-inner">
      <a href="index.html" class="logo">Uni<span>Swap</span></a>
      <form class="nav-search" onsubmit="event.preventDefault(); location.href='explore.html?q=' + encodeURIComponent(this.q.value)">
        <input name="q" placeholder="Search books, calculators, lab coats...">
        <button>🔍</button>
      </form>
      <div class="nav-links">
        <a href="explore.html">Explore</a>
        <a href="sell.html">Sell</a>
        <a href="orders.html">Orders</a>
        <a href="cart.html">🛒<span class="badge" id="cartCount">0</span></a>
        ${user ? `<a href="profile.html">👤 ${user.name}</a>` : `<a href="login.html">Login</a>`}
      </div>
    </div></div>`;
  refreshCartBadge();
}

function refreshCartBadge() {
  const el = document.getElementById("cartCount");
  if (el) el.textContent = getCart().reduce((s, c) => s + c.qty, 0);
}

function loadFooter() {
  document.getElementById("footer").innerHTML = `
    <div class="footer"><div class="footer-inner">
      <div><h4>UniSwap</h4><p>Pass your used books and items to the next student at a low price.</p></div>
      <div><h4>Quick Links</h4><a href="explore.html">Explore</a><a href="sell.html">Sell an item</a><a href="orders.html">My orders</a></div>
      <div><h4>Help</h4><a href="about.html">About us</a><a href="contact.html">Contact and FAQ</a></div>
    </div><p style="text-align:center;margin-top:20px">Made by a student, for students 💚</p></div>`;
}

loadNavbar();
loadFooter();
