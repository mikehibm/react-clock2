#!/usr/bin/env bash

DISTLIB=dist/lib/

cp node_modules/es6-shim/es6-shim.min.js $DISTLIB
cp node_modules/react/dist/react.js $DISTLIB
cp node_modules/react-dom/dist/react-dom.js $DISTLIB
