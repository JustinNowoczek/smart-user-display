Steps taken to complete the task:
Since the task involved using React, I began by initializing a new React project with Vite, integrating TypeScript from the start.

I first referred to the JSONPlaceholder guide to understand the API I would be working with. From there, I created a basic function to fetch all the users, stripping away unnecessary properties and creating a type that fit the user objects I needed.

Once I was successfully pulling the data, I set up the Redux store and added a custom hook to access the data. I ensured that the users were fetched when the app component mounted.

Next, I created a basic table component to display the list of users. Since the data was being pulled directly from the store, this table could be easily added anywhere in the app. At this point, I focused on functionality and left styling for later.

I then split the table so that each user row had its own component, and added a separate component for the row of filters. I included the filters inside the table to simplify aligning the columns later.

Instead of displaying all the users, I added a filtered array to the store. This array updates whenever any value in the filters object (which I also added) changes, completing the app's core functionality. I also derived all categories from a single array, so updating the headers could be managed from one place.

I then applied basic styles to highlight the row being hovered, separate different sections of the table, and visually link each field to its corresponding filter.

Finally, I refactored the data-fetching process by implementing an async thunk, allowing the app to display a loading indicator while fetching data and show an error message in case of failure.
