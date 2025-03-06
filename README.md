# Forkify
🍕 a recipe web-app | javascript showcase
--
[![My Skills](https://skillicons.dev/icons?i=html,css,sass,javascript,npm,babel)](https://skillicons.dev) 
[![2025-03-06 20_03_56-]](https://github.com/user-attachments/assets/96b092e3-ff48-4d08-b0d9-14225059079e)


## See live DEMO: https://plokhikh-forkify.netlify.app/

## Overview:
Forkify is a recipe web app that allows users to search, view, modify, bookmark and add recipes.
Uses the [Forkify API](https://forkify-api.herokuapp.com/v2)



## Technologies:
- HTML, SASS, JavaScript (ES6+)
- MVC design pattern - architecture
- Parcel
- npm 'Fractional' module
- config.js for global configuration
- Publisher - Subscriber design pattern
- LocalStorage and Virtual-DOM

| User Stories                                                               | Features                                                                                                                                                                              |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Search for recipes                                                         | <ul><li>functionality: **fetch API requests** to retrieve search data <li>Display results with **pagination**<li>Display recipe with cooking time, serving and ingredients</ul>       |
| View recipes                                                               | <ul><li>**Virtual DOM** is used to update displayed data, instead or re-render the page</ul>                                                                                          |
| Update the number of servings                                              | <ul><li>Change serving functionality: update all ingredients according to current number of servings</ul>                                                                             |
| Bookmark recipes                                                           | <ul><li>Bookmarking functionality: display list of all bookmarked recipes</ul>                                                                                                        |
| Create recipes                                                             | <ul><li>Users can upload their own recipes</li><li>User recipes will automatically be bookmarked<li>User can only see their own recipes, not recipes from other users</ul>            |
| access bookmarks and recipes after leaving the app and coming back         | <ul><li>Store bookmark data in the browser using **local storage**</ul>                                                                                                               |

### Acknowledgments

- [Jonas schmedtmann](https://jonas.io)
