// Function to toggle the theme
function toggleTheme() {
  const isDarkMode = document.documentElement.classList.toggle('dark');
  document.getElementById('theme-icon-sun').classList.toggle('hidden');
  document.getElementById('theme-icon-moon').classList.toggle('hidden');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Function to apply a saved or system theme
function applyTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  } else if (prefersDark) {
    document.documentElement.classList.add('dark');
  }

  const isDarkMode = document.documentElement.classList.contains('dark');
  document.getElementById('theme-icon-sun').classList.toggle('hidden', !isDarkMode);
  document.getElementById('theme-icon-moon').classList.toggle('hidden', isDarkMode);
}

// Add event listener to the toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Apply theme on initial load
applyTheme();