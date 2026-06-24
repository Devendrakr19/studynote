import htmlData from "../data/html.js"
import cssData from "../data/css.js"
import dsaData from "../data/dsa.js"

const htmlList = document.getElementById("htmlList");
const cssList = document.getElementById("cssList");
const dsaList = document.getElementById("dsaList");

// ========================================
// MAIN PAGE ELEMENTS
// ========================================

const contentArea = document.getElementById("contentArea");
const searchInput = document.getElementById("searchInput");
const headers = document.querySelectorAll(".section-header");

// ========================================
// CURRENT ACTIVE STATE
//
// currentData = currently selected category data
// currentIndex = currently selected lesson index
// currentList = currently selected sidebar list
// ========================================

let currentData = [];
let currentIndex = 0;
let currentList = null;

// ========================================
// SEARCH FUNCTIONALITY
//
// Filters lessons in sidebar while typing
//
// Example:
// Search "head"
// Shows "HTML Headings"
// ========================================

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
//
// Add more categories here later
//
// Example:
// const reactData = await fetch(...)
// renderSidebar(reactData, reactList);
// ========================================

async function loadTopics() { 

  renderSidebar(htmlData, htmlList);
  renderSidebar(cssData, cssList);
  renderSidebar(dsaData, dsaList);
}

// ========================================
// CREATE SIDEBAR LESSONS
//
// Dynamically creates LI elements
// from JSON data
//
// Example:
//
// HTML
//  - Introduction
//  - Headings
//  - Paragraphs
// ========================================

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
    });

    list.appendChild(li);
  });
}

// ========================================
// UPDATE ACTIVE SIDEBAR ITEM
//
// Removes active class from all lessons
// and adds it to currently selected lesson
//
// Called automatically whenever
// content changes
// ========================================

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
//
// Loads lesson content into content area
//
// Example:
// HTML Headings lesson
// ========================================

function showContent() {
  contentArea.innerHTML = currentData[currentIndex].content;

  updateActiveTopic();
}

// ========================================
// EXPAND / COLLAPSE CATEGORY
//
// ▼ HTML Tutorial
//
// becomes
//
// ▶ HTML Tutorial
//
// and hides lessons
// ========================================

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const list = header.nextElementSibling;

    list.classList.toggle("hidden");

    if (list.classList.contains("hidden")) {
      header.textContent = header.textContent.replace("▼", "▶");
    } else {
      header.textContent = header.textContent.replace("▶", "▼");
    }
  });
});

// ========================================
// NEXT BUTTON
//
// Move to next lesson
// ========================================

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < currentData.length - 1) {
    currentIndex++;

    showContent();
  }
});

// ========================================
// PREVIOUS BUTTON
//
// Move to previous lesson
// ========================================

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;

    showContent();
  }
});

// ========================================
// DARK / LIGHT MODE
// ========================================

// document.getElementById("themeBtn").addEventListener("click", () => {
//   document.body.classList.toggle("light");
// });

// ========================================
// START APPLICATION
// ========================================

loadTopics();
