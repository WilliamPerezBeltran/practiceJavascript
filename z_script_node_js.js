const fs = require('fs');
const path = require('path');

function findUrls(directory) {
    const urlRegex = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/gi;
    const urls = [];

    function processFile(filePath) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const matches = fileContent.match(urlRegex);
        if (matches) {
            urls.push(...matches);
        }
    }

    function traverseDirectory(directoryPath) {
        const files = fs.readdirSync(directoryPath);

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                traverseDirectory(filePath);
            } else if (stats.isFile()) {
                if (filePath.endsWith('.js') || filePath.endsWith('.html') || filePath.endsWith('.css')) {
                    processFile(filePath);
                }
            }
        });
    }

    traverseDirectory(directory);
    return urls;
}

const directory = process.argv[2];
if (!directory) {
    console.error("Usage: node url_finder.js <directory>");
    process.exit(1);
}

const urls = findUrls(directory);
if (urls.length > 0) {
    console.log("Found URLs:");
    urls.forEach(url => console.log(url));
} else {
    console.log("No URLs found.");
}


// execute file
// execute file
// execute file

// node url_finder.js /path/to/directory
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.
// node url_finder.js /.