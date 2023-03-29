let supaVideo = document.getElementsByTagName("video")[0];

function removeSpeedNotification() {
    let old = document.getElementById('notification-container');
    if(old) old.remove();
}

function createNotBlock(speed) {
    let notificationContainer = document.createElement('div');
    notificationContainer.setAttribute('id', 'notification-container');
    notificationContainer.innerHTML = speed;
    document.body.appendChild(notificationContainer);
    setTimeout(function() {
        removeSpeedNotification();
    }, 3000);
}

function showNewSpeed() {
    let speed = supaVideo.playbackRate;

    let rsn = new Promise(function (resolve, reject) {
        resolve(removeSpeedNotification());
    });
    rsn.then(function() {
        createNotBlock(speed);
    });
}

// Слушаем нажатия клавиш на странице
document.addEventListener('keydown', function(event) {

    switch(event.keyCode) {
        // Если нажата клавиша "+"
        case 107:
            supaVideo.playbackRate = (supaVideo.playbackRate + 0.05).toFixed(2);
        break;
        // Если нажата клавиша "-"
        case 109:
            supaVideo.playbackRate = (supaVideo.playbackRate - 0.05).toFixed(2);
        break;
        // Если нажата клавиша "*" или "1"
        case 106:
        case 97:
            supaVideo.playbackRate = 1;
        break;
        // Если нажата клавиша "5"
        case 101:
            supaVideo.playbackRate = 1.5;
        break;
        // Если нажата клавиша "2"
        case 98:
            supaVideo.playbackRate = 2;
        break;
        // Если нажата клавиша "3"
        case 99:
            supaVideo.playbackRate = 3;
        break;
        default: ;
    }

    showNewSpeed();
  });
