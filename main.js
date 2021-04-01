var yesBtn = document.getElementById("yesBtn");
var warning = document.getElementById("warning");
var info = document.getElementById("info");
var main = document.getElementById("main");
var startt = document.getElementById("start");
var confirmm = document.getElementById("confirm");
var yesBtn2 = document.getElementById("yesBtn2");

yesBtn.onclick = function() {epFalse()};
startt.onclick = function() {start()};
yesBtn2.onclick = function() {stickBug()};

function epFalse() {
    warning.style.display = "none";
    info.style.display = ""
    main.style.display = ""
    document.body.style.animation = "bgAnim 4s linear infinite"
}

function start() {
    main.style.display = "none";
    confirmm.style.display = ""
}

function stickBug() {
    confirmm.style.display = "none";
    var vid = document.createElement('div');
    document.body.appendChild(vid);
    vid.innerHTML = '<iframe width="1000" height="400" src="https://www.youtube.com/embed/M5V_IXMewl4?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" disablefullscreen></iframe>'
    vid.id = "vid"
    vid.style = `
    text-align: center;
    position: fixed;
    top: 20%;
    left: 20%;`;
    info.style.display = "none"
}