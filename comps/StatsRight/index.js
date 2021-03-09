function StatsRightUI(img="https://placekitten.com/300/300", percent="0%", pcolor="#4B6B4E", text="placeholder"){
    return `
    <div style='
        display:flex;
        flex-basis:200px;
        align-items: center;
        justify-content: center;
        width:454px;
    '
    onclick='StatsRightUI.HandleClick(this)'
    >
    <img style='
    width:100px;
    height:100px;
    object-fit:cover;
    padding: 0px 10px 0px 10px;
'
src=${img}>
    <p class="percent" style='
        font-weight: bold;
        font-size: 50px;
        padding: 0px 10px 0px 10px;
        color: ${pcolor};
        opacity:0;
        transition: opacity 2s;
    '>${percent}</p>
    <p class="text" style='
        font-size: 24px;
        padding: 0px 10px 0px 10px;
        color: #FFF;
        opacity: 0;
        transition: opacity 2s;
        transition-delay: 2s;
    '>${text}</p>
    </div>`
}

// export const StatsDivR = StatsRightUI();
StatsRightUI.HandleClick = (el) => {
    el.querySelector(".text").style.opacity = "100%";
    el.querySelector(".percent").style.opacity = "100%";
}
