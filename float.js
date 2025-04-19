document.getElementById("notch").addEventListener("mouseenter", () =>{
    document.getElementById('playerSpotify').style.display='block';
    document.getElementById('logoSpotify').style.display='none';
    document.getElementById('notch').style.height='130px';
    document.getElementById('notch').style.width='250px';
})

document.getElementById("notch").addEventListener("mouseleave", () =>{
    document.getElementById('playerSpotify').style.display='none';
    document.getElementById('notch').style.height='29px';
    document.getElementById('notch').style.width='110px';
    setTimeout(() =>{
        document.getElementById('logoSpotify').style.display='flex';
    }, 300)
})
