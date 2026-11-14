function artFor(p) {
  const t = (p.title || "").toLowerCase();
  const colors = ["#1e5aa8", "#c0392b", "#1b7f5c", "#7b3fa0", "#d98a1c"];
  const col = colors[(p.title || "").length % colors.length];

  const bg = `<defs><linearGradient id="bgA" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f6f2ea"/><stop offset="1" stop-color="#d8d1c4"/></linearGradient></defs>
    <rect width="200" height="160" fill="url(#bgA)"/>
    <ellipse cx="100" cy="142" rx="64" ry="8" fill="rgba(0,0,0,.2)"/>`;

  const book = `
    <rect x="62" y="22" width="80" height="112" rx="3" fill="${col}"/>
    <rect x="62" y="22" width="9" height="112" rx="3" fill="rgba(0,0,0,.3)"/>
    <rect x="71" y="22" width="3" height="112" fill="rgba(255,255,255,.18)"/>
    <rect x="142" y="26" width="5" height="104" fill="#f7f3e8"/>
    <line x1="144" y1="34" x2="144" y2="126" stroke="#ddd5c2" stroke-width="1"/>
    <rect x="80" y="40" width="52" height="8" rx="2" fill="rgba(255,255,255,.88)"/>
    <rect x="80" y="54" width="36" height="5" rx="2" fill="rgba(255,255,255,.55)"/>
    <circle cx="106" cy="98" r="15" fill="rgba(255,255,255,.2)"/>
    <circle cx="106" cy="98" r="8" fill="rgba(255,255,255,.25)"/>`;

  let buttons = "";
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 4; c++) {
      const f = r === 0 ? "#e67e22" : (c === 3 ? "#4a90d9" : "#555d68");
      buttons += `<rect x="${70 + c * 16}" y="${54 + r * 16}" width="13" height="11" rx="3" fill="${f}"/>`;
    }
  }
  const calculator = `
    <rect x="64" y="14" width="72" height="124" rx="9" fill="#2b2f36"/>
    <rect x="64" y="14" width="72" height="124" rx="9" fill="none" stroke="rgba(255,255,255,.15)"/>
    <rect x="70" y="21" width="60" height="24" rx="3" fill="#b9d6a8"/>
    <text x="126" y="39" font-size="14" text-anchor="end" font-family="monospace" fill="#2d4a22">3.14159</text>
    ${buttons}`;

  const coat = `
    <path d="M72 30 L90 22 L100 46 L110 22 L128 30 L158 52 L152 118 L136 118 L134 64 L134 138 L66 138 L66 64 L64 118 L48 118 L42 52 Z"
      fill="#fbfbfb" stroke="#c9ced4" stroke-width="2"/>
    <path d="M90 22 L100 46 L110 22 L100 30 Z" fill="#e4e8ec" stroke="#c9ced4"/>
    <line x1="100" y1="46" x2="100" y2="138" stroke="#d3d8de" stroke-width="2"/>
    <rect x="72" y="92" width="22" height="22" rx="2" fill="none" stroke="#c9ced4" stroke-width="2"/>
    <rect x="106" y="92" width="22" height="22" rx="2" fill="none" stroke="#c9ced4" stroke-width="2"/>
    <circle cx="96" cy="64" r="2.5" fill="#9aa3ad"/><circle cx="96" cy="80" r="2.5" fill="#9aa3ad"/>
    <circle cx="96" cy="96" r="2.5" fill="#9aa3ad"/><circle cx="96" cy="112" r="2.5" fill="#9aa3ad"/>`;

  const drawing = `
    <polygon points="40,134 40,36 128,134" fill="rgba(70,160,225,.45)" stroke="#2a79b5" stroke-width="2"/>
    <polygon points="54,122 54,66 104,122" fill="rgba(255,255,255,.55)" stroke="#2a79b5"/>
    <g transform="rotate(-18 130 90)">
      <rect x="84" y="82" width="104" height="18" rx="2" fill="#f0c14b" stroke="#c99a1c"/>
      <line x1="94" y1="82" x2="94" y2="90" stroke="#7a5d0c"/><line x1="104" y1="82" x2="104" y2="90" stroke="#7a5d0c"/>
      <line x1="114" y1="82" x2="114" y2="90" stroke="#7a5d0c"/><line x1="124" y1="82" x2="124" y2="90" stroke="#7a5d0c"/>
      <line x1="134" y1="82" x2="134" y2="90" stroke="#7a5d0c"/><line x1="144" y1="82" x2="144" y2="90" stroke="#7a5d0c"/>
      <line x1="154" y1="82" x2="154" y2="90" stroke="#7a5d0c"/><line x1="164" y1="82" x2="164" y2="90" stroke="#7a5d0c"/>
    </g>
    <rect x="110" y="120" width="72" height="9" rx="4" fill="#e74c3c" transform="rotate(-8 110 120)"/>`;

  const lamp = `
    <rect x="68" y="128" width="54" height="9" rx="4" fill="#2f3237"/>
    <polyline points="95,128 78,84 120,54" fill="none" stroke="#555a61" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="78" cy="84" r="4" fill="#333"/>
    <polygon points="112,86 150,128 90,128" fill="rgba(255,226,120,.28)"/>
    <polygon points="104,44 148,62 132,84 96,64" fill="${col}"/>
    <ellipse cx="114" cy="74" rx="14" ry="5" fill="#ffe27a" transform="rotate(25 114 74)"/>`;

  let pins = "";
  for (let i = 0; i < 10; i++) {
    pins += `<rect x="${58 + i * 8}" y="44" width="6" height="6" fill="#111"/>
             <rect x="${58 + i * 8}" y="114" width="6" height="6" fill="#111"/>`;
  }
  const arduino = `
    <rect x="40" y="40" width="120" height="84" rx="5" fill="#00838f"/>
    <rect x="28" y="56" width="28" height="26" fill="#b8bcc2" stroke="#868c94"/>
    <rect x="28" y="92" width="22" height="20" fill="#222"/>
    <rect x="86" y="68" width="48" height="16" fill="#1a1a1a"/>
    <circle cx="146" cy="58" r="6" fill="#c0392b"/>
    <circle cx="70" cy="96" r="4" fill="#ffd54a"/>
    <text x="96" y="104" font-size="12" font-weight="bold" fill="#fff" font-family="Arial">UNO</text>
    ${pins}`;

  const bag = `
    <rect x="56" y="30" width="88" height="104" rx="22" fill="${col}"/>
    <rect x="70" y="84" width="60" height="38" rx="8" fill="rgba(0,0,0,.2)"/>
    <path d="M80 30 Q100 6 120 30" fill="none" stroke="#333" stroke-width="6"/>
    <line x1="72" y1="62" x2="128" y2="62" stroke="rgba(255,255,255,.5)" stroke-width="3"/>`;

  let body;
  if (t.includes("calculator")) body = calculator;
  else if (t.includes("arduino")) body = arduino;
  else if (t.includes("coat")) body = coat;
  else if (t.includes("drawing")) body = drawing;
  else if (t.includes("lamp")) body = lamp;
  else if (p.category === "Books" || t.includes("book") || t.includes("notes")) body = book;
  else if (p.category === "Electronics") body = calculator;
  else if (p.category === "Lab Items") body = coat;
  else if (p.category === "Stationery") body = drawing;
  else if (p.category === "Hostel") body = lamp;
  else body = bag;

  return `<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${bg}${body}</svg>`;
}const CATEGORIES = [
  { name: "Books", icon: "📚", bg: "#ffe8b8" },
  { name: "Electronics", icon: "🔌", bg: "#c9f2ec" },
  { name: "Stationery", icon: "✏️", bg: "#ffd6de" },
  { name: "Lab Items", icon: "🥼", bg: "#e3dcff" },
  { name: "Hostel", icon: "🛏️", bg: "#d6f0ff" },
  { name: "Other", icon: "🎒", bg: "#ffe0cc" }
];

