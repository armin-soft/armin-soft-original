
export function initTheme() {
  // Force dark mode and store preference
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}
