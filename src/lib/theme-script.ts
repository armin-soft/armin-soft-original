
export function initTheme() {
  // Force dark mode
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}
