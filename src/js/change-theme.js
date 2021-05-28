const bodyElement = document.querySelector("body");
const checkboxElement = document.querySelector("#theme-switch-toggle");

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const onLocalStorageGet = () => {
  if (localStorage.getItem("theme") === Theme.DARK) {
    checkboxElement.checked = "true";
    bodyElement.classList.add(Theme.DARK);
  } else {
    bodyElement.classList.add(Theme.LIGHT);
  }
};

onLocalStorageGet();

const onBtnClasslistToogle = () => {
  if (checkboxElement.checked) {
    replaceTheme(Theme.LIGHT, Theme.DARK);
  } else {
    replaceTheme(Theme.DARK, Theme.LIGHT);
  }
};

const replaceTheme = (oldTheme, newTheme) => {
  bodyElement.classList.remove(oldTheme);
  bodyElement.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
};

checkboxElement.addEventListener("click", onBtnClasslistToogle);
