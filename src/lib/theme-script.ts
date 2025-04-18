
// This script runs on page load to set the correct theme
export function initTheme() {
  // Check local storage first
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    return;
  }
  
  // If no stored preference, check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', prefersDark);
  localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
}
