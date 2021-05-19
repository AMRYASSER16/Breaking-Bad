import React, { useState } from 'react'

const Search = props => {

  const [text, setText] = useState('')

  const getInputValueHandler = (event) => {
    const inputVal = event.target.value
    setText(inputVal);
    props.searchInput(inputVal)
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          onChange={getInputValueHandler}
          value={text}
        />
      </form>
    </section>
  )
}

export default Search;