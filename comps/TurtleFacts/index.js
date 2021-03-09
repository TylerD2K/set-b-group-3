function Turtles(img="https://placekitten.com/300/300", percent="0%", pcolor="#4B6B4E"){
    return `
    <div style='
        display: flex;
        flex-basis:200px;
        align-items: center;
        justify-content: center;
        font-size: 23px;
        padding: 0px 10px 0px 10px;
        color: #FFF;
    '
    onclick='Turtles.HandleClick(this)'
    >
    <div class="text" style="
    opacity:0;
    transition: opacity 2s;
    ">
    <span style='
        display:inline;
        font-weight: bold;
        font-size: 50px;
        color:${pcolor};
    '>${percent}</span>
    of sea <br>turtles have fragments<br>
     of plastic inside their<br> body.
    </div>
    <img style='
        width:110px;
        height:110px;
        object-fit:cover;
        padding: 0px 10px 0px 10px;
    '
    src=${img}>
    </div>
    `
}

// export const TurtlesUI = Turtles();
Turtles.HandleClick = (el) => {
    el.querySelector(".text").style.opacity = "100%";
}
