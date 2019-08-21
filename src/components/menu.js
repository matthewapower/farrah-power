import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.ul`
  border: 1px solid black;
  list-style: none;
  padding: 0;
  background-color: rgba(255,255,255,0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 350px;
  margin: 1rem;
  z-index: 1;
  transition: all 0.5s ease;

  li:nth-child(n + 2) {
    transition: all 0.5s ease;
  }

  @media (max-width: 768px) {
    position: static;
    margin: 0;
    max-width: unset;
  }
`

let ToggleContainer = styled(Container)`
  transition: all 0.5s ease;

  li:nth-child(n + 2) {
    transition: all 0.5s ease;
  }
`

const LogoLink = styled(props => <Link {...props} />)`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 2px;
`

const Item = styled.li`
  border-bottom: 1px solid black;
  margin-bottom: 0;
  padding: .5rem;
  font-size: 14px;
  font-family: neue-haas-grotesk-display, sans-serif;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: ${props => props.col ? "start" : "center"};
  flex-direction: ${props => props.col ? "column" : "row"};

  &:last-child {
    border-bottom: none;
  }

  a {
    color: black;
    text-decoration: none;
  }
`
const SubList = styled.ul`
  margin-left: 0;
  overflow: scroll;
  margin: 0;
  transition: max-height 1s;
  max-height: ${props => (props.collapsed === true) ? "0" : "150px"};
  width: 100%;
`

const SubLink = styled.li`
  list-style-type: none;
  margin-left: 0;
  font-weight: 700;
`

const SocialLink = styled.a`
  padding: 10px;
`

