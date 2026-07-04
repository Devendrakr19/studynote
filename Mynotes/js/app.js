import htmlData from "../data/html.js";
import cssData from "../data/css.js";
import dsaData from "../data/dsa.js";
import reactData from "../data/react.js";

const htmlList = document.getElementById("htmlList");
const cssList = document.getElementById("cssList");
const reactList = document.getElementById("reactList");
const dsaList = document.getElementById("dsaList");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const contentArea = document.getElementById("contentArea");
const searchInput = document.getElementById("searchInput");
const headers = document.querySelectorAll(".section-header");

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");
const sidebarToggleBtn = document.getElementById("sidebarBtn");

let currentData = [];
let currentIndex = 0;
let currentList = null;

// ========================================
// SEARCH FUNCTIONALITY
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  document.querySelectorAll(".section").forEach((section) => {
    const header = section.querySelector(".section-header");

    const headerText = header.textContent.toLowerCase();

    if (headerText.includes(searchTerm)) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
});

// ========================================
// LOAD ALL JSON FILES
async function loadTopics() {
  renderSidebar(htmlData, htmlList);
  renderSidebar(cssData, cssList);
  renderSidebar(reactData, reactList);
  renderSidebar(dsaData, dsaList);
}

// ========================================
// hide and show sidebar
sidebarToggleBtn.addEventListener("click", () => {
  const sidebarHidden = document.body.classList.toggle("sidebar-hidden");

  sidebarToggleBtn.textContent = sidebarHidden ? "✖" : "☰"; 
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
});

// ========================================
// CREATE SIDEBAR LESSONS
function renderSidebar(data, list) {
  data.forEach((topic, index) => {
    const li = document.createElement("li");

    li.textContent = topic.title;

    // Used by search
    li.dataset.title = topic.title.toLowerCase();

    li.addEventListener("click", () => {
      currentData = data;
      currentIndex = index;
      currentList = list;

      showContent();

      // Close sidebar on mobile
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
    });

    list.appendChild(li);
  });
}

// ========================================
// UPDATE ACTIVE SIDEBAR ITEM
function updateActiveTopic() {
  document.querySelectorAll(".sidebar li").forEach((item) => {
    item.classList.remove("active-topic");
  });

  const currentLi = currentList.children[currentIndex];

  if (currentLi) {
    currentLi.classList.add("active-topic");
  }
}

// ========================================
// DISPLAY CONTENT
function showContent() {
  contentArea.innerHTML = currentData[currentIndex].content;

  updateActiveTopic();

  // Show/Hide Previous button
  prevBtn.style.display = currentIndex === 0 ? "none" : "inline-block";

  // Show/Hide Next button
  nextBtn.style.display =
    currentIndex === currentData.length - 1 ? "none" : "inline-block";

  // Scroll content to top
  document.querySelector(".content").scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ========================================
// EXPAND / COLLAPSE CATEGORY
headers.forEach((header) => {
  const list = header.nextElementSibling;

  list.classList.add("hidden");
  header.textContent = header.textContent.replace("▼", "▶");

  header.addEventListener("click", () => { 
    const wasHidden = list.classList.contains("hidden");

    headers.forEach((otherHeader) => {
      const otherList = otherHeader.nextElementSibling;

      otherList.classList.add("hidden");
      otherHeader.textContent = otherHeader.textContent.replace("▼", "▶");
    });

    if (wasHidden) {
      list.classList.remove("hidden");
      header.textContent = header.textContent.replace("▶", "▼");
    }
  });
});

// ========================================
// NEXT BUTTON
nextBtn.addEventListener("click", () => {
  if (currentIndex < currentData.length - 1) {
    currentIndex++;

    showContent();
  }
});

// ========================================
// PREVIOUS BUTTON
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;

    showContent();
  }
});

loadTopics();

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
});
