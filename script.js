document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => { new Audio("hover.mp3").play() })
    btn.addEventListener("mousedown", () => { new Audio("hover.mp3").play() })
});
document.querySelectorAll(".sounded").forEach(obj => {
    obj.addEventListener("mouseenter", () => { new Audio("hover.mp3").play() })
    obj.addEventListener("mousedown", () => { new Audio("hover.mp3").play() })
});

const lib = document.getElementById("lib");

function showLibrary() {
    lib.classList.add("active");
}
function hideLibrary() {
    lib.classList.remove("active");
}

document.addEventListener("click", (e) => {
    if(!e.target.closest(".menu") && !e.target.closest(".btn")) hideLibrary();
});

const audioplayer = {
    "id": "audioplayer",
    "source": "audioplayer.html"
}

function closeapp(id) {
    const app = document.getElementById(id);

    if(app.classList.contains("app")) {
        app.style.opacity = "0";
        app.style.transform = "scale(1.2)";
        app.style.filter = "blur(5px)";
        setTimeout(function () {
            app.remove();
        }, 200);
    }
}

function launchapp(res) {
    const app = res;

    if(lib.classList.contains("active")) {
        lib.classList.remove("active");
    }

    if(document.getElementById(app.id)) return;
    
    const win = document.createElement("div");
    win.id = app.id;
    win.className = "app";
    win.innerHTML = `
        <iframe src="${app.source}"></iframe>
    `;

    document.body.appendChild(win);
}