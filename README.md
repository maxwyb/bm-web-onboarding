# Welcome to the BruinMeet team! 

We're super excited to have you on board as a developer and can't wait to see what amazing things we'll build together.

# Introduction

First and foremost, if you haven't done so already, perform all the [onboarding steps](https://github.com/mitrikyle/Bruin-Meet/blob/master/README.md) outlined on the main `BruinMeet` project repository's README.

This gist will serve as an onboarding guide/tutorial for the front-end side of our tech stack. BruinMeet's front-end is written using the following technologies:
* React ([docs](https://reactjs.org/docs/hello-world.html))
* Redux ([docs](https://redux.js.org/))
* Flow ([docs](https://flow.org/en/docs/))
* Styled Components ([docs](https://www.styled-components.com/docs))

All four of these technologies support our fundamental mission to build a codebase that is
* highly component-based
* reliable
* modular

[This Medium article](https://medium.com/bruinmeet/i-architected-bruinmeets-front-end-these-are-the-technologies-i-used-and-why-ec60a8b5b238) written by @bibekg describes how these technologies fit together to achieve this mission.

# Prerequisites
* basic web development knowledge (HTML/CSS/JS)
* basic knowledge of React
    - If you are coming in without any experience in React, go through the "Quick Start" section on the (super helpful) [React docs](https://reactjs.org/docs/hello-world.html), then come back and do this tutorial.
    - If you are coming in *with* React experience, this guide will give you a clear idea of how the other technologies listed above are used along with React.

# What This Tutorial Will Cover
* How to write a basic React component that renders differently based on props
* How to write styled components that can adapt to props
* How to write FlowType annotations, particularly for React components

# What This Tutorial Will NOT Cover
* How to connect a React component to a Redux store
    - Unfortunately, this requires a fair amount of overhead work for such a simple tutorial so it'd be a better use of your time to read through the React-Redux docs, do tutorials online, read through the existing bm-web codebase, and ask other team members about areas that you find confusing.

# Okay, so what am I gonna build for this tutorial?
For this tutorial, you are going to create two key components that exist on the BruinMeet website already, `Button`, and `LogInButton`. 

![Log In Button](http://i67.tinypic.com/11kxytl.png)

First, start by digging around the entire `src/` folder. There are three files you will need to modify as part of this tutorial, `App.js`, `Button.js`, and `LogInButton.js`.

*In `App.js`, all you have to do is uncomment the two lines that render `Button` and `LogInButton` after you write each of those components.*

In the latter two files, you will create two React components. 

_Note that the requirements for these components have been slightly simplified for this tutorial. After you're done, check out how the components are actually implemented in `bm-web/src/js/components`._

## Button
_A general-purpose button component that is used across the codebase wherever a button is needed._

### Requirements
1. is written in `src/js/components/Button.js`
2. includes the Flow comment flag at the top of the file 
    * [What's a Flow comment flag?](https://flow.org/en/docs/usage/#toc-prepare-your-code-for-flow)
3. the default export of the file is a Styled Component 
    * [What's a default export?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
    * [What's a Styled Component?](https://www.styled-components.com/docs/basics#getting-started)
4. the button has two styles that can be controlled by the props passed in to the component
    * the Edit button is the "primary" style
    * the Deactivate button is the "secondary" style
    * don't spend too much time trying to make the style match the below image perfectly; the main point of this exercise is to make sure you understand how to adapt the component's styles based on props
    * [How do I adjust styles based on the props?](https://www.styled-components.com/docs/basics#adapting-based-on-props)

_This is how the Button component should look. The Edit button has the "primary" style and the Deactivate button has the default "secondary" style._
![Profile Card Buttons](http://i64.tinypic.com/25sqsqt.png)

_This is how you should be able to use the Button component._
```javascript
<Button primary>Edit</Button> // renders a primary-styled button
<Button>Deactivate</Button> // renders a secondary-styled button
```

## LogInButton
_Looks simple on the surface, but the logic behind this component is fairly complex. Also, as you probably see coming, this component imports and uses the `Button` component from above._

### Requirements
1. is written in `src/js/components/LogInButton.js`
2. the default export is a Redux-connected React component that renders a primary-styled `Button`
    * [What does a Redux-connected component mean and how do I connect?](https://redux.js.org/basics/usage-with-react)
    * For now, just use the following function for `mapStateToProps()` to avoid adding too much overhead work to this task.

```javascript
const mapStateToProps = (state: ReduxStateType) => ({
  isLoggedIn: true 
  // manually change this to false if you need to test the button behavior for logged-out users
})
```

3. Provide the following props for the component
    * `isLoggedIn` -- a required boolean; this is a prop that we don't need to provide while using `<LogInButton />`. Instead, it's injected into the component's props by `react-redux` via the `mapStateToProps` function we wrote in step 2.
    * `override` -- an optional string that can be either `login`, `logout`, or `signup`
        * This prop can be used to override the behavior of the button instead of letting the button determine what to render and do when clicked based on `isLoggedIn`

4. Provide FlowType annotations.
    * [What are FlowType annotations?](https://flow.org/en/docs/types/)
    * [How do I annotate types for React component props?](https://flow.org/en/docs/react/components/#toc-class-components)

5. Adjust the button text based on the value of `props.isLoggedIn`
    * If `props.override` is provided, show the corresponding text
    * Otherwise,
        * If `props.isLoggedIn` is true, show "Log Out"
        * If it's false, show "Log In"

6. On click of the button, `window.alert(message)` to display a custom message.
    * If `props.override` is provided, alert a message based on its value
    * Otherwise,
        * If `props.isLoggedIn` is true, alert "Logging you out..."
        * If it's false, show "Logging you in..."

# I'm done, what do I do now?
Good work! 😄 Now, create a git repository of the project, upload it to GitHub, and shoot a message to the #dev Slack channel with a link to your repo. Someone on the team will review your code and get back to you asap.