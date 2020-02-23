# Modular_React

Testing out a theory that involves module based imports for React components.

**The Idea:** Import and utilize components that are not held directly within the React code. This includes styling as well as functionality of the new components.

### Testing Points

- A shell component that consumes logic as well as styling utilizing fragments and pure components.
- Shell components that consume logic and styling based on their individual functionality, fragments are likely not needed, pure component will be the parent.
- Import an entire pre-built React component (logic and all) as part of an API call, utilize key-value pairs to key in logic as needed. Placed inside a fragment that is swapped inside a pure component main shell.

This is mainly just a theory, it could work and there could be a better way of doing it, but I've never seen it done, so I'm going to make it possible!
