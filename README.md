# Burger Builder

**This is just for myself trying to build a demo project following React best practices with different tools**

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


## Tracking important structural change

27/02/2018 - Enable CSS Modules by `yarn eject`

28/02/2018 - Add prop-types modules for prop validation


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).