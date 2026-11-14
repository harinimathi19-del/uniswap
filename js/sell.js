if (!getUser()) {
  alert("Please login first");
  location.href = "login.html";
}

document.getElementById("category").innerHTML =
  CATEGORIES.map(c => `<option>${c.name}</option>`).join("");

function resizeImage(dataUrl, done) {
  const img = new Image();
  img.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = img.height * (400 / img.width);
    canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
    done(canvas.toDataURL("image/jpeg", 0.7));
  };
  img.src = dataUrl;
}

function save(imageData) {
  const mrp = Number(document.getElementById("mrp").value);
  const price = Number(document.getElementById("price").value);
  if (price >= mrp) {
    alert("Selling price must be less than the original price");
    return;
  }
  saveProduct({
    title: document.getElementById("title").value,
    category: document.getElementById("category").value,
    condition: document.getElementById("condition").value,
    mrp: mrp,
    price: price,
    college: document.getElementById("college").value,
    place: document.getElementById("place").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    desc: document.getElementById("desc").value,
    seller: getUser().name,
    image: imageData
  });
  alert("Your item is live! 🎉");
  location.href = "explore.html";
}

document.getElementById("sellForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const file = document.getElementById("image").files[0];
  if (!file) { save(""); return; }
  const reader = new FileReader();
  reader.onload = () => resizeImage(reader.result, save);
  reader.readAsDataURL(file);
});
