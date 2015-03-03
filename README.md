# AST Viewer

# Install

```
npm install --global jspm
make install
```

# Run

You need to run two processes:

```
make server
```

```
make jsx
```

Now visit `http://localhost:9876`.

## TODO

- add Path support for a more complicated code example
- add ability to "zoom in" on a section of the code (will require the ability to find some of the AST given the path of the component)
- generally test with more complex code examples
- spruce up the CSS!
- add the ACE editor or similar
- ability to fetch and load in a URL from GitHub or similar

