import { Divider, Input } from 'antd';
import { useState } from 'react';


function Search(props) {

    const [ inputSearch, setInputSearch ] = useState ("")

    const handleInputSearch = (event) => {

        setInputSearch(event.target.value)
        props.searchingFood(event.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={inputSearch} type="text" onChange={handleInputSearch} />
    </>
  )
}

export default Search