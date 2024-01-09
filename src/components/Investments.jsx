/* eslint-disable react/prop-types */
import { Fragment } from 'react'

export default function Investments({ children = <p>Conteúdo</p> }) {
  return (
    <Fragment>
      <div className='border border-blue-500 p-2'>
        {children}
      </div>
    </Fragment>
  )
}
