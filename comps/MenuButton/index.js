function MenuButtonUI(link=""){
    return `
    <div>
    <a style='
        display:flex;
        align-items:center;
        justify-content: center;
        min-width:300px;
        min-height:120px;
        height: 20%;
        width: 20%;
        background-color: #188A46;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
        border-radius: 10px;
        font-size:72px;
        color: white;
        transition: background-color 1s ease;
        text-decoration:none;
    '
   
    onclick='MenuButtonUI.HandleClick(this)'
    href="${link}">Start</a>
    </div>`
}

MenuButtonUI.HandleClick = (el) => {
    el.style.backgroundColor = "#2db362";
}

// export const MenuButton = MenuButtonUI();