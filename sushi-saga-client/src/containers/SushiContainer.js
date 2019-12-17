import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.fourSushi.map(aSushi => <Sushi sushi={aSushi} key={aSushi.id} onEatenValue={props.onEatenValue} eatenItems={props.eatenItems} />)}
        <MoreButton getNextFourSushi={props.getNextFourSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer