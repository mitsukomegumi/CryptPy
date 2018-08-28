/*jshint esversion: 6 */

const remote = require('electron').remote;
const main = remote.require('./main.js');

var os = main.get_os();

if (os.includes("darwin")) {
    main.execute('/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"', (output) => {
        var typed = new Typed('.typed', {
            strings: [output],
            typeSpeed: 0
        });
    });
}

function close() {
    console.log("before closing");
    main.close_hacking_windows();
}

setTimeout(close, 7000);