function catInfo(name) {
  return CATEGORIES.find(c => c.name === name) || CATEGORIES[5];
}

const sampleProducts = [
  { id: 1, title: "Engineering Mathematics Book", price: 150, mrp: 450, category: "Books", condition: "Good", place: "Erode", college: "Erode Engineering College", seller: "Arun", phone: "9876543210", email: "arun@college.edu", image: "images/maths-book.jpg", desc: "Semester 1 and 2 maths book. Few pencil marks, no torn pages." },
  { id: 2, title: "Casio Scientific Calculator", price: 450, mrp: 950, category: "Electronics", condition: "Like New", place: "Salem", college: "Salem Tech College", seller: "Priya", phone: "9876500001", email: "priya@college.edu", image: "images/calculator.jpg", desc: "fx-991 calculator, works perfectly, cover included." },
  { id: 3, title: "Lab Coat (Size M)", price: 120, mrp: 350, category: "Lab Items", condition: "Good", place: "Coimbatore", college: "CIT Coimbatore", seller: "Karthik", phone: "9876500002", email: "karthik@college.edu", image: "images/lab-coat.jpg", desc: "White lab coat, washed and clean." },
  { id: 4, title: "Engineering Drawing Kit", price: 200, mrp: 600, category: "Stationery", condition: "Good", place: "Erode", college: "Erode Engineering College", seller: "Divya", phone: "9876500003", email: "divya@college.edu", image: "images/drawing-kit.jpg", desc: "Drafter, set squares and compass, all in one box." },
  { id: 5, title: "Data Structures in Java Book", price: 180, mrp: 500, category: "Books", condition: "Like New", place: "Chennai", college: "Anna University", seller: "Mohan", phone: "9876500004", email: "mohan@college.edu", image: "images/java-book.jpg", desc: "Latest edition, only used for one semester." },
  { id: 6, title: "Study Table Lamp", price: 250, mrp: 700, category: "Hostel", condition: "Good", place: "Erode", college: "Kongu Engineering College", seller: "Sneha", phone: "9876500005", email: "sneha@college.edu", image: "images/lamp.jpg", desc: "LED lamp with adjustable neck. Good for hostel rooms." },
  { id: 7, title: "Arduino Uno Starter Kit", price: 600, mrp: 1500, category: "Electronics", condition: "Like New", place: "Madurai", college: "Thiagarajar College", seller: "Vignesh", phone: "9876500006", email: "vignesh@college.edu", image: "images/arduino.jpg", desc: "Board, breadboard, sensors and jumper wires." },
  { id: 8, title: "Operating Systems Notes + Book", price: 100, mrp: 400, category: "Books", condition: "Fair", place: "Salem", college: "Salem Tech College", seller: "Lakshmi", phone: "9876500007", email: "lakshmi@college.edu", image: "images/os-book.jpg", desc: "Book with handwritten notes by a topper." }
];

