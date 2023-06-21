import React from 'react'
import './A_CircleStage.scss'
import classnames from 'classnames'

export default class A_CircleStage extends React.Component {
  render() {
    const { type } = this.props

    const classes = classnames({
      A_CircleStage: true,
      [`${type}`]: true
    })

    return <div className={classes}></div>
  }
}
