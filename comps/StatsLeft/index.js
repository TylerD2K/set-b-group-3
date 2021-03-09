function StatsLeftUI(img="https://placekitten.com/300/300", percent="0%", pcolor="#4B6B4E", text="placeholder"){
    return `
    <div style='
        display:flex;
        flex-basis:200px;
        align-items: center;
        justify-content: space-evenly;
        width:454px;
    '
    onclick='StatsLeftUI.HandleClick(this)'
    >
    <div style="
    margin:0px;
    display: inline-flex;
    align-text: center;
    justify-content:center;
    width:454px;
    ">
    <p class="percent" style='
        font-weight: bold;
        font-size: 50px;
        margin-right:10px;
        color:${pcolor};
        opacity:0;
        transition: opacity 2s;
    '>${percent}</p>
    <p class="text" style='
        font-size: 24px;
        padding: 45px 10px 0px 10px;
        color: #FFF;
        opacity:0;
        transition:opacity 2s;
        transition-delay: 2s;
    '>${text}</p>
    </div>
    <img class="img" style='
        width:100px;
        height:100px;
        object-fit:cover;
        padding: 0px 10px 0px 10px;
    '
    src=${img}>
    </div>`
}

// export const StatsDivL = StatsLeftUI();

StatsLeftUI.HandleClick = (el) => {
    el.querySelector(".text").style.opacity = "100%";
    el.querySelector(".percent").style.opacity = "100%";
}
