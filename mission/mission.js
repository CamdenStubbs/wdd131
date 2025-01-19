const themeSelector = document.querySelector("select")

function changeTheme()
{
    let selectValue = themeSelector.value;
    let logo = document.getElementById("byui-logo");
    if (selectValue == "dark")
    {
        document.querySelector("body").classList.add("dark");
        logo.setAttribute("src", "byui-logo_white.png");
    }

    else
    {
        document.querySelector("body").classList.remove("dark");
        logo.setAttribute("src", "byui-logo_blue.webp");
    }
}

themeSelector.addEventListener("change", changeTheme);