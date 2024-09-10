Steps taken to complete task:

Since the task requires using react, I have initialized a new react project with vite, already integrating typescript.

At first I used the json placeholder guide to understand the api I would be fetching from, and then created a basic function that would return all the users. I decided to strip all other properties from the fetched data, and created a type to fit the user objects I would need.

Since I was already able to pull the data, I created the redux store, adding a custom hook that gave access to the data, and made sure the users were fetched on the app component mounting.

I could now create a basic table in a separate component, that would display the list of users in a table, this could be added anywhere in the app, since it pulled data directly from the store. I decided to focus only functionality, before moving onto styling later.

Then, I split the table, so that each row displaying aa use had its own component, and created another to be the row of filters. I included the filters inside the table, so that aligning the columns would be easier later on.

Instead of displaying the list of users, I made another array in the store, this one is filtered when any value in the filters object (also added) changes, completing the functionality of the app. I also decided to derive all categories form one array, so that changing the list of headers is done in one place, and derived from there.

Added some basic styles, to show which row is being hovered, and to split the different sections of the table, as well as marking which section of the field matches its corresponding filter.
