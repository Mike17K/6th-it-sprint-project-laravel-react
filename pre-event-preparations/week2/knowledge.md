## Introduction

Welcome to week 2 of IT Sprint preparations. During this week, we will be covering the fundamental knowledge needed to create the backend applications of our future APIs.

We will cover 4 topics:

- PHP programming language
- REST API
- MySQL
- MVC architectural design pattern

## PHP

During this section, you have to create this php file inside the `backend` folder. To run it, you will have to attach to a shell of the container, as described in the README. In order to run your PHP file, use the following command `php file_name.php`
We recommend that you use this method instead of downloading XAMPP, MAMPP, etc. since we have a wonderful docker container set up already.

[Here](https://www.youtube.com/watch?v=ZdP0KM49IVk&ab_channel=JakeWright) is a quick tutorial on the basics of PHP. PHP is the programming language used in the Laravel Framework (which we will be using during the event) and basic knowledge of PHP is needed in order to keep up with the backend sessions during the event itself.

Laravel adds a ton of functionality on it’s own but we will nevertheless need to write some of our own PHP code in order to create a fully functional API.

If you really want to go above and beyond in learning PHP, here is a more [extensive tutorial](https://www.youtube.com/watch?v=BUCiSSyIGGU&ab_channel=TraversyMedia) on PHP. **This tutorial is not mandatory and the basic tutorial mentioned at the beginning is sufficient enough in order for you to comprehend the backend part of the event itself. This is purely for those who want to learn more.**

### Task

After learning the basics of PHP, here is a small task for you to practice your newly acquired PHP skills:

**Task**: Create a PHP script that generates a personalized greeting message.

1. Declare two variables, `$name` and `$time`, and assign values to them.
1. Use the `date` function to get the current hour and store it in a variable, `$hour`.
1. Write an `if` statement that checks the value of `$hour` and assigns a greeting message to a variable, `$message`, based on the time of day. For example:
    1. If the hour is between 5am and 12pm, the message should be "Good morning, [Name]!"
    1. If the hour is between 12pm and 5pm, the message should be "Good afternoon, [Name]!"
    1. If the hour is between 5pm and 11pm, the message should be "Good evening, [Name]!"
    1. If the hour is between 11pm and 5am, the message should be "Good night, [Name]!"
1. Use string concatenation to combine the value of `$message` with the value of `$name` to create a personalized greeting message.
1. Use the `echo` statement to output the greeting message.

**After completing the task**, push it to your gitlab branch and ping me on discord for me to review it 😎

## REST API

During the event, we will be building a RESTful API. In order for you to understand what that means, here is a [short overview of what REST API is](https://www.youtube.com/watch?v=lsMQRaeKNDk&ab_channel=IBMTechnology) as well as a [basic overview of HTTP](https://www.youtube.com/watch?v=-Zea7GB2OwA&ab_channel=Codecademy), [HTTP Request types](https://www.youtube.com/watch?v=tkfVQK6UxDI&ab_channel=CuriousCode) and the usual, [non-mandatory, longer explanation video](https://www.youtube.com/watch?v=iYM2zFP3Zn0&ab_channel=TraversyMedia) (up until minute 18).

In order for you to practice sending HTTP requests and receiving response, we suggest that you download [Postman](https://www.postman.com/). It’s a tool very commonly used for sending HTTP requests.

If you want to practice using Postman, we suggest that you visit the following websites that provide free API endpoints where you can fetch, create and alter data:

- https://api.chucknorris.io/ (used only for fetching data)
- https://jsonplaceholder.typicode.com/ (the full HTTP experience)

### Task

1. Create a txt file on your branch where you will write down all the responses and  jokes 😀
1. Get the first random Chuck Norris joke and write it down in the document
1. Get all Chuck Norris Categories, pick one of the categories from the response and write down the first joke you get for that category inside the document
1. Copy-paste the response in the document when you use snake as a search term
1. Using the JSON placeholder API, write down the JSON body for a request that creates a post in your document and another one that updates it by changing it’s title

### SQL

Databases are an integral part of any backend application in order to store data and use it at a later date. We have provided you with [code-along crash course on MySQL](https://www.youtube.com/watch?v=9ylj9NR0Lcg&ab_channel=TraversyMedia) so that you can perfect your skills before the event.

As an alternative if you prefer a more text based experience, we recommend you use [W3Schools](https://www.w3schools.com/sql/default.asp). The parts that are relevant in the **SQL Tutorial** section are all the pages before *SQL Insert Into Select*, and in the **SQL Database** section until *SQL Check*.

**Important note:** During the event, we will use PostgreSQL instead of MySQL. Due to a lack of higher quality tutorials online, we decided to use MySQL but don’t worry about it too much when learning since most of the knowledge you acquire during crash course will be applicable on both databases.

### Task

1. Create a database named "bookstore".
2. Create a table named "books" with the following columns:
    - book_id (Primary Key, Integer)
    - title (String)
    - author (String)
    - publication_date (Date)
    - price (Float)
3. Insert the following data into the "books" table:

    | book_id | title                    | author                | publication_date | price |
    |:---|:---: |:---: |:---: |---: |
    | 1       | "The Great Gatsby"       | "F. Scott Fitzgerald" | 1925-04-10       | 10.99 |
    | 2       | "To Kill a Mockingbird"  | "Harper Lee"          | 1960-07-11       | 8.99  |
    | 3       | "Pride and Prejudice"    | "Jane Austen"         | 1813-01-28       | 9.99  |
    | 4       | "The Catcher in the Rye" | "J.D. Salinger"       | 1951-07-16       | 11.99 |
    | 5       | "1984"                   | "George Orwell"       | 1949-06-08       | 12.99 |

4. Write a SQL query that retrieves the following information from the "books" table:
    - The title, author, and publication date of all books
    - The average price of all books in the table
    - The title, author, and price of all books published before 1950
    - The title and price of the most expensive book in the table.

Write down all your SQL queries in a .sql file and upload them to your branch.

## MVC

Laravel, like a lot of frameworks and software out there, uses MVC as it’s architectural design pattern. Though not a coding skill by itself, it is very useful to have a basic understanding of what that actually means and how it benefits us. Here is a [concise video](https://www.youtube.com/watch?v=pCvZtjoRq1I&ab_channel=TraversyMedia) explainaing what MVC represents.
And as your last task for this week, I would like you to explore the following [website](https://laravel.com/docs/9.x). This is the holy grail which will be referenced a lot during the event. It’s Laravel documentation.

*P.S. You don’t need to read it entirely but please check out how it looks like and how it’s structured. A lot of things may seem incomprehensible at first, but that’s okay and you will get to understand the design decisions of the framework as we work our way through the event.*
