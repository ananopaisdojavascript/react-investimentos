/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import { helperFormatPercentage } from '../helpers/helpers'

export default function PercentageFormatter({ children = 0 }) {
    const classes = children >= 0 ? "text-green-900" : "text-red-900"
    return (
          <Fragment>
              <span className={classes}>{helperFormatPercentage(children)}</span>
          </Fragment>
      )
  }
