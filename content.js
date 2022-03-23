function get_content() {
    setTimeout(function() {
        let source = document.querySelectorAll('xg-video-container > video > source');
        let screen = source[0].src
        console.log(screen)
        let rand = function() {
            return Math.random().toString(36).substr(2);
        };
        let token = function() {
            return rand() + rand();
        };
        let filename = token() + '.path'
        chrome.extension.sendMessage({
            url: screen,
            filename: filename
        })
      }, 10000);

    }
window.addEventListener('scroll', get_content());