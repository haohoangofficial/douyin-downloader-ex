chrome.extension.onMessage.addListener(
    function (request) {
        downloadFile(request)
});

function downloadFile(options) {
    chrome.downloads.download({
        url: options.url,
        filename: options.filename
    })
}