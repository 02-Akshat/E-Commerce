// Nav Color Toggle Function
function toggleSwitch(element) {
  element.classList.toggle("active");

  const cartIcon = document.querySelector(".cart")
  const searchIcon = document.querySelector(".search-icon");
  const category1 = document.querySelector(".category-1 > .category");
  const category2 = document.querySelector(".category-2 > .category");
  const category3 = document.querySelector(".category-3 > .category");
  const category4 = document.querySelector(".category-4 > .category");
  const category5 = document.querySelector(".category-5 > .category");
  const footer = document.querySelector(".footer");
  const navDiv = document.querySelector(".nav");
  const subNavLink1 = document.querySelector(".sub-nav-links > .a1");
  const subNavLink2 = document.querySelector(".sub-nav-links > .a2");
  const subNavLink3 = document.querySelector(".sub-nav-links > .a3");
  const subNavLink4 = document.querySelector(".sub-nav-links > .a4");
  const subNavLink5 = document.querySelector(".sub-nav-links > .a5");

  if (element.classList.contains("active")) {
    cartIcon.style.backgroundColor = "#338640";
    searchIcon.style.color = "#338640";
    footer.style.backgroundColor = "#338640";
    navDiv.style.backgroundColor = "#338640";
    category1.style.borderColor = "#338640";
    category2.style.borderColor = "#338640";
    category3.style.borderColor = "#338640";
    category4.style.borderColor = "#338640";
    category5.style.borderColor = "#338640";
    subNavLink1.style.color = "#338640";
    subNavLink2.style.color = "#338640";
    subNavLink3.style.color = "#338640";
    subNavLink4.style.color = "#338640";
    subNavLink5.style.color = "#338640";
    subNavLink1.textContent = "Vegetables";
    subNavLink2.textContent = "Fruits";
    subNavLink3.textContent = "Milk Products";
    subNavLink4.textContent = "Dry Fruits";
    subNavLink5.textContent = "Beverages";
    localStorage.setItem("navActive", "true");
  } else {
    cartIcon.style.backgroundColor = "#4124ab";
    searchIcon.style.color = "#4124ab";
    footer.style.backgroundColor = "#4124ab";
    navDiv.style.backgroundColor = "#4124ab";
    category1.style.borderColor = "#4124ab";
    category2.style.borderColor = "#4124ab";
    category3.style.borderColor = "#4124ab";
    category4.style.borderColor = "#4124ab";
    category5.style.borderColor = "#4124ab";
    subNavLink1.style.color = "#4124ab";
    subNavLink2.style.color = "#4124ab";
    subNavLink3.style.color = "#4124ab";
    subNavLink4.style.color = "#4124ab";
    subNavLink5.style.color = "#4124ab";
    subNavLink1.textContent = "Wearables";
    subNavLink2.textContent = "Electronics";
    subNavLink3.textContent = "Home & Furniture";
    subNavLink4.textContent = "Appliances";
    subNavLink5.textContent = "Beauty & Care";
    localStorage.setItem("navActive", "false");
  }
}
