# Twitter
Basic interface to create, split and view tweets made using MERN stack.

## Installation
1. Make sure MongoDB is running locally and ports 3000 and 4000 are free.
2. Clone the repo.
3. `npm install`
4. `npm start`

This will automatically open a browser tab with the website. 
Otherwise the website should be running on localhost:3000 and the backend server is running on localhost:4000

## Debug
If you face the following error - 

```
Error: Error watching file for changes: EMFILE
    at exports._errnoException (util.js:1036:11)
    at FSEvent.FSWatcher._handle.onchange (fs.js:1406:11)
```

Then please do `brew install watchman`. [Github Issue Link](https://github.com/facebook/jest/issues/1767)