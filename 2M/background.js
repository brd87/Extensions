chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
    let url = new URL(item.url);
    let hostname = url.hostname;
    let original = item.filename.split('/').pop()
    let Nfilename = hostname + '-' + original;
    suggest({filename: Nfilename});
});