function BackNextButtonsUI(link1="",link2=""){

return `
<div style="
display: flex;
justify-content:space-between;
width:454px;
">
    <div><a href="${link1}">
        <button style="
        display: flex;
        flex-direction:column;
        text-align:center;
        align-items:center;
        border:none;
        background-color:transparent;
        color:white;
        ">
            <img style="
            width:50px;
            height:50px;
            object-fit:cover;
            "
            src="./imgs/Planet.svg"/>
            <p>Back</p>
        </button>
        </a>
    </div>
    <div><a href="${link2}">
        <button style="
        display: flex;
        flex-direction:column;
        text-align:center;
        align-items:center;
        border:none;
        background-color:transparent;
        color:white;
        text-decoration:none;
        ">
            <img style="
            width:50px;
            height:50px;
            object-fit:cover;
            "
            src="./imgs/Planet.svg"/>
            <p>Next</p>
        </button>
        </a>
    </div>
</div>
`
}

// export const BackNextButtons = BackNextButtonsUI();