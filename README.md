# Getting Started with Create React App

# Searchy Search Page #
This is a modern, minimal designed landing product page built using React and MUI. The page features a simple search bar with a search button next to it, allowing users to easily search for products using the Searchspring API. The clean and minimal design puts the focus on the search functionality and search results, making it easy for users to find what they're looking for.

In addition to the search bar, the page includes pagination with next and previous buttons, allowing users to easily navigate through search results. The use of MUI and React Icons provides a modern and intuitive user interface, while the integration with Axios and the Searchspring API ensures that the search functionality is fast and reliable.

## Getting Started ##
To get started, you need to clone the repository and install the necessary dependencies.

``` bash
git clone https://github.com/{your-github-username}/{your-repo-name}.git
cd {your-repo-name}
npm install 
```

Once you have installed the dependencies, you can start the development server by running the following command:

``` bash
npm start
```
This will start the development server and open the app in your default browser.

## Usage ##
To use the search page, simply enter your search query into the search bar and hit enter or click the search button. The app will display the search results below the search bar.

The app displays the product image using the "thumbnailImageUrl", the product "name" and "price". If the product has an "msrp" field and it's greater than "price" field, the app displays the "msrp" next to the price crossed out.

The app also includes pagination with next and previous buttons. You can change the page by clicking on the next or previous button. If you're on the first page, the previous button is disabled. If you're on the last page, the next button is disabled.

## Technologies Used ##
The app was built using the following technologies:

* React
* MUI
* React Icons
* Axios
* Searchspring API

## Acknowledgments ##
I would like to thank the team at Searchspring for providing the API and documentation used to build this search page.

## Deployed Page ##
You can view the site live at the following link - [Searchy](https://camball96.github.io/searchspring/)
