# Getting Started with Create React App


## React-based web application that uses the following libraries:

React, react-dom/client : The main library used to build the web application.
styled-components: A library used to style the components and make the UI visually appealing.
react-loading: Easy to use loading animations for React projects. Uses SVG animations.

## The code consists of the following components:
### functional component:

Navbar: A component that displays a brand name and a button to get the user data.
App : The component that uses an API call to fetch user data ,set into state variable and pass it to UserCard (component) as a props.
UserCard: The main component that displays the user cards.displays a loading indicator while the data is being fetched.

### styled-components:

Card: A component that represents a single user card and displays the user's name, email, and avatar.
DisplayFlex: A styled-component that acts as a container for the UserCard components and displays them in a flexible grid layout.
Card: A styled-component that acts as a container for the user information in each UserCard component.
Avatar: A styled-component that displays the user's avatar image.
Name: A styled-component that displays the user's name.
Email: A styled-component that displays the user's email.

The App component uses the useState hooks to manage its state and handle the API call. When the component is first rendered, loading state is false and when the user click the (get users) button , the loading state is set to true, react-loading (component) rendered and the loading "bars" animation is display, for half sec because of setTimeout function.
the API call is made to fetch the user data. Once the data is fetched, the loading state is set to false and the data is passed to the UserCard components to be displayed.

The DisplayFlex component uses flexbox to create a flexible layout for the UserCard components. The Card, Avatar, Name, and Email components use styled-components to style their respective parts of the user cards. 
The Navbar component displays a brand name and a button that triggers the API call to get the user data.

--------------------------------------------------------------------------------------------------------------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
