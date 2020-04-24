import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ShelfBooks from './ShelfBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './utils/BooksAPI'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books }) //shortcut for books:books
    })
  }

  updateBook = (book, shelf) => {
    console.log('updateBook: ', book, shelf)
    let prevState = JSON.parse(JSON.stringify(this.state.books))
    console.log('updateBook: prevState: ', prevState);
    let newState = prevState.map((bk) => (
      bk.id === book.id ? { ...bk, shelf: shelf } : bk
    ))
    console.log('updateBook: newState: ', newState);
    this.setState({ books: newState })

    // update the backend database
    BooksAPI.update(book, shelf)
  }

  addBook = (book, shelf) => {
    console.log('addBook')
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
           onAddBook={this.addBook}
          />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ShelfBooks
                      books={this.state.books}
                      shelf={'currentlyReading'}
                      onUpdateBook={this.updateBook}
                    />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ShelfBooks
                      books={this.state.books}
                      shelf={'wantToRead'}
                      onUpdateBook={this.updateBook}
                    />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ShelfBooks
                      books={this.state.books}
                      shelf={'read'}
                      onUpdateBook={this.updateBook}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
