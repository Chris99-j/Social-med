// Tab switching logic
document.querySelectorAll('.tab-item').forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const target = tab.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});

// Chat Popup
const chatPopup = document.getElementById("chatPopup");

function toggleChat() {
  chatPopup.classList.toggle("active");
}

function closeChatPopup() {
  chatPopup.classList.remove("active");
}

// Friends Sidebar
function toggleFriends() {
  const sidebar = document.getElementById('friendsSidebar');
  sidebar.classList.toggle('open');
}

document.addEventListener('click', function (e) {
  const sidebar = document.getElementById("friendsSidebar");
  const toggleBtn = document.querySelector(".toggle-friends");

  if (
    sidebar.classList.contains("open") &&
    !sidebar.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    sidebar.classList.remove("open");
  }
});

// Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Apply saved theme
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
