# Book Store

## Getting started

- Clone repository
- In the terminal, run:

  - `npm install` to install dependencies
  - `npm run dev` to spin up localhost

  ## About the project

  This is a book store that has been developed using Next.js, Tailwind, and TypeScript. It supports the following features:

  - list of books with `title`, `author`, and `price` that is pulled from a `json` file for each book
  - functionality to add a book via a form which will update the book list `json` file (form also has some basic validation in place)
  - language toggle (the platform can toggle between both English and French)

  ### Development choices made

  #### Structure / Design:

  - the site has been built with the Header and Footer components present throughout all pages. The Header is fixed, so that when the user scrolls down, the Header remains at the top
  - in terms of pages, there is a home page, book list page, and an add book page containing the form to add a new book
  - the general design was kept basic, with the main goal in mind being to meet the necessary requirements as per the user stories
  - the site is mobile, tablet, and desktop friendly with a breakpoint at 767px (everything below 767px is for tablet down and everything above 767px is for desktop)
