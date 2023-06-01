document.addEventListener('DOMContentLoaded', function() {
  // Load navigation
  fetch('navigation.html')
    .then(response => response.text())
    .then(data => {
      const screenWidth = window.innerWidth;
      const navigationContainer = document.getElementById('navigation');

      if (screenWidth <= 959) {
        navigationContainer.innerHTML = data;
        attachDropdownEventListeners();
        checkScreenWidth();
      } else {
        navigationContainer.innerHTML = data;
        attachDropdownEventListeners();
        updateNav();
      }
    })
    .then(() => {
      // Attach event listeners for mobile accordion buttons
      document.querySelectorAll(".mobile-accordion-button").forEach((button) => {
        button.addEventListener("click", () => {
          button.parentElement.classList.toggle("open");
          var menuIcon = button.querySelector(".mobile-menu-icon i");
          menuIcon.classList.toggle("rotate");
        });
      });
    });
});

// Function to attach event listeners for dropdown buttons

function attachDropdownEventListeners() {
  const dropdownButtonLeft = document.querySelector('.dropdown-button-left');
  const dropdownListLeft = document.querySelector('.dropdown-list-left');

  if (dropdownButtonLeft && dropdownListLeft) {
    dropdownButtonLeft.addEventListener('click', () => {
      dropdownListLeft.classList.toggle('show');
    });
  }

  const dropdownButtonRight = document.querySelector('.dropdown-button-right');
  const dropdownListRight = document.querySelector('.dropdown-list-right');

  if (dropdownButtonRight && dropdownListRight) {
    dropdownButtonRight.addEventListener('click', () => {
      dropdownListRight.classList.toggle('show');
    });
  }
}


// Function to check screen width and update navigation
function checkScreenWidth() {
  const logoImage = document.getElementById("logo-image");
  const desktopNav = document.querySelector('.desktop-nav');
  const mobileNav = document.querySelector('.mobile-navbar');

  function updateNav() {
    if (window.innerWidth <= 959) {
      desktopNav.style.display = 'none';
      mobileNav.style.display = 'block';
    } else {
      desktopNav.style.display = 'block';
      mobileNav.style.display = 'none';
    }
  }

  // Check screen width on window resize
  window.addEventListener("resize", updateNav);

  // Check screen width on initial page load
  window.addEventListener("load", updateNav);

  
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

//fix the accordion bugs
function attachAccordionEventListeners() {
  document.querySelectorAll(".mobile-accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.classList.toggle("open");
      var menuIcon = button.querySelector(".mobile-menu-icon i");
      menuIcon.classList.toggle("rotate");
    });
  });
}

// Call the function when needed
// For example, after an asynchronous operation or when the DOM is ready
attachAccordionEventListeners();

window.addEventListener('resize',attachAccordionEventListeners);


document.querySelectorAll(".mobile-accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("open");
    var menuIcon = button.querySelector(".mobile-menu-icon i");
    menuIcon.classList.toggle("rotate"); // Add the 'rotate' class to rotate the caret icon
  });
});
