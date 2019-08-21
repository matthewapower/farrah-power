import React from "react"

import { rhythm } from "../utils/typography"
import Menu from "../components/menu"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `100%`,
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Menu message="Photos Worth Keeping*"/>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Farrah Power
        </footer>
      </div>
    )
  }
}

export default Layout
