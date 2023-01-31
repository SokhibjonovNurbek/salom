const menuBtn = document.querySelector("#menu-btn");
const sideMenu = document.querySelector("aside");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const logoImg = document.querySelector(".logo img");


menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
});


closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
});


themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");

    if (localStorage.getItem("darkMode")) {
        localStorage.removeItem("darkMode");
    } else {
        localStorage.setItem("darkMode", document.body.className);
    }

    themeToggler.querySelector("span:first-child").classList.toggle("active");
    themeToggler.querySelector("span:last-child").classList.toggle("active");
});


Ordres.forEach((order) => {
    const tr = document.createElement("tr");
    const trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${order.shopping === "Declined"
            ? "danger"
            : order.shopping === "Pending"
                ? "warning"
                : "primary"
        }">${order.shopping}</td>
                <td class="primary">Details</td>
  `;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
});

if (localStorage.getItem("darkMode")) {
    document.body.className = localStorage.getItem("darkMode");
    themeToggler.querySelector("span:first-child").classList.remove("active");
    themeToggler.querySelector("span:last-child").classList.add("active");
    
}

