const bodyElement = document.querySelector('body');
const checkboxElement = document.querySelector('#theme-switch-toggle');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


// bodyElement.classList.add(Theme.LIGHT)
// bodyElement.classList.add(localStorage.getItem('theme'));

const onLocalStorageGet = () => {
    bodyElement.classList.add(Theme.LIGHT)

    if (localStorage.getItem('theme') === Theme.DARK) {
        checkboxElement.checked = 'true';
        bodyElement.classList.remove(Theme.LIGHT)
            bodyElement.classList.add(Theme.DARK)
        }
        else{
            bodyElement.classList.add(Theme.LIGHT)
        }
}

onLocalStorageGet()

const onBtnClasslistToogle = () => {
    if(bodyElement.classList.contains(Theme.LIGHT)){
      bodyElement.classList.add(Theme.DARK);
      bodyElement.classList.remove(Theme.LIGHT)
      localStorage.removeItem('theme')
      localStorage.setItem('theme', Theme.DARK)
    }
    else{
        bodyElement.classList.remove(Theme.DARK);
      bodyElement.classList.add(Theme.LIGHT)
      localStorage.removeItem('theme', Theme.DARK)
      localStorage.setItem('theme', Theme.LIGHT)
    }
}

checkboxElement.addEventListener('click', onBtnClasslistToogle)


// const lightThemeFunc = () => {
//     bodyElement.classList.add(Theme.LIGHT);
//     bodyElement.classList.remove(Theme.DARK);
//     localStorage.removeItem('theme');
//     localStorage.setItem('theme', Theme.LIGHT);
// };

// const darkThemeFunc = () => {
//     bodyElement.classList.add(Theme.DARK);
//     bodyElement.classList.remove(Theme.LIGHT);
//     localStorage.removeItem('theme');
//     localStorage.setItem('theme', Theme.DARK);
// };

// const changeThemeFunc = () => {
//     if (!checkboxElement.checked) {
//         lightThemeFunc();
//     } else {
//         darkThemeFunc();
//     }
// };

// checkboxElement.addEventListener('change', changeThemeFunc);

// if (localStorage.getItem('theme') === Theme.DARK) {
//     checkboxElement.checked = 'true';
//   darkThemeFunc();
// }
