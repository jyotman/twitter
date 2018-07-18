# Twitter

# Debug
If you face the following error - 

```
Error: Error watching file for changes: EMFILE
    at exports._errnoException (util.js:1036:11)
    at FSEvent.FSWatcher._handle.onchange (fs.js:1406:11)
```

Then please do `brew install watchman`. [Github Issue Link](https://github.com/facebook/jest/issues/1767)