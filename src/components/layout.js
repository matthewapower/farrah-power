import React from "react"

import Menu from "../components/menu"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          padding: `0`,
        }}
      >
        <Menu message="Photos Worth Keeping*"/>
        <main
          style={{
            margin: this.props.contain ?  `0 5vw` : `0 auto`,
          }}
        >
          {children}
        </main>
        {/* <footer>
          © {new Date().getFullYear()}, Farrah Power
        </footer> */}
      </div>
    )
  }
}

export default Layout
