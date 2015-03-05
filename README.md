# AST Viewer

# Install

```
npm install --global jspm
make install
```

# Run

```
make server
```

Now visit `http://localhost:9876`.

## TODO

- Pull out the rendering of nodes and passing path into mixin(s)
- add Path support for a more complicated code example
- better support for errors when unknown node found
- add ability to "zoom in" on a section of the code (will require the ability to find some of the AST given the path of the component)
- generally test with more complex code examples
- have a few pre-generated code examples to load in
- spruce up the CSS!
- add the ACE editor or similar
- ability to fetch and load in a URL from GitHub or similar

