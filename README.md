Steps taken to create/reasoning

Since the task requires using react, I have initialized a new react project with vite, already integrating typescript.

At first I used the json placeholder guide to understand the api I would be fetching from, and then created a basic function that would return all the users. I decided to strip all other properties from the fetched data, and created a type to fit the user objects I would need.

Since I was already able to pull the data, I created the redux store, adding a custom hook that gave access to the data, and made sure the users were fetched on the app component mounting.

I could now create a basic table in a separate component, that would display the list of users in a table, this could be added anywhere in the app, since it pulled data directly from the store. I decided to focus only functionality, before moving onto styling later.

