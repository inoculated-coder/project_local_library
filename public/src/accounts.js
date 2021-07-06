function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id )
  return result;
}

function sortAccountsByLastName(accounts) {
accounts.sort((accountA,accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
return accounts

}

function getTotalNumberOfBorrows(account, books) {

  const accountId = account.id;
  let total = 0;
  books.forEach((book) => (book.borrows.forEach((borrow) => {
    if (accountId === borrow.id)
    {
      total++;
    }
  })));

  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id
  let author = authors.name
  let borrowedArray =[]            
    // needs to return array of all books with author imbedded, currently checked out by account
   books.forEach((book) => (book.borrows.forEach((borrow) => 
   {if (accountId === borrow.id && borrow.returned === false){
     borrowedArray.push(book)
   }})))
  
    borrowedArray.forEach((book) => {
      let author = authors.find((author) => author.id === book.authorId);
      book.author = author;
    })
    return borrowedArray  
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
