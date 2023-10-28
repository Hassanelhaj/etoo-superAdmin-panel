import React from 'react'
import { lookupsCategories } from '../../../Data'
import SmCard from '../../utils/SmCard'

const Categories = () => {
  return (
    <div className='grid grid-cols-3 items-center gap-3 '>
{
    lookupsCategories.map((lookup)=>{
        return<SmCard key={lookup.id} data={lookup} />
    })
}
    </div>
  )
}

export default Categories