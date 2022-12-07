# Installations
I pushed only those files that I changed. If you want to run these files, first initiate the react library in any directory, then paste these files in the src folder.
Now install react, react-redux, and redux toolkit libraries. Once it is done, then run "npm start" in cmd.
# How to Manage State Using Redux Toolkit?
To understand how redux toolkit works, start with the file index.js. There are four main parts to use redux toolkit.
* **Store Creation:** Store is created using configureStore hook, provided by @reduxjs/toolkit. This step is carried out in store.js.
* **Provider:** The store is assigned to the function component, \<App />, using Provider tag given by react-redux. This step is carried out in index.js.
* **Slicing:** Each state variable, Counting and Concating, will have its own slice. Slice will be created using createSlice hook from @reduxjs/toolkit, once slice is created
then you will have to create action and reducer. All this is carried out in slices.js for Counting, and in slicesConcat.js for Concating. After that you will assign each 
reducer function to its corresponding state variables in store.js
* **Accessing State Variable and Changing State of a State Variable:** In order to change the state, you need to pass the action through useDispatch hook to reducer. The 
state of a state variable will be accessed using useSelector hook. useDispatch and useSelector hooks will be provided by react-redux library. 
