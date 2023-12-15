var hiddenData = document.querySelector(".hidden_data_check_out");
var OpenHiddenData = document.getElementById("open_hidden_data");
var titleHidden = document.getElementById("title_hidden");

OpenHiddenData.onclick = function(){
    hiddenData.classList.toggle("hidden_data_check_out_open");
    titleHidden.classList.toggle("title_hidden_open");
}