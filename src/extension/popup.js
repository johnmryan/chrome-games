// var app = chrome.runtime.getBackgroundPage();

function hello() {
  chrome.tabs.executeScript({
    file: 'script.js'
  }); 
}

document.getElementById('clickme').addEventListener('click', hello);
