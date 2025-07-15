document.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		// Select all dropdown toggle buttons
		const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
		dropdownToggles.forEach((toggle) => {
			toggle.addEventListener("click", () => {
				// Find the next sibling element which is the dropdown menu
				const dropdownMenu = toggle.nextElementSibling;
				// Toggle the 'hidden' class to show or hide the dropdown menu
				if (dropdownMenu.classList.contains("hidden")) {
					// Hide any open dropdown menus before showing the new one
					document.querySelectorAll(".dropdown-menu").forEach((menu) => {
						menu.classList.add("hidden");
					});
					dropdownMenu.classList.remove("hidden");
				} else {
					dropdownMenu.classList.add("hidden");
				}
			});
		});
		// Select all submenu toggle buttons
		const submenuToggles = document.querySelectorAll('.submenu-toggle');
		submenuToggles.forEach((subToggle) => {
			subToggle.addEventListener("click", () => {
				// Find the next sibling element which is the submenu dropdown
				const submenuDropdwon = subToggle.nextElementSibling
				// Toggle the 'hidden' class to show or hide the submenu dropdown
				if (submenuDropdwon.classList.contains("hidden")) {
					// Hide any open submenu dropdown before showing the new one
					document.querySelectorAll(".submenu-dropdown").forEach((subMenu) => {
						subMenu.classList.add("hidden");
					});
					submenuDropdwon.classList.remove("hidden");
				} else {
					submenuDropdwon.classList.add("hidden");
				}
			});
		});
		// Mobile menu toggle
		const mobileMenuButton = document.querySelector('.mobile-menu-button');
		const mobileMenu = document.querySelector('.navigation-menu');
		const openIcon = document.querySelector(".open-icon");
		const closeIcon = document.querySelector(".close-icon");
  
		mobileMenuButton.addEventListener('click', () => {
			openIcon.classList.toggle("hidden");
  		closeIcon.classList.toggle("hidden");
			mobileMenu.classList.toggle('hidden')
		});
		// Clicking outside of an open dropdown menu closes it
		window.addEventListener("click", function (e) {
			if (!e.target.matches(".dropdown-toggle")) {
				document.querySelectorAll(".dropdown-menu").forEach((menu) => {
					if (!menu.contains(e.target)) {
						menu.classList.add("hidden");
					}
				});
			}
			if (!e.target.matches(".submenu-toggle")) {
				document.querySelectorAll(".submenu-dropdown").forEach((subMenu) => {
					if (!subMenu.contains(e.target)) {
						subMenu.classList.add("hidden");
					}
				});
			}
		});
  }, 0);
});
