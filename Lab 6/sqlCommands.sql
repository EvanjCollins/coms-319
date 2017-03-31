/* Create Table
	Commands
*/
CREATE TABLE users (
    UserName VARCHAR(255),
    Password VARCHAR(255),
    Email VARCHAR(255),
    Phone INT(10),
    Librarian TINYINT,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    PRIMARY KEY (UserName)
);

CREATE TABLE books (
    BookId INT(10),
    BookTitle VARCHAR(255),
    Author VARCHAR(255),
    Availability TINYINT,
    PRIMARY KEY (BookId)
);

CREATE TABLE loanHistory (
    Username VARCHAR(255),
    BookId INT(10),
    DueDate DATE,
    ReturnedDate DATE,
    PRIMARY KEY (UserName)
);

CREATE TABLE shelves (
    ShelfId INT(10),
    ShelfName VARCHAR(255),
    PRIMARY KEY (ShelfId)
);

CREATE TABLE bookLocation (
    BookId INT(10),
    ShelfId INT(10),
    PRIMARY KEY (BookId)
);





