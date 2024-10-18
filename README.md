# React + Vite + Redux Toolkit Learning Project

This project is a learning exercise that demonstrates how to set up a React application using Vite as the build tool and Redux Toolkit for state management. The application interacts with a dummy API to perform CRUD operations on products.

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Redux Implementation](#redux-implementation)

## Project Description

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules. The application allows users to fetch, add, update, and delete products using the [Dummy JSON API](https://dummyjson.com).

## Technologies Used

- React
- Vite
- Redux Toolkit
- RTK Query
- JavaScript

## Redux Implementation

The application utilizes Redux Toolkit for state management, which simplifies the process of managing global state by providing a set of tools for building, managing, and interacting with the state. The state is divided into slices, each responsible for managing a specific aspect of the application's state. The application uses RTK Query to handle data fetching and caching, making it easier to manage asynchronous data fetching and caching.

## API Endpoints

The application interacts with the following API endpoints:

- **Get All Products**
  - **Endpoint:** `GET /products`
  - **Description:** Fetches a list of all products.

- **Get Product by ID**
  - **Endpoint:** `GET /products/{id}`
  - **Description:** Fetches a single product by its ID.

- **Add New Product**
  - **Endpoint:** `POST /products/add`
  - **Description:** Adds a new product. Requires a JSON body with product details.

- **Update Product**
  - **Endpoint:** `PUT /products/{id}`
  - **Description:** Updates an existing product by its ID. Requires a JSON body with updated product details.

- **Delete Product**
  - **Endpoint:** `DELETE /products/{id}`
  - **Description:** Deletes a product by its ID.

