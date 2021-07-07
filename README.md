~~Lights, Camera, Action!~~ Redux, State, Action!

## Steps:

# 1. Creating store in "/app":
Creates store, which automatically configures redux devtools

# 2. Providing redux store to react:
By <Provider store={store} />

# 3. Creating slice and adding reducers:
By createSlice(string name, an initial state, and named reducer functions)
The state appears mutable, but uses immer under the hood, which in turn creates a draft, and updates the state
Actions are generated for the reducers(Woah, the redux-toolkit world is so different)

# 4. Adding to our component:
By useDispatch() and dispatch the imported actions
