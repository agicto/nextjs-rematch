import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../shared/components/header'
// import styles from "./styles.styl"

class Home extends Component {
  render () {
    const { counter, increment, incrementBy, incrementAsync } = this.props

    return (
      <div>
        <Header />
        <h1 className='title'>Welcome to Next.js Home page!</h1>

        {/* <div className={styles.stark}>Hi stark</div> */}
        <div className={'title styles.stark'}>Hi stark</div>

      <p className='description'>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
        <h1> Counter </h1>
        <h3>The count is {counter}</h3>
        <p>
          <button onClick={increment}>increment</button>
          <button onClick={() => increment(1)}>
            increment (using dispatch function)
          </button>
          <button onClick={incrementBy(5)}>increment by 5</button>
          <button onClick={incrementAsync}>incrementAsync</button>
        </p>
        <br />
      </div>
    )
  }
}

const mapState = state => ({
  counter: state.counter
})

const mapDispatch = ({ counter: { increment, incrementAsync } }) => ({
  increment: () => increment(1),
  incrementBy: amount => () => increment(amount),
  incrementAsync: () => incrementAsync(1)
})

export default connect(
  mapState,
  mapDispatch
)(Home)
