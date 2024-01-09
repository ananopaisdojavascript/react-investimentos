import { Fragment } from 'react';
import Header from '../components/Header';
import Main from "../components/Main"
import { apiGetInvestments } from "../api/api"
import Investments from '../components/Investments';
import Investment from '../components/Investment';

export default function ReactInvestiments() {
  const backend = apiGetInvestments()
  console.log(backend)
  return (
    <Fragment>
      <Header title="React Investimentos" />
      <Main>
        <Investments>
          {
            backend.map(item => {
              return <Investment key={item.id} data={item}/>
            })
          }
        </Investments>
      </Main>
    </Fragment>
  )
}
