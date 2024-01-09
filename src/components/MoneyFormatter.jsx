/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import { helperFormatMoney } from '../helpers/helpers'

export default function MoneyFormatter({ children = 0, ignoreColorValue = false }) {
  const classes = ignoreColorValue ? "" : children >= 0 ? "text-green-900" : "text-red-900"
  return (
        <Fragment>
            <span className={classes}>{helperFormatMoney(children)}</span>
        </Fragment>
    )
}
