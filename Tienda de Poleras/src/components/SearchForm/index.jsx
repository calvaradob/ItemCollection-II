import React from 'react'
import { Input } from 'semantic-ui-react'

function searchForm (props) {
    return(
      <Input
        action={{ icon: 'search', color: 'blue' }}
        placeholder='Buscar...' />
    )
}

export default searchForm;
