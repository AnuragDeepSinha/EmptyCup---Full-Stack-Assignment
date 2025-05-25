const designers = [
  {
    name: "Epic Designs",
    stars: 3.5,
    description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
    projects: 57,
    years: 8,
    price: "$$",
    contact: ["+91 - 984532853", "+91 - 984532854"],
    shortlisted: false
  },
  {
    name: "Studio - D3",
    stars: 4,
    description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
    projects: 43,
    years: 6,
    price: "$$$",
    contact: ["+91 - 984532853", "+91 - 984532854"],
    shortlisted: false
  }
];

let showOnlyShortlisted = false;

function renderDesigners() {
  const listings = document.getElementById("listings");
  listings.innerHTML = "";

  designers.forEach((d, index) => {
    if (showOnlyShortlisted && !d.shortlisted) return;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="info">
        <h3>${d.name}</h3>
        <div class="stars">${"★".repeat(Math.floor(d.stars))}${"☆".repeat(5 - Math.floor(d.stars))}</div>
        <p>${d.description}</p>
        <div>${d.projects} Projects &nbsp;&nbsp; ${d.years} Years &nbsp;&nbsp; ${d.price} Price</div>
        <div>${d.contact.join("<br>")}</div>
      </div>
      <div class="actions">
        <button class="action-btn">Details</button>
        <button class="action-btn">Hide</button>
        <button class="action-btn shortlist" onclick="toggleShortlist(${index})">
          ${d.shortlisted ? "💖" : "🤍"} Shortlist
        </button>
        <button class="action-btn call-btn" onclick="callDesigner('${d.contact[0]}')" title="Call">
          📞 Call
        </button>
        <button class="action-btn">Report</button>
      </div>
    `;

    listings.appendChild(card);
  });
}

function toggleShortlist(index) {
  designers[index].shortlisted = !designers[index].shortlisted;
  renderDesigners();
}

function callDesigner(phoneNumber) {
  window.location.href = `tel:${phoneNumber}`;
}

document.getElementById("shortlist-tab").addEventListener("click", () => {
  showOnlyShortlisted = !showOnlyShortlisted;
  renderDesigners();
});

renderDesigners();





