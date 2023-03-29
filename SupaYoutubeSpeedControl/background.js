// Слушаем сообщения от content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Если сообщение содержит команду для изменения скорости воспроизведения
    if (request.command === "setPlaybackRate") {
      // Получаем активную вкладку
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // Отправляем сообщение со скоростью воспроизведения в content.js
        chrome.tabs.sendMessage(tabs[0].id, {command: "setPlaybackRate", playbackRate: request.playbackRate});
      });
    }
  });
  