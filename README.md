# Burger Builder

**This is just for myself trying to build a demo project following React best practices with different tools**

## Run the project

1. `yarn`
2. `yarn start`

## Tracking important structural change

27/02/2018 - Enable CSS Modules by `yarn eject`

28/02/2018 - Add prop-types modules for prop validation

15/03/2018 - Improve performance by preventing unnecessary rendering using `shouldComponentUpdate`

04/04/2018 - Integrate [axios](https://github.com/axios/axios) with [Google Firebase](https://firebase.google.com/)

06/04/2018 - Global error handler using HOC (higher order component)

11/04/2018 - Prevent memory leak by unmounting unnecessary instances in componentWillUnmount life cycle

15/04/2018 - Integrate [React router dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) for multiple page routing

21/04/2018 - Add Contact Form, validate manually and save submitted data to Firebase db

04/05/2018 - Add Redux and React-Redux store and reducer

07/05/2018 - Add Enzyme and adapter with Jest. Unit test integration


## Planning

1. Component tree / Component Structure
2. Application State (Data)
3. Dumb / stateless component vs stateful Container

### 1. Component tree / structure

```
App
|
|___ Layout
    |
    |__ Toolbar
    |     Drawer Toggle
    |     Logo
    |     Nav item
    |__ SideDrawer
    |     Drawer Toggle
    |     Logo
    |     Nav item
    |
    |__ Backdrop
    |
    |__ {props.children}
      |
      |__ Different Pages
            Buger Builder
            |
            |__ Build Controls
            |     Ingredient add / remove control
            |     Ingredient add / remove control
            |     *
            |     OrderButton
            |__ Burger
            |     Ingredient
            |     Ingredient
            |     *
            |__ Modal
                  {props.children}
    
```

### 2. Application State (Data)

Basic State for Burger builder page

```
Ingredients
|
|__ 1: meat, 2: cheese etc

Purchased: true / false
TotalPrice: 12.45
```
### 3. Dumb / stateless component vs stateful Container
Burger Builder is a stateful component
Rest of the component can be dumb / state less component

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).