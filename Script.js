let itemCount = 0;
let totalPrice = 0;

function addToCart(price) {
  itemCount += 1;
  totalPrice += price;

  // Update HTML elements
  document.getElementById('cartCount').textContent = itemCount;
  document.getElementById('cartTotal').textContent = totalPrice;
}let itemCount = 0;
let totalPrice = 0;

// Update Cart Count and Price
function addToCart(price) {
  itemCount += 1;
  totalPrice += price;
  document.getElementById('cartCount').textContent = itemCount;
  document.getElementById('cartTotal').textContent = totalPrice;
}

// Add New Product
function addNewProduct() {
  const nameInput = document.getElementById('pName');
  const priceInput = document.getElementById('pPrice');
  const imgInput = document.getElementById('pImg');

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);
  let img = imgInput.value.trim();

  if (name === "" || isNaN(price)) {
    alert("Please enter a valid product name and price!");
    return;
  }

  if (img === "") {
    img = "https://via.placeholder.com/150";
  }

  const productGrid = document.getElementById('productGrid');

  // Create card element
  const card = document.createElement('div');
  card.className = 'product-card';

  // Render HTML inside card
  card.innerHTML = `
    <img src="${img}" alt="${name}">
    <h3 class="product-title">${name}</h3>
    <p class="price">$<span class="product-price">${price}</span></p>
    <div class="btn-group">
      <button onclick="addToCart(${price})" class="add-btn">Add to Cart</button>
      <button onclick="editProduct(this)" class="edit-btn">Edit</button>
    </div>
  `;

  productGrid.appendChild(card);

  // Clear inputs
  nameInput.value = "";
  priceInput.value = "";
  imgInput.value = "";
}

// Function to Update/Edit an Item
function editProduct(buttonElement) {
  // Find the parent product card
  const card = buttonElement.closest('.product-card');
  
  const titleElement = card.querySelector('.product-title');
  const priceElement = card.querySelector('.product-price');

  // Get new values from user using prompt dialogs
  const newName = prompt("Enter new product name:", titleElement.textContent);
  const newPrice = prompt("Enter new price ($):", priceElement.textContent);

  // Update elements if input is valid
  if (newName !== null && newName.trim() !== "") {
    titleElement.textContent = newName.trim();
  }

  if (newPrice !== null && !isNaN(parseFloat(newPrice))) {
    const updatedPrice = parseFloat(newPrice);
    priceElement.textContent = updatedPrice;
    
    // Update the Add to Cart button to use the new price
    const addBtn = card.querySelector('.add-btn');
    addBtn.setAttribute('onclick', `addToCart(${updatedPrice})`);
  }
}

