var url = window.location.href;
var popupText;


// The current page is in production
if (url.indexOf('www') !== -1) {
    popupText = 'Debes ingresar en STAGING para utilizar esta extensión<br><br> <strong>¯\\_(ツ)_/¯</strong>';
    displayPopup(popupText);
} 
else {
    var flag = false;
    for (var data in resourcesList) {
        // Open resource in Modx
        if (data == url) {
            window.open(`https://staging.yourdomain.com/manager/?a=resource/update&id=${resourcesList[data]}`);
            flag = true;
        }
    }
    // The current page is registered in resources.js
    if (flag == false) {
        popupText = 'Parece que esta página no se encuentra registrada en la extensión<br><br> <strong>ಥ_ಥ</strong>'
        displayPopup(popupText);
    }
}

// Close Popup
$("#closePopModx").on("click",function(){
    $("#contPopupModx").fadeOut();
    $("#contPopupModx").remove();
});


// Print Popup
function displayPopup(popupText) {
    // Relative path icon
    var iconUrl = chrome.extension.getURL('info-icon.png');
    $("#contPopupModx").remove();
    $("body").append(`<div id="contPopupModx" class="overlayModx">
	                    <div class="popupModxResources">
                            <img src="${iconUrl}" alt="">
                            <button class="close" id="closePopModx">&times;</button>
                            <div class="content">
                                ${popupText}
                            </div>
	                    </div>
                    </div>`);
}

// Insert CSS styles
document.head.insertAdjacentHTML('beforeend', `
<style>  
  #contPopupModx.overlayModx {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    z-index: 999;
  }
  #contPopupModx.overlay:target {
    visibility: visible;
    opacity: 1;
  }
  
  #contPopupModx .popupModxResources {
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 360px;
    position: relative;
    transition: all 5s ease-in-out;
  }
  
  #contPopupModx .popupModxResources img {
    width: 45px;
    margin-bottom: 15px;
  }
  #contPopupModx .popupModxResources .close {
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none !important;
    color: #333;
  }
  #contPopupModx .popupModxResources .close:hover {
    color: #2278c9;
  }
  #contPopupModx .popupModxResources .content {
    max-height: 30%;
    overflow: auto;
    text-align: center;
  }
  
  @media screen and (max-width: 700px){
    #contPopupModx .popupModxResources{
      width: 70%;
    }
  }
  </style>`);