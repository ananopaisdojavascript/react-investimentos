/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import MoneyFormatter from './MoneyFormatter'
import PercentageFormatter from './PercentageFormatter'

export default function Investment({ data }) {
  const { investment, reports } = data
  const { description, final, initial, totalPercentage } = investment
  return (
    <Fragment>
      <div className='border p-2 my-2'>
        <h2 className='text-center font-bold'>{description}</h2>
        <h3 className='text-center font-semibold'>Rendimento total: <MoneyFormatter>
          {final - initial}
        </MoneyFormatter>{' '}
          (<PercentageFormatter>{totalPercentage}</PercentageFormatter>)
        </h3>

        <ul>
          {reports.map(report => {
            const { month, year, value, percentage } = report
            const colorClass = percentage >= 0 ? "text-green-900 font-semibold" : "text-red-900 font-semibold"
            return <li key={report.id} className='flex flex-row items-center justify-start border-b-2'>
              <span>{month.toString().padStart(2, '0')}/{year}</span>
              <span className={`flex-1 ml-6 ${colorClass}`}>
                <MoneyFormatter ignoreColorValue>{value}</MoneyFormatter>
              </span>
              <span className={`${colorClass}`}>
                <PercentageFormatter>{percentage}</PercentageFormatter>
              </span>
            </li>
          })}
        </ul>
      </div>
    </Fragment>
  )
}
