function login(){
    player_name = document.getElementById("playername").value;
    localStorage.setItem("plaer_name",player_name);
    window.location="gamepage.html";

}