document.addEventListener("DOMContentLoaded", function() {
  let addButton = document.getElementById("add-button");
let shortcutButtons = document.getElementById("shortcut-buttons");
let numShortcuts = 0;



function addShortcutButton() {
  const maxShortcuts = 10;
  if (numShortcuts < maxShortcuts) {
    const code = prompt("Enter JavaScript code:");
    if (code) {
      const button = createShortcutButton(code);
      shortcutButtons.appendChild(button);
      numShortcuts++;
      setCookie(`shortcut-${numShortcuts}`, code);
      updateShortcutNumbers();
    }
  } else {
    alert(`You have reached the shortcut limit of ${maxShortcuts}.`);
  }
}

function createShortcutButton(code) {
  const button = document.createElement("button");
  button.textContent = `Shortcut ${numShortcuts + 1}`;
  button.addEventListener("click", Function(code));
  button.addEventListener("click", () => {
    Function(code)();
  });
  button.addEventListener("contextmenu", event => {
    event.preventDefault();
    deleteShortcutButton(button);
  });
  return button;
}

function deleteShortcutButton(button) {
  if (confirm("Are you sure you want to delete this shortcut?")) {
    const shortcutIndex = [...shortcutButtons.children].indexOf(button) - 1;
    deleteCookie(`shortcut-${shortcutIndex + 1}`);
    shortcutButtons.removeChild(button);
    numShortcuts--;
    updateShortcutNumbers();
  }
  return true;
}

function updateShortcutNumbers() {
  const buttons = shortcutButtons.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.textContent = `Shortcut ${i + 1}`;
  }
}

function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
}

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
}

function deleteCookie(name) {
  setCookie(name, "", -1);
}

for (let i = 1; i <= 10; i++) {
  const code = getCookie(`shortcut-${i}`);
  if (code) {
    const button = createShortcutButton(code);
    shortcutButtons.appendChild(button);
    numShortcuts++;
  }
}

updateShortcutNumbers();
addButton.addEventListener("click", addShortcutButton);
});

