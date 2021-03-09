function WildlifeCover(url="https://placekitten.com/100/100"){
    return `
        <div style='
            display:flex;
            flex-direction:column;
            justify-content:center;
            margin-left:auto;
            margin-right:auto;
            background: linear-gradient(180deg, #5a8ca0 0%, rgba(255, 255, 255, 0) 100%), #263a49;

            right:0;
            left:0;
            overflow:hidden;
            height:100vh;
            width:100vw;
            position: absolute;
            opacity: 100%;
            transition: opacity 1s, up 3s;
            text-align:center;
        '
            onclick='WildlifeCover.HandleClick(this)'
        >
            <div style='
            margin:0;
            font-size:90px;
            color: white;
            text-align:center;
            '>Wildlife
            </div>
            <div style='
            font-style: normal;
            font-weight: normal;
            font-size: 48px;
            line-height: 61px;
            text-align: center;
            color: #F8F3EB;
            '>Click for<br>more info!</div>
            <div>
                <img style='

                    width:454px;
                    height:454px;
                    object-fit:cover;
                '
                src='${url}'/>
            </div>
        </div>
    `
}

WildlifeCover.HandleClick = (el) => {
    el.style.opacity = "0%";
    el.style.up = "110%";

}

// export const Avatar = AvatarUI();