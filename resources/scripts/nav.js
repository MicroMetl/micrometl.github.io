// Add Nav
document.addEventListener('DOMContentLoaded', function() {
  // Load navigation
  fetch('navigation.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navigation').innerHTML = data;
      attachDropdownEventListeners();
      checkScreenWidth();
    });
});

// Function to attach event listeners for dropdown buttons
function attachDropdownEventListeners() {
  const dropdownButtonLeft = document.querySelector('.dropdown-button-left');
  const dropdownListLeft = document.querySelector('.dropdown-list-left');
  
  dropdownButtonLeft.addEventListener('click', () => {
    dropdownListLeft.classList.toggle('show');
  });
  
  const dropdownButtonRight = document.querySelector('.dropdown-button-right');
  const dropdownListRight = document.querySelector('.dropdown-list-right');
  
  dropdownButtonRight.addEventListener('click', () => {
    dropdownListRight.classList.toggle('show');
  });
}






// Function to check screen width and update logo
function checkScreenWidth() {
  const logoImage = document.getElementById("logo-image");
  const desktopNav = document.querySelector('.desktop-nav');

  function updateLogo() {
    if (window.innerWidth <= 959) {
      logoImage.src = "/resources/images/logos/Micrometl_Circle.png";
      desktopNav.style.display = 'none';
    } else {
      logoImage.src = "/resources/images/logos/Micrometl_full.png";
      desktopNav.style.display = 'block';
    }
  }

  // Check screen width on window resize
  window.addEventListener("resize", updateLogo);

  // Check screen width on initial page load
  window.addEventListener("load", updateLogo);
}

// Call checkScreenWidth initially
checkScreenWidth();

// Call checkScreenWidth on window resize
window.addEventListener('resize', checkScreenWidth);



// MOBILE NAVIGATION

function openMenu() {
  var navbar = document.getElementById("mobile-navbar");
  var sidebar = document.getElementById("mobile-sidebar");
  var searchbar = document.getElementById("mobile-search-bar");
  var sidebarSearchbar = document.getElementById("mobile-sidebar-search-bar");
  var closeBtn = document.getElementById("mobile-close-btn");

  sidebar.classList.add("open");
  sidebarSearchbar.appendChild(searchbar); // Move the search bar to the sidebar-search-bar
  searchbar.classList.add("expanded"); // Add the 'expanded' class to make the search bar taller
  closeBtn.style.display = "block"; // Show the close button when the menu is opened
}

function closeMenu() {
  var navbar = document.getElementById("mobile-navbar");
  var sidebar = document.getElementById("mobile-sidebar");
  var searchbar = document.getElementById("mobile-search-bar");
  var sidebarSearchbar = document.getElementById("mobile-sidebar-search-bar");
  var closeBtn = document.getElementById("mobile-close-btn");

  sidebar.classList.remove("open");
  sidebarSearchbar.removeChild(searchbar); // Remove the search bar from the sidebar-search-bar
  navbar.appendChild(searchbar); // Move the search bar back to its original position in the navbar
  searchbar.classList.remove("expanded"); // Remove the 'expanded' class to revert the search bar height
  closeBtn.style.display = "none"; // Hide the close button when the menu is closed
}

function openMenu() {
  var navbar = document.getElementById("mobile-navbar");
  var sidebar = document.getElementById("mobile-sidebar");
  var searchbar = document.getElementById("mobile-search-bar");
  var sidebarSearchbar = document.getElementById("mobile-sidebar-search-bar");
  var closeBtn = document.getElementById("mobile-close-btn");

  sidebar.classList.add("open");
  sidebarSearchbar.appendChild(searchbar); // Move the search bar to the sidebar-search-bar
  searchbar.classList.add("expanded"); // Add the 'expanded' class to make the search bar taller
  closeBtn.style.display = "block"; // Show the close button when the menu is opened
}

function closeMenu() {
  var navbar = document.getElementById("mobile-navbar");
  var sidebar = document.getElementById("mobile-sidebar");
  var searchbar = document.getElementById("mobile-search-bar");
  var sidebarSearchbar = document.getElementById("mobile-sidebar-search-bar");
  var closeBtn = document.getElementById("mobile-close-btn");

  sidebar.classList.remove("open");
  sidebarSearchbar.removeChild(searchbar); // Remove the search bar from the sidebar-search-bar
  navbar.appendChild(searchbar); // Move the search bar back to its original position in the navbar
  searchbar.classList.remove("expanded"); // Remove the 'expanded' class to revert the search bar height
  closeBtn.style.display = "none"; // Hide the close button when the menu is closed
}

document.querySelectorAll(".mobile-accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("open");
    var menuIcon = button.querySelector(".mobile-menu-icon i");
    menuIcon.classList.toggle("rotate"); // Add the 'rotate' class to rotate the caret icon
  });
});
