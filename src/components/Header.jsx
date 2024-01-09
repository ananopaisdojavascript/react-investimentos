/* eslint-disable react/prop-types */
import { Fragment } from 'react';

export default function Header({title}) {
  return (
    <Fragment>
      <header>
        <div className="bg-orange-100 mx-auto p-4 text-xl font-bold">
          <h1 className="text-center">{title}</h1>
        </div>
      </header>
    </Fragment>
  );
}
