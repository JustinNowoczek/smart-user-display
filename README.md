## [Preview Deployment](https://smartuserdisplay.netlify.app/)

## Steps Taken to Complete the Task

1. **Initialize Project**:

   - Initialized a new React project using Vite.
   - Integrated TypeScript from the start.

2. **API Integration**:

   - Referenced the JSONPlaceholder guide to understand the API.
   - Created a function to fetch all users.
   - Stripped away unnecessary properties and created a type to fit the required user objects.

3. **State Management**:

   - Set up the Redux store.
   - Added a custom hook to access the data.
   - Ensured users were fetched when the app component mounted.

4. **Table Component**:

   - Created a basic table component to display the list of users.
   - Pulled data directly from the store, allowing the table to be easily added anywhere in the app.
   - Focused on functionality, leaving styling for later.

5. **Component Structuring**:

   - Split the table into separate components for each user row.
   - Added a separate component for the row of filters.
   - Included filters inside the table to simplify aligning the columns later.

6. **Filtering Functionality**:

   - Implemented a filtered array in the store to manage filtered data.
   - Updated the filtered array whenever any value in the filters object changed.
   - Derived all categories from a single array to manage header updates from one place.

7. **Styling**:

   - Applied basic styles to:
     - Highlight the row being hovered.
     - Separate different sections of the table.
     - Visually link each field to its corresponding filter.

8. **Refactor Data Fetching**:
   - Refactored the data-fetching process by implementing an async thunk.
   - Added functionality to display a loading indicator while fetching data.
   - Implemented error handling to show an error message in case of failure.