const MessageTitle = styled.h1`
  position: fixed;
  top: 40px;
  right: 27px;
  font-family: big-caslon-fb, serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
`

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      collapsed: true,
      navHidden: false,
      scrollY: window.scrollY
    };
  }

  componentDidMount() {
    if (window.innerWidth > 768) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let currentScroll = window.scrollY;

    if (this.state.scrollY < currentScroll) {
      this.toggleNav('close')
    } else {
      this.toggleNav('open')
    }

    this.setState({scrollY: currentScroll});
  }

  toggleNav(status) {
    if (status === 'open') {
      ToggleContainer = styled(Container)`
        li:nth-child(n + 2) {
          visibility: visible;
        }
      `
    } else if (status === 'close') {
      ToggleContainer = styled(Container)`
        background-color: transparent;
        border: 0;

        li:first-child {
          margin-left: 1px;
          margin-top: 1px;
          border: 0;
        }

        li:nth-child(n + 2) {
          opacity: 0;
        }
      `
    }
  }

  toggleDrawer() {
    this.setState({collapsed: !this.state.collapsed});
  }

  render() {
    const dropDownState = this.state.collapsed;

    return(
      <div>
        <ToggleContainer>
          <Item><LogoLink to="/">Farrah Power</LogoLink></Item>
          <Item col>
            <div onClick={this.toggleDrawer}>Work</div> 
            <SubList collapsed={dropDownState}> 
              <SubLink><Link to="/joshua-tree">Joshua Tree Elopement</Link></SubLink>
              <SubLink><Link to="/habersham-mills-wedding">Habersham Mills Wedding</Link></SubLink>
              <SubLink><Link to="/east-hampton-wedding">East Hampton Wedding</Link></SubLink>
              <SubLink><Link to="/summerour-studio-wedding">Summerour Studio Wedding</Link></SubLink>
              <SubLink><Link to="/westside-warehouse-wedding">Westside Warehouse Wedding</Link></SubLink>
              <SubLink><Link to="/camp-boxwood-wedding">Camp Boxwood Wedding</Link></SubLink>
            </SubList>
          </Item>
          <Item><Link to="/about">About</Link></Item>
          <Item><Link to="/contact">Contact</Link></Item>
          <Item>
            <div>Maui 78 F</div>
            <div>
              <SocialLink href="https://www.facebook.com/farrahpower/">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.97686 2.94351H7.19666V0.883524C6.98661 0.855687 6.26283 0.792419 5.42011 0.792419C3.66128 0.792419 2.45667 1.86543 2.45667 3.83684V5.65135H0.515625V7.95428H2.45667V13.7496H4.83552V7.95428H6.69811L6.9942 5.65135H4.83552V4.06461C4.83552 3.39903 5.02026 2.94351 5.97686 2.94351Z" fill="black"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://www.pinterest.com/farrahpower/pins/">
                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.65202 0.438965C2.99737 0.438965 0.373779 2.20873 0.373779 5.07295C0.373779 6.89445 1.39838 7.9294 2.01935 7.9294C2.2755 7.9294 2.42298 7.21529 2.42298 7.01347C2.42298 6.77285 1.80977 6.26055 1.80977 5.25924C1.80977 3.17899 3.39324 1.70419 5.44244 1.70419C7.20444 1.70419 8.50847 2.7055 8.50847 4.54512C8.50847 5.91902 7.95736 8.49604 6.17208 8.49604C5.52782 8.49604 4.97671 8.03031 4.97671 7.36277C4.97671 6.38474 5.65978 5.43777 5.65978 4.42869C5.65978 2.71585 3.23024 3.02634 3.23024 5.09623C3.23024 5.53091 3.28457 6.01216 3.47862 6.40803C3.12157 7.94493 2.39193 10.2348 2.39193 11.8182C2.39193 12.3072 2.46179 12.7885 2.50836 13.2775C2.59633 13.3758 2.55235 13.3655 2.68689 13.3163C3.99092 11.531 3.94435 11.1817 4.53427 8.84533C4.85252 9.45078 5.6753 9.77678 6.32732 9.77678C9.07511 9.77678 10.3093 7.09886 10.3093 4.68484C10.3093 2.11558 8.08932 0.438965 5.65202 0.438965Z" fill="black"/>
                </svg>
              </SocialLink>
              <SocialLink href="http://instagram.com/farrahpower_">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.5199 4.90855C15.4624 3.69403 15.185 2.61822 14.2953 1.73186C13.4089 0.845506 12.3331 0.568096 11.1186 0.507201C9.86684 0.436157 6.11505 0.436157 4.86332 0.507201C3.65219 0.564713 2.57638 0.842123 1.68664 1.72848C0.796896 2.61484 0.522869 3.69065 0.461974 4.90516C0.39093 6.15689 0.39093 9.90869 0.461974 11.1604C0.519486 12.3749 0.796896 13.4507 1.68664 14.3371C2.57638 15.2235 3.6488 15.5009 4.86332 15.5618C6.11505 15.6328 9.86684 15.6328 11.1186 15.5618C12.3331 15.5042 13.4089 15.2268 14.2953 14.3371C15.1816 13.4507 15.459 12.3749 15.5199 11.1604C15.591 9.90869 15.591 6.16027 15.5199 4.90855ZM12.0387 4.89504C12.5394 4.89504 12.9454 4.49246 12.9454 3.98838C12.9454 3.48769 12.5394 3.08173 12.0387 3.08173C11.538 3.08173 11.1321 3.48769 11.1321 3.98838C11.1321 4.48907 11.5347 4.89504 12.0387 4.89504ZM7.99259 4.14734C5.84097 4.14734 4.10547 5.88284 4.10547 8.03446C4.10547 10.1861 5.84097 11.9216 7.99259 11.9216C10.1442 11.9216 11.8797 10.1861 11.8797 8.03446C11.8797 5.88284 10.1442 4.14734 7.99259 4.14734ZM7.99271 10.5616C6.60228 10.5616 5.46558 9.42828 5.46558 8.03446C5.46558 6.64065 6.5989 5.50732 7.99271 5.50732C9.38653 5.50732 10.5198 6.64065 10.5198 8.03446C10.5198 9.42828 9.38314 10.5616 7.99271 10.5616ZM12.4616 13.9447C13.128 13.6774 13.6389 13.1666 13.9027 12.5035C14.2422 11.6504 14.2234 9.78432 14.2111 8.57466C14.2091 8.374 14.2072 8.19141 14.2072 8.0345C14.2072 7.87755 14.2091 7.69499 14.2111 7.49439C14.2234 6.28538 14.2422 4.42147 13.9027 3.56549C13.6355 2.89903 13.1246 2.38819 12.4616 2.12431C11.6058 1.78666 9.73066 1.80464 8.52135 1.81624C8.32517 1.81813 8.14651 1.81984 7.99256 1.81984C7.83562 1.81984 7.65306 1.81799 7.45247 1.81596C6.24345 1.80371 4.37954 1.78482 3.52356 2.12431C2.8571 2.39157 2.34626 2.90241 2.08238 3.56549C1.74473 4.42128 1.76271 6.2964 1.77431 7.50571C1.77619 7.70189 1.77791 7.88055 1.77791 8.0345C1.77791 8.19144 1.77606 8.374 1.77403 8.57459C1.76178 9.78361 1.74289 11.6475 2.08238 12.5035C2.34964 13.17 2.86048 13.6808 3.52356 13.9447C4.37934 14.2823 6.25447 14.2643 7.46378 14.2527C7.65996 14.2509 7.83862 14.2492 7.99256 14.2492C8.14951 14.2492 8.33207 14.251 8.53267 14.253C9.74168 14.2653 11.6056 14.2842 12.4616 13.9447Z" fill="black"/>
                </svg>
              </SocialLink>
            </div>
          </Item>
        </ToggleContainer>
        <MessageTitle>{this.props.message}</MessageTitle>
      </div>
    )
  }
}

export default Menu
