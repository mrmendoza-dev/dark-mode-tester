

const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root);

let fontColor = rootStyles.getPropertyValue("--fontColor");
let bgColor = rootStyles.getPropertyValue("--bgColor");


const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", toggleTheme);


function toggleTheme() {
    let buttonText = darkModeBtn.innerText;

    if (buttonText === "Dark Mode" ) {
        root.style.setProperty("--fontColor", rootStyles.getPropertyValue("--darkFont"));
        root.style.setProperty("--bgColor", rootStyles.getPropertyValue("--darkBg"));
        darkModeBtn.innerText = "Light Mode";
    } else {
        root.style.setProperty("--fontColor", rootStyles.getPropertyValue("--lightFont"));
        root.style.setProperty("--bgColor", rootStyles.getPropertyValue("--lightBg"));
        darkModeBtn.innerText = "Dark Mode";
    }

}
