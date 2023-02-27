chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
	let url = new URL(item.url);
	let hostname = url.hostname;
    let filepath = item.filename;
    let ext = filepath.split('.').pop();
    let now = new Date();
    let date = now.getFullYear().toString() +
              now.getMonth().toString().padStart(2, '0') +
              now.getDate().toString().padStart(2, '0') +
              now.getHours().toString().padStart(2, '0') +
              now.getMinutes().toString().padStart(2, '0') +
              now.getSeconds().toString().padStart(2, '0');
	let Nfilename = hostname + '-' + date + '.' + ext;
    suggest({filename: Nfilename});
});