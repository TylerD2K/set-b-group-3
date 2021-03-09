function vImageTextUI(img="https://placekitten.com/300/300"){
    return `
    <div class="text" style='
        display: flex;
        flex-basis:200px;
        justify-content: center;
        flex-direction:column;
        font-size: 23px;
        padding: 0px 10px 0px 10px;
        color: #FFF;
    '
    onclick="vImageTextUI.HandleClick(this)"
    >
    <img style='
    width:190px;
    height:190px;
    object-fit:cover;
'
    src=${img}>
    <div class="text" style="
    opacity: 0;
    transition: opacity 2s;
    ">
    it is easy for<br>
    animals, especially<br>
    birds, fishes, and<br>
    turtles to mistake<br>
    pieces of plastics<br>
    for food.
    </div>
    </div>`
}

// export const vImageText = vImageTextUI();
vImageTextUI.HandleClick = (el) => {
    el.querySelector(".text").style.opacity = "100%";
}