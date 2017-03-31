/* Create Table
	Commands
*/
CREATE TABLE users (
    UserName VARCHAR(255),
    Password VARCHAR(255),
    Email VARCHAR(255),
    Phone BIGINT(10),
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
    UserName VARCHAR(255),
    BookId INT(10),
    DueDate DATE,
    ReturnedDate DATE,
    PRIMARY KEY (UserName, BookId)
);

CREATE TABLE shelves (
    ShelfId INT(10),
    ShelfName VARCHAR(255),
    PRIMARY KEY (ShelfId)
);

CREATE TABLE bookLocation (
    BookId INT(10),
    ShelfId INT(10),
    PRIMARY KEY (BookId, ShelfId)
);

/*Test
Commands*/

SELECT
    *
FROM
    users;

DROP TABLE users;

SELECT
    *
FROM
    books;

INSERT INTO books(BookId, BookTitle, Author, Availability)
	VALUES (22, 'Second Art', 'ME', 1);

SELECT
    *
FROM
    shelves;

INSERT INTO shelves(ShelfId, ShelfName)
	VALUES(1, 'Art');

INSERT INTO shelves(ShelfId, ShelfName)
	VALUES(2, 'Science');

INSERT INTO shelves(ShelfId, ShelfName)
	VALUES(3, 'Sport');

INSERT INTO shelves(ShelfId, ShelfName)
	VALUES(4, 'Literature');

SELECT
    *
FROM
    bookLocation;

INSERT INTO bookLocation(BookId, ShelfId)
	VALUES(123, 1);

INSERT INTO bookLocation(BookId, ShelfId)
	VALUES(22, 1);

INSERT INTO bookLocation(BookId, ShelfId)
	VALUES(555, 2);

INSERT INTO bookLocation(BookId, ShelfId)
	VALUES(65656, 3);

INSERT INTO bookLocation(BookId, ShelfId)
	VALUES(123333, 4);

SELECT
    *
FROM
    books
        INNER JOIN
    bookLocation ON books.BookId = bookLocation.BookId
        INNER JOIN
    shelves ON bookLocation.ShelfId = shelves.ShelfId
WHERE
    shelves.ShelfName = 'Art'
        AND Availability = 1;


INSERT INTO loanHistory(UserName, BookId)
	VALUES('testUser', 22);

SELECT
    *
FROM
    loanHistory;

SELECT
    *
FROM
    books
        INNER JOIN
    loanHistory ON books.BookId = loanHistory.BookId
WHERE
    loanHistory.UserName = 'testUser'
        AND loanHistory.ReturnedDate IS NULL;

SELECT
    *
FROM
    loanHistory
WHERE
    Username = 'testUser';

UPDATE books
SET
    Availability = 1
WHERE
    BookId = 100;
