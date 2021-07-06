function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id);
  return result;
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
 return result;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  
  let notBorrowed = books.filter((book) => book.borrows[0].returned === true);
  
  
  let combinedList = [];
  combinedList.push(borrowed);
  combinedList.push(notBorrowed);
  return combinedList;
  }

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;

  const borrowers = borrows.map(({ id, returned })=> {
    const account = accounts.find(account => account.id === id);

    return {
      ...account,
      returned,
    };
  });

  return borrowers
    .sort((borrowerA, borrowerB) => {
      const companyA = borrowerA.company;
      const companyB = borrowerB.company;
      return companyA.localeCompare(companyB);
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
