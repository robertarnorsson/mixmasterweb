function toggleTheme() {
  const isDarkMode = document.documentElement.classList.contains('dark');
  updateThemeAndCursor(isDarkMode ? 'light' : 'dark');
}

function applyTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    updateThemeAndCursor(savedTheme);
  } else if (prefersDark) {
    updateThemeAndCursor('dark');
  } else {
    updateThemeAndCursor('light');
  }
}

function updateThemeAndCursor(theme) {
  const lightCursor = 'url("../assets/images/mouse-effect-dark-cursor.png") 3 3, default';
  const lightCursorHover = 'url("../assets/images/mouse-effect-dark-cursor-hover.png") 6 6, pointer';
  const darkCursor = 'url("../assets/images/mouse-effect-cursor.png") 3 3, default';
  const darkCursorHover = 'url("../assets/images/mouse-effect-cursor-hover.png") 6 6, pointer';

  if (theme === 'dark') {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    document.body.style.cursor = darkCursor;
    applyCursorToElements(darkCursorHover, ['a', 'button']);
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    document.body.style.cursor = lightCursor;
    applyCursorToElements(lightCursorHover, ['a', 'button']);
  }

  document.querySelectorAll('#theme-icon-sun').forEach(el => el.classList.toggle('hidden', theme !== 'light'));
  document.querySelectorAll('#theme-icon-moon').forEach(el => el.classList.toggle('hidden', theme === 'light'));
  console.info('Changed theme to ' + theme);
  localStorage.setItem('theme', theme);
}

function applyCursorToElements(cursorStyle, selectors) {
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.style.cursor = cursorStyle;
    });
  });
}

document.querySelectorAll('#theme-toggle').forEach(button => {
  button.addEventListener('click', toggleTheme);
});

applyTheme();
