function HeaderTextUI(text="Placeholder", ultext="Placeholder"){
    return `
    <div style='
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
    '>
    <p style='
    margin:0;
    font-size:48px;
    color: white;
    text-align:center;
    '
    >${text}</p>
    <p style='
    margin:0;
    font-size:48px;
    color: white;
    text-align:center;
    text-decoration:underline;
    '>${ultext}</p>
    </div>`
}


// export const HeaderText = HeaderTextUI();