/* reset old test data once */
if (localStorage.getItem("dataVersion") !== "2") {
  localStorage.setItem("products", JSON.stringify(sampleProducts));
  localStorage.setItem("dataVersion", "2");
}

/* helpers */
function read(key, fallback) { return JSON.parse(localStorage.getItem(key)) || fallback; }
function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

/* products */
function getProducts() { return read("products", []); }
function getProductById(id) { return getProducts().find(p => p.id == id); }
function saveProduct(p) {
  const list = getProducts();
  p.id = Date.now();
  list.unshift(p);
  write("products", list);
}
function discount(p) { return Math.round(((p.mrp - p.price) / p.mrp) * 100); }

/* user */
function getUser() { return read("user", null); }
function setUser(u) { write("user", u); }
function logout() { localStorage.removeItem("user"); location.href = "index.html"; }

/* cart */
function getCart() { return read("cart", []); }
function addToCart(id) {
  const cart = getCart();
  const item = cart.find(c => c.id == id);
  if (item) { item.qty++; } else { cart.push({ id: Number(id), qty: 1 }); }
  write("cart", cart);
  refreshCartBadge();
  showToast("Added to cart 🛒");
}
function changeQty(id, change) {
  let cart = getCart();
  const item = cart.find(c => c.id == id);
  item.qty += change;
  if (item.qty <= 0) cart = cart.filter(c => c.id != id);
  write("cart", cart);
}
function removeFromCart(id) { write("cart", getCart().filter(c => c.id != id)); }
function clearCart() { write("cart", []); }

/* wishlist */
function getWishlist() { return read("wishlist", []); }
function toggleWish(id) {
  let list = getWishlist();
  if (list.includes(Number(id))) {
    list = list.filter(x => x != id);
    showToast("Removed from wishlist");
  } else {
    list.push(Number(id));
    showToast("Added to wishlist ❤️");
  }
  write("wishlist", list);
}

/* orders */
function getOrders() { return read("orders", []); }
function placeOrder(address) {
  const items = getCart().map(c => ({ ...getProductById(c.id), qty: c.qty }));
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const orders = getOrders();
  orders.unshift({ orderId: "UNI" + Date.now(), date: new Date().toLocaleDateString(), items, total, address, status: "Confirmed" });
  write("orders", orders);
  clearCart();
}

/* picture: real photo if it loads, otherwise colourful emoji tile */
function pictureHtml(p, big) {
  return `<div class="pic ${big ? "big" : ""}">
            ${artFor(p)}
            ${p.image ? `<img src="${p.image}" alt="${p.title}" onerror="this.remove()">` : ""}
          </div>`;
}

/* product card used on Home and Explore */
function cardHtml(p) {
  const liked = getWishlist().includes(p.id) ? "❤️" : "🤍";
  return `<div class="card">
    <span class="tag">${discount(p)}% OFF</span>
    <button class="heart" onclick="toggleWish(${p.id}); this.textContent = this.textContent === '❤️' ? '🤍' : '❤️'">${liked}</button>
    <a href="product.html?id=${p.id}">
      ${pictureHtml(p)}
      <div class="card-body">
        <h3>${p.title}</h3>
        <div class="price-row"><span class="price">₹${p.price}</span><span class="mrp">₹${p.mrp}</span></div>
        <div class="meta">${p.condition} · 📍 ${p.place}</div>
      </div>
    </a>
  </div>`;
}

/* small popup message */
function showToast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1800);
}
