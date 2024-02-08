function toggleTheme() {
  const isDarkMode = document.documentElement.classList.toggle('dark');
  document.querySelectorAll('#theme-icon-sun').forEach(el => el.classList.toggle('hidden'));
  document.querySelectorAll('#theme-icon-moon').forEach(el => el.classList.toggle('hidden'));
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function applyTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  } else if (prefersDark) {
    document.documentElement.classList.add('dark');
  }

  const isDarkMode = document.documentElement.classList.contains('dark');
  document.querySelectorAll('#theme-icon-sun').forEach(el => el.classList.toggle('hidden', !isDarkMode));
  document.querySelectorAll('#theme-icon-moon').forEach(el => el.classList.toggle('hidden', isDarkMode));
}

document.querySelectorAll('#theme-toggle').forEach(button => {
  button.addEventListener('click', toggleTheme);
});

applyTheme();