function BackAndNext(){
    return `
    <div style="
    display: flex;
    justify-content: space-between;
    text-align:center;
    color:white;
    width:454px;
    ">
    <figure class="back" onclick="back()">
        <img style="
        width:50px;
        height:50px;
        object-fit:cover;
        "
        src="./imgs/Planet.svg" class="back-icon"/>
        <figcaption>Back</figcaption>
    </figure>
    <div class="mid-col"></div>
    <figure class="back" onclick="forward()">
        <img style="
        width:50px;
        height:50px;
        object-fit:cover;
        "src="./imgs/Planet.svg" class="next-icon"/>
        <figcaption>Next</figcaption>
    </figure>
    </div>
    `
}

function back(){
    window.location.href = "";
}

function next(){
    window.location.href = "";
}