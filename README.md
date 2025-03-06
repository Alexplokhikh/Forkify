# Forkify
🍕 a recipe web-app | javascript showcase
--
[![My Skills](https://skillicons.dev/icons?i=html,css,sass,javascript,npm,babel)](https://skillicons.dev) 

##               See live DEMO: https://plokhikh-forkify.netlify.app/
![2025-03-06 20_03_56-](https://github.com/user-attachments/assets/e79ab3ae-70cc-423f-b1a7-aedcf0497fd9)

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

## Architecture:
![forkify-flowchart-part-3](https://github.com/user-attachments/assets/0d3fad1a-4757-4989-9f1b-2f059aacb096)

| Task                                                                       | Implementation                                                                                                                                                                        |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Search for recipes / Select Recipe                                         | <ul><li> **asynchronously** fetch results form **API** <li>Render search results<li>async load Recipe. Render again if updated</ul>                                                   |
| Pagination                                                                 | <ul><li>Render pagination buttons if results data > RES_PER_PAGE.<li>Render next/previous search results after button clicked</ul>                                                    |
| Update the number of servings                                              | <ul><li>Render recipe-ingredients data again on button click: use npm **fractional** module to nicer display</ul>                                                                     |
| Bookmark recipes                                                           | <ul><li>.Render recipe using Bind handler.<li>store bookmarks to **local storage**<li>.display list of all bookmarked recipes on hover.</ul>                                          |
| Create recipes                                                             | <ul><li>Display Form</li><li>Fetch form data on submit using 'POST' method.<li>async - upload a recipe.</ul>            |
| access bookmarks and recipes after leaving the app and coming back         | <ul><li>**local storage** for bookmarks and recipes added by user</ul>                                                                                                               |

### Acknowledgments
original design and idea, belong to:
- [Jonas schmedtmann](https://jonas.io)
implemented for practice, as part of a UDEMY Course project.
