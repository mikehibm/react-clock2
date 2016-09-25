const cpx = require("cpx");
const dest = 'dist/lib/';

cpx.copy('node_modules/es6-shim/es6-shim.min.js', dest);
cpx.copy('node_modules/moment/min/moment.min.js', dest);
cpx.copy('node_modules/react/dist/react.js', dest);
cpx.copy('node_modules/react-dom/dist/react-dom.js', dest);
