import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.main`
  max-width: 750px;
  margin: 0 auto;
  padding: 100px 0;

  @media (max-width: 768px) {
    margin-left: initial;
    max-width: 100%;
  }
`

const AboutImg = styled(props => <Img {...props} />)`
  max-width: 250px;
  width: 250px;
  height: 300px;
  display: block;
  margin: 0 auto;
`

const TextContainer = styled.div`
  max-width: 475px;
  margin: 0 auto 0;
  text-align: center;

  h1 {
    font-family: garamond-premier-pro-display, serif;
    font-weight: 300;
    font-style: normal;
    font-size: 100px;
    margin-bottom: 0.1em;
  }

  p {
    font-family: garamond-premier-pro, serif;
    font-weight: 400;
    font-style: normal;
  }
`

const Manifesto = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  article {
    background-color: #F5EFE8;
    padding: 60px;
    box-sizing: border-box;
    text-align: center;
  }

  h2 {
    font-family: garamond-premier-pro-display, serif;
    font-weight: 300;
    font-style: normal;
    font-size: 80px;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 20px;
    max-width: 500px;
  }
`;

const BottomLine = styled.h3`
  font-family: poppins, sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <Manifesto>
          <article>
            <h2>Approach</h2>
            <p>To be present &amp; cheer you on</p>
            <p>To be a respectful observer anticipating the beauty all around</p>
            <p>To kindly approach the day focused on real moments all while seeking out light &amp; interaction</p>
            <BottomLine>Mixing Modern editorial taste with the rawness of the moment</BottomLine>
            <svg width="70%" viewBox="0 0 253 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M145.848 9.27075C143.945 10.1178 142.254 10.7531 140.351 11.3884H140.139C138.236 12.0237 136.968 12.8707 136.545 14.9884C136.545 15.6237 136.122 16.0472 135.699 16.4707C135.276 16.8942 134.853 17.106 134.43 16.8942C134.007 16.6825 133.796 16.259 133.796 15.6237C134.007 14.5649 134.642 13.7178 135.699 13.0825C136.545 12.6589 136.968 11.8119 137.179 10.9648C137.602 9.05896 138.448 7.36486 139.716 5.88251C140.139 5.45898 140.351 5.24722 140.985 5.03545C141.831 4.82369 142.254 5.24722 142.254 6.09427C142.254 6.72956 141.619 7.36486 141.196 7.78839C140.985 8.00016 140.773 8.00016 140.562 7.78839C140.351 7.57663 140.351 7.36486 140.562 7.15309C140.773 6.94133 140.985 6.72956 140.985 6.30603C139.928 6.72956 138.448 9.05897 138.025 11.6001H138.236C141.408 10.3295 144.579 9.05897 146.905 6.30603C147.328 5.88251 147.751 5.24722 148.174 4.82369C148.385 4.61193 148.385 4.40016 148.597 4.18839C148.808 3.97663 149.02 3.76487 149.443 3.97663C149.865 4.1884 149.654 4.40016 149.443 4.82369C149.231 5.24722 148.808 5.88251 148.597 6.30603C148.385 6.5178 148.174 6.94133 148.174 7.36485C148.808 7.36485 149.654 7.1531 150.288 6.72957C151.557 6.09428 152.826 6.30604 154.094 6.09427C154.729 5.88251 154.94 6.5178 154.94 7.15309C154.729 7.78838 154.517 8.21192 154.517 9.05897C154.94 8.63544 155.574 8.42368 155.997 8.00015C156.42 7.78839 156.843 7.57663 157.266 7.78839C157.689 8.21192 157.689 8.63544 157.477 9.05897C157.266 9.90603 156.843 10.7531 156.632 11.6001C156.632 11.8119 156.42 12.2354 156.632 12.4472C157.054 12.659 157.266 12.2354 157.477 12.2354C158.746 11.3884 159.592 9.90603 160.437 8.63545C160.86 8.00016 161.283 7.36487 161.706 6.51781C161.918 6.09428 162.129 5.67074 162.763 6.09427C163.186 6.30604 163.186 6.72956 162.975 7.15309C162.552 8.21191 162.129 9.27074 161.706 10.1178C160.86 11.8119 160.015 13.506 158.957 15.2001C158.746 15.6236 158.323 16.0472 158.535 16.4707C158.535 16.6825 158.535 16.8942 158.323 16.8942C157.266 17.3178 156.843 18.3766 156.209 19.2237C154.517 21.1295 152.614 22.4001 150.077 23.0354C149.231 23.2472 148.174 23.4589 147.54 22.4001C146.905 21.5531 147.328 20.4942 147.962 19.6472C149.865 16.8942 152.403 14.9884 156.209 15.4119C157.266 15.6237 157.9 15.2001 158.323 14.3531C159.169 12.8707 160.015 11.1766 160.649 9.69427C160.015 10.3296 159.592 11.1766 158.957 11.8119C158.535 12.2354 158.112 12.659 157.689 12.8707C157.266 13.0825 156.632 13.506 156.209 13.0825C155.786 12.6589 155.786 12.2354 155.786 11.6001C155.997 10.9648 156.209 10.3295 156.42 9.90602C156.632 9.48249 156.843 9.05898 156.632 8.63545C155.997 8.84721 155.574 9.27074 155.151 9.69427C154.306 10.5413 153.671 11.3884 153.037 12.2354C152.826 12.659 152.614 12.8707 152.191 13.2943C151.98 13.506 151.768 13.506 151.557 13.2943C151.346 13.0825 151.346 12.8707 151.346 12.659C151.346 12.4472 151.557 12.0237 151.768 11.8119C152.403 10.5413 153.037 9.4825 153.671 8.21191C153.883 7.78838 154.094 7.36486 154.306 7.15309C154.306 6.94133 154.517 6.72957 154.306 6.72957C153.883 6.30604 153.46 6.72957 152.826 6.51781C152.403 6.51781 152.403 6.72956 152.403 7.15309C152.403 8.21191 152.191 9.05896 151.768 9.90602C151.346 10.5413 151.134 11.3884 150.5 11.8119C150.077 12.2354 149.654 12.4472 149.02 12.0237C148.385 11.6001 148.597 10.9648 148.808 10.5413C149.231 9.69426 149.654 8.8472 150.288 8.21191C150.5 8.00015 150.711 7.78839 150.711 7.57663C149.231 7.36487 148.174 8.00016 147.54 9.27075C146.694 10.9649 146.059 12.4472 145.214 14.1413C145.002 14.5648 144.791 14.7766 144.579 15.2001C144.368 15.4119 144.368 15.4119 144.157 15.4119C143.945 15.4119 143.945 15.2001 143.945 14.9884C143.945 14.3531 144.157 13.9296 144.579 13.506C144.579 12.4472 145.214 10.9649 145.848 9.27075ZM148.174 20.706C148.174 20.9178 147.962 21.1295 147.962 21.3413C147.54 22.4001 147.962 22.8236 149.02 22.8236C149.654 22.8236 150.288 22.6119 150.923 22.1883C153.037 21.3413 154.729 19.8589 155.997 17.9531C156.632 17.106 156.632 16.8942 155.574 16.8942C153.037 16.4707 149.654 17.9531 148.174 20.706ZM136.122 13.7178C135.487 14.1413 134.853 14.5648 134.642 15.4119C134.642 15.6237 134.43 16.0472 134.642 16.2589C135.065 16.4707 135.065 16.0472 135.276 15.8354C135.699 15.2001 136.122 14.5648 136.122 13.7178ZM149.02 11.8119C150.077 11.1766 150.711 10.1178 150.711 8.84721C150.077 9.90603 149.443 10.7531 149.02 11.8119Z" fill="black"/>
              <path d="M45.6251 8.00027C44.9907 8.84733 44.3564 9.48263 43.7221 10.3297C42.8763 11.1768 42.0306 12.0238 41.1848 12.6591C40.9733 12.8709 40.7619 12.8708 40.5505 13.0826C39.0704 13.7179 38.4361 13.5062 38.0132 11.812C37.3788 12.0238 37.1674 12.6591 36.956 13.0826C36.7445 13.5061 36.3216 13.7179 35.8988 13.5062C35.4759 13.2944 35.4759 12.8709 35.4759 12.4473C35.8988 11.1768 36.5331 9.90616 36.956 8.63557C37.5903 7.36498 38.0132 6.09439 38.6475 4.61204C38.8589 4.18851 38.8589 3.76497 39.4933 3.97674C40.1276 4.1885 39.7047 4.82379 39.4933 5.24732C38.6475 7.1532 37.8017 9.27086 37.1674 11.1767C37.1674 11.3885 36.956 11.812 36.956 12.0238C38.2246 10.7532 38.8589 9.0591 39.7047 7.78851C39.9161 7.36498 40.1276 6.51792 40.9734 6.94144C41.8191 7.36497 41.1848 8.00026 40.9734 8.42379C40.5505 9.48262 39.9161 10.3297 39.4933 11.3885C39.2818 11.6003 39.2818 11.812 39.4933 12.0238C39.7047 12.2355 40.1276 12.0238 40.339 12.0238C41.8191 11.1767 42.8763 10.1179 43.9335 8.84733C44.7793 7.78851 45.6251 6.51792 46.4708 5.4591C46.6823 5.03557 47.1051 4.82379 47.528 5.03556C47.9509 5.24732 47.9509 5.67085 47.9509 6.09438C47.7395 6.72968 47.528 7.36498 47.528 7.78851C46.6823 10.1179 46.0479 12.2356 45.2022 14.565C44.9907 15.2003 45.2022 15.412 45.6251 15.6238C46.2594 15.8356 46.6823 16.0473 47.3166 16.2591C47.7395 16.4708 47.9509 16.6826 47.7395 17.1062C47.528 17.5297 47.1051 17.5297 46.8937 17.3179C46.2594 17.1061 45.6251 16.8944 45.2022 16.4709C44.7793 16.2591 44.3564 16.2591 44.145 16.8944C43.5106 18.5885 42.6649 20.0708 41.6077 21.5532C40.339 23.4591 38.6475 24.9414 36.5331 25.7885C35.6873 26.212 34.6301 26.4238 33.9958 25.5767C33.15 24.7297 33.3615 23.8826 33.5729 22.8238C34.4187 19.8591 36.1102 17.5297 38.4361 15.8356C39.7047 14.7767 41.3962 14.1414 43.0878 14.7767C43.5106 14.9885 43.7221 14.7767 43.9335 14.3532C44.5678 12.2356 45.2022 10.1179 45.6251 8.00027ZM41.6077 19.012C42.0306 18.165 42.4534 17.5297 42.8763 16.6826C43.2992 15.8356 43.0878 15.8356 42.242 15.6238C40.7619 15.412 39.7047 15.8356 38.6475 16.6826C36.5331 18.3768 35.053 20.4944 34.2072 23.2473C33.9958 23.6708 33.9958 24.0944 33.9958 24.3061C33.9958 24.9414 34.4187 25.1532 35.053 25.1532C35.6873 24.9415 36.1102 24.9414 36.5331 24.5179C38.8589 23.2473 40.339 21.1297 41.6077 19.012Z" fill="black"/>
              <path d="M92.9873 10.5411C91.9301 11.3882 90.6615 11.3882 89.8157 12.0235C89.6043 12.0235 89.6042 12.2352 89.3928 12.2352C88.7585 12.447 88.1242 12.6588 87.4898 12.0235C87.0669 11.3882 87.2784 10.7529 87.4898 10.3294C87.9127 9.27056 88.547 8.21172 88.9699 6.94113C88.547 6.72937 88.3356 6.94113 88.1242 7.1529C86.6441 8.42348 85.3754 10.1176 84.3182 11.8117C84.1068 12.2353 83.8953 13.0823 83.261 12.6588C82.6267 12.2352 83.261 11.8117 83.4725 11.3882C84.3182 9.69409 85.5869 7.99995 86.2212 6.09407C86.4326 5.67054 86.6441 5.45879 87.067 5.67055C87.7013 5.88231 87.2784 6.30584 87.4898 6.72937C87.7013 6.51761 88.1242 6.30584 88.3356 6.09407C88.7585 5.88231 89.1814 5.67055 89.6042 5.88231C90.0271 6.09408 90.0271 6.72937 89.8157 7.1529C89.3928 8.21172 88.9699 9.05878 88.547 10.1176C88.3356 10.5411 87.9127 11.1764 88.3356 11.5999C88.7585 12.0235 89.3928 11.6 89.8157 11.3882C90.45 11.1764 90.6615 10.7529 91.0843 10.3294C92.1416 8.84703 93.1988 7.36467 94.8903 6.72937C95.1017 6.51761 95.3132 6.30584 95.5246 6.09407C95.7361 5.67054 95.9475 5.24702 96.5818 5.67055C97.0047 6.09408 96.7933 6.51761 96.5818 6.72937C95.9475 7.99996 95.3132 9.05879 94.6788 10.3294C94.0445 11.6 93.4102 12.8705 92.9873 14.1411C92.7759 14.5646 92.7759 14.9882 93.4102 14.9882C93.8331 15.2 94.256 15.4117 94.6788 15.8352C94.8903 16.047 95.1017 16.4705 94.6788 16.6823C94.4674 16.8941 94.0445 16.8941 93.8331 16.6823C93.6216 16.4705 93.4102 16.2588 93.1988 16.047C92.5644 15.4117 92.353 15.4117 91.7187 16.2588C90.8729 17.9529 89.8157 19.647 88.9699 21.3411C88.3356 22.6117 87.4898 23.6705 86.4326 24.3058C85.7983 24.7293 85.164 25.3646 84.3182 24.7293C83.4724 24.3058 83.6839 23.4588 83.8953 22.6117C84.9525 19.0117 87.2784 16.4705 90.6615 14.7764C91.2958 14.3529 91.7187 14.1411 91.9301 13.5058C92.1416 12.6588 92.5644 11.8117 92.9873 10.5411C92.9873 10.7529 92.9873 10.7529 92.9873 10.5411ZM90.2386 16.047C90.0271 16.047 90.0271 16.047 90.0271 16.047C89.8157 16.047 89.8157 16.047 89.6042 16.2588C87.4898 17.5293 86.0097 19.4352 84.7411 21.5529C84.5297 22.1882 84.1068 22.8235 84.1068 23.4588C84.1068 24.0941 84.3182 24.3058 84.9525 23.8823C85.3754 23.6705 85.7983 23.247 86.2212 22.6117C87.7013 20.9176 88.547 18.8 89.8157 16.6823C90.0271 16.6823 90.2386 16.4705 90.2386 16.047Z" fill="black"/>
              <path d="M118.784 8.63551C119.207 8.63551 119.418 8.21197 119.63 8.21197C120.053 8.00021 120.264 7.78845 120.687 8.00021C121.11 8.21198 121.11 8.63551 120.898 9.05904C120.898 9.2708 120.898 9.27081 120.898 9.69434C121.321 9.69434 121.321 9.2708 121.744 9.05904C122.167 8.63551 122.378 8.21198 123.013 8.00021C123.436 7.78845 123.858 7.57668 124.281 8.00021C124.704 8.42374 124.493 8.84727 124.07 9.05904C123.436 9.9061 122.801 10.3296 121.956 10.7532C121.11 11.1767 120.687 11.812 120.475 12.659C120.264 13.0826 120.264 13.7179 120.687 14.1414C120.898 14.3532 121.11 14.5649 120.687 14.9885C120.475 15.2002 120.053 15.2002 119.841 14.9885C119.63 14.7767 119.418 14.3532 119.207 14.1414C118.784 14.7767 118.572 15.412 118.572 16.0473C118.572 16.4708 118.361 16.8944 117.938 16.6826C117.515 16.6826 117.304 16.259 117.515 15.8355C117.515 15.412 117.727 15.2002 117.938 14.7767C118.784 13.0826 119.63 11.3885 120.475 9.69434C120.475 9.48258 120.687 9.2708 120.687 9.05904C120.475 8.84727 120.264 9.05905 120.053 9.27082C118.784 10.3296 117.727 11.3884 117.092 12.659C116.458 13.7179 116.035 14.7767 115.401 15.8355C115.189 16.0473 115.189 16.2591 114.978 16.4708C114.767 16.6826 114.555 17.1061 114.132 16.8943C113.709 16.6826 113.921 16.2591 114.132 16.0473C114.555 14.7767 115.401 13.7179 116.247 12.4473C116.881 11.6002 117.304 10.7531 117.727 9.90609C117.938 9.48256 117.938 9.27082 117.304 9.27082C116.247 9.27082 115.189 9.48258 113.921 9.69434C113.498 9.69434 113.286 10.1179 113.075 10.3296C112.441 12.0238 111.595 13.5061 110.961 15.2002C110.749 15.6237 110.749 16.2591 110.115 16.0473C109.481 15.8355 109.903 15.2002 110.115 14.7767C110.749 13.2943 111.383 12.0237 112.018 10.5414C112.018 10.3296 112.229 10.1179 112.229 9.90609C112.018 9.69432 111.806 9.69432 111.595 9.90609C111.172 10.1179 110.749 10.1179 110.115 10.3296C109.692 10.3296 109.269 10.7532 109.058 10.3296C108.846 9.69435 109.481 9.90611 109.903 9.69434C110.538 9.48258 111.383 9.27082 112.018 9.27082C112.441 9.27082 112.864 9.05903 113.075 8.42374C113.286 7.57668 113.921 6.94138 113.921 6.09432C113.921 5.67079 114.132 5.24727 114.767 5.45904C115.401 5.6708 114.978 6.09433 114.978 6.51786C114.767 7.15316 114.344 7.78844 114.132 8.42374C113.921 8.84727 114.132 9.05904 114.555 8.84728C115.824 8.63551 117.092 8.42374 118.361 8.21197C118.784 8.21197 118.784 7.78845 118.995 7.57669C119.418 6.94139 120.053 6.09433 120.475 5.45904C120.687 5.24727 120.898 4.82373 121.321 5.0355C121.744 5.24726 121.321 5.6708 121.11 5.88256C120.687 6.51786 120.053 7.15316 119.63 7.78845C118.995 8.21198 118.995 8.42375 118.784 8.63551Z" fill="black"/>
              <path d="M233.385 12.8707C231.904 12.8707 230.847 13.0824 229.579 13.0824C229.156 13.0824 228.944 13.5059 228.944 13.7177C228.521 14.7765 228.099 15.8353 227.676 16.8942C227.676 17.1059 227.464 17.3177 227.464 17.5295C227.253 17.7412 227.041 17.953 226.83 17.7412C226.618 17.7412 226.407 17.3177 226.407 17.1059C226.618 16.4706 226.83 15.8353 227.041 15.2C227.253 14.5647 227.676 13.9295 227.887 13.2942C227.253 13.0824 226.618 13.2942 226.196 13.0824C225.984 12.8706 225.773 13.2942 225.773 13.506C225.35 14.5648 224.715 15.4118 224.293 16.4706C224.293 16.6824 224.081 17.1059 223.87 17.3177C223.658 17.5294 223.447 17.953 223.024 17.7412C222.601 17.5295 222.813 17.1059 222.813 16.8942C222.813 16.4706 223.235 16.0471 223.447 15.6236C224.081 14.5648 224.715 13.5059 225.138 12.6589C225.35 12.4471 225.35 12.0236 225.561 11.6001C225.561 11.3883 225.773 11.1765 225.561 10.9648C225.35 10.753 225.138 10.9648 224.927 10.9648C223.87 11.6001 223.024 12.2354 222.601 13.2942C221.755 14.7765 220.91 16.0471 220.275 17.5295C220.064 17.953 219.852 18.3765 219.429 18.5883C219.218 18.8 219.007 18.8 218.795 18.5883C218.584 18.3765 218.372 18.1647 218.584 17.953C218.584 17.5295 218.795 17.3177 218.795 17.1059C219.429 15.8354 220.064 14.5648 221.121 13.506C222.178 12.4471 222.813 11.3883 223.447 10.1177C223.658 9.27066 224.081 9.27065 224.715 9.90594C224.927 10.1177 225.138 10.1177 225.35 10.1177C226.407 9.90595 226.83 10.3295 226.618 11.3883C226.618 11.6001 226.407 12.0236 226.407 12.2354C226.407 12.2354 226.407 12.2354 226.618 12.2354C228.521 12.2354 228.521 12.2354 229.367 10.3295C229.579 9.6942 229.79 9.05891 230.636 9.27067C230.847 9.27067 231.059 9.0589 231.27 8.84713C231.904 8.21184 232.539 7.78831 233.385 7.15301C233.596 6.94125 233.807 6.94126 234.23 6.72949C234.442 6.72949 234.653 6.72949 234.653 6.94125C234.653 7.15302 234.653 7.36477 234.442 7.36477C234.23 7.57654 233.807 7.78831 233.596 7.78831C231.905 8.63537 230.847 10.1177 229.79 11.6001C230.002 11.8118 230.424 11.8118 230.636 11.8118C231.693 11.8118 232.75 11.6001 234.019 11.6001C234.865 11.6001 235.288 12.2354 235.076 12.8707C234.442 14.1412 233.807 15.4118 232.75 16.4706C232.539 16.6824 232.539 16.6824 232.327 16.8942C231.904 17.1059 231.482 17.1059 231.27 16.8942C231.059 16.6824 231.059 16.2589 231.059 15.8353C231.27 15.2 231.693 14.7765 231.904 14.353C232.327 14.1412 232.75 13.7177 233.385 12.8707ZM233.385 14.5648C232.75 14.9883 232.539 15.6236 232.327 16.0471C232.75 15.8354 233.173 15.2001 233.385 14.5648Z" fill="black"/>
              <path d="M14.1195 8.63538C13.908 8.42362 13.4851 8.63538 13.2737 8.63538C11.7936 9.05891 10.3135 9.48243 8.83344 10.1177C8.41055 10.3295 7.98767 10.5412 7.77623 10.9648C7.35335 12.2354 6.93047 13.2942 6.0847 14.353C5.23894 15.2001 4.39317 16.0471 3.33596 16.4707C2.4902 16.8942 1.43299 16.8942 0.798668 16.0471C-0.0470971 15.4119 -0.0470995 14.353 0.164342 13.506C0.375783 12.4472 1.22155 11.8119 2.06731 11.3883C3.33596 10.753 4.81605 10.3295 6.29614 9.90595C7.1419 9.69419 7.56479 9.27066 7.77623 8.4236C8.41055 6.51772 8.83343 4.40008 10.1021 2.70596C10.525 2.07067 10.9479 1.43537 11.7936 1.01184C12.6394 0.588307 13.4851 0.588316 14.1195 1.43538C14.3309 1.85891 14.7538 2.49419 14.9652 2.91772C15.1767 3.12949 14.9652 3.34126 14.7538 3.55302C14.3309 3.76479 14.1195 3.55303 14.1195 3.34126C13.908 3.1295 13.908 2.70596 13.6966 2.4942C13.0623 1.43538 12.6394 1.43538 11.7936 2.28244C11.1593 3.1295 10.525 3.97655 10.1021 5.03537C9.6792 6.09419 9.25632 7.36478 8.83344 8.4236C8.83344 8.63537 8.62199 8.84714 8.83344 9.0589C9.04488 9.27067 9.25632 9.0589 9.46776 9.0589C10.7364 8.63537 12.0051 8.21185 13.2737 7.78832C13.4851 7.57655 13.908 7.57656 14.1195 7.57656C14.9652 7.57656 15.3881 8.00008 15.3881 8.84714C15.3881 9.05891 15.3881 9.27066 15.1767 9.48243C14.7538 10.753 14.1195 12.0236 13.6966 13.2942C13.4851 13.7177 13.2737 14.353 12.4279 14.1412C12.0051 13.9295 11.7936 13.2942 12.4279 12.4472C12.8508 11.6001 13.2737 10.753 13.908 9.90595C14.1195 9.27066 14.1195 9.05891 14.1195 8.63538ZM6.29614 12.4472C6.50758 12.2354 6.71902 11.8118 6.93046 11.1766C7.1419 10.753 7.14191 10.5413 6.50758 10.5413C5.23894 10.9648 3.75885 11.1766 2.70164 11.8119C2.27876 12.0236 1.85587 12.2354 1.64443 12.6589C1.01011 13.2942 1.01011 14.353 1.64443 14.9883C2.06731 15.4119 2.70164 15.6236 3.5474 15.2001C4.60461 14.7765 5.45037 13.7177 6.29614 12.4472Z" fill="black"/>
              <path d="M175.026 12.6589C174.392 13.2942 173.757 13.7177 173.335 14.353C172.912 14.7766 172.489 14.9883 171.854 15.2001C171.432 15.4119 171.009 15.2001 170.797 14.9883C170.586 14.5648 170.586 14.1413 170.797 13.9295C171.854 12.0236 173.335 10.5413 175.449 10.1177C176.083 9.90596 176.506 9.90597 176.929 9.27068C177.14 9.05891 177.352 8.84714 177.563 8.84714C177.986 9.0589 177.775 9.48244 177.775 9.6942C177.352 10.5413 176.718 11.3883 176.718 12.4472C176.718 12.6589 176.506 13.0824 176.506 13.2942C176.506 13.9295 176.718 13.9295 177.14 13.7177C177.563 13.506 177.986 13.0825 178.198 12.8707C179.255 11.6001 180.312 10.5413 181.369 9.27068C181.792 8.63538 182.427 8.21184 182.849 7.78831C183.695 7.15301 184.329 7.57653 184.541 8.4236C184.964 10.3295 183.695 12.6589 181.581 12.8707C181.369 12.8707 180.946 12.8707 180.524 13.0824C182.215 13.506 183.695 13.506 185.175 13.0824C185.598 13.0824 186.021 12.8707 186.232 12.8707C186.444 12.8707 186.655 12.8707 186.867 13.2942C186.867 13.506 186.867 13.7177 186.444 13.7177C183.907 13.9295 181.581 14.9883 179.255 13.0824C178.832 12.8707 178.621 12.8707 178.409 13.2942C177.986 13.7177 177.563 13.9295 177.14 14.353C176.083 14.7766 175.449 14.353 175.449 13.2942C175.238 13.0824 175.449 12.8707 175.026 12.6589ZM179.889 12.0236C182.215 12.4471 183.907 11.1766 183.695 9.0589C183.695 8.63537 183.695 8.21184 183.061 8.63537C181.792 9.48244 180.946 10.753 179.889 12.0236ZM175.449 10.9648C174.815 10.753 174.392 10.9648 174.18 11.1766C173.123 11.8119 172.277 12.6589 171.643 13.7177C171.432 13.9295 171.22 14.1413 171.432 14.353C171.643 14.5648 171.854 14.353 172.066 14.1413C173.546 13.506 174.603 12.4471 175.449 10.9648Z" fill="black"/>
              <path d="M29.7671 9.48223C30.1899 9.0587 30.6128 8.63518 31.0357 8.21165C31.4586 7.78812 31.67 7.57635 32.0929 7.36458C33.1501 6.94105 33.7844 7.57636 33.7844 8.63519C33.7844 9.27048 33.573 9.694 33.3616 10.1175C32.7272 12.0234 31.4586 13.294 29.5556 14.141C29.1327 14.3528 28.7098 14.5646 28.4984 14.3528C27.8641 14.1411 27.4412 14.5646 27.2298 14.9881C26.5954 16.2587 25.7497 17.3175 25.1153 18.7999C25.1153 19.0117 24.9039 19.2234 24.6924 19.4352C24.481 19.6469 24.2696 19.6469 24.0581 19.6469C23.8467 19.4352 23.8467 19.2234 23.8467 19.0116C23.8467 18.7999 23.8467 18.5881 24.0581 18.5881C25.9611 14.7764 27.6526 10.7528 29.9785 7.15282C29.9785 6.94106 30.1899 6.94106 30.1899 6.7293C30.4014 6.51754 30.6128 6.094 31.0357 6.30576C31.4586 6.51753 31.4586 6.94106 31.2471 7.15282C31.0357 7.57635 30.8243 8.21166 30.4014 8.63519C29.9785 8.63519 29.7671 8.84694 29.7671 9.48223ZM29.3442 11.8117C29.1327 12.0234 29.1327 12.2352 28.9213 12.447C28.7098 12.6587 28.4984 12.8705 28.7098 13.294C28.9213 13.5058 29.3442 13.294 29.5556 13.294C29.767 13.294 29.9785 13.0822 30.1899 12.8705C31.4586 12.0234 32.3043 10.9646 32.7272 9.48223C32.9387 9.0587 33.1501 8.63518 32.7272 8.21165C32.3043 7.99988 31.8815 8.42342 31.67 8.63519C30.8243 9.69401 29.9785 10.7528 29.3442 11.8117Z" fill="black"/>
              <path d="M21.5206 10.3294C22.155 9.90587 22.3664 9.48233 22.7893 8.84704C23.635 7.99998 24.2694 7.15292 25.3266 6.72939C25.9609 6.51762 26.5952 6.30586 27.0181 6.72939C27.6524 7.15292 27.6524 7.7882 27.441 8.4235C27.0181 10.3294 26.1724 11.8118 25.538 13.5059C25.3266 13.9294 25.1151 14.1412 24.6923 13.9294C24.2694 13.7176 24.2694 13.5058 24.2694 13.0823C24.2694 12.6588 24.6923 12.2353 24.9037 11.8117C25.538 10.7529 26.1723 9.69408 26.3838 8.4235C26.3838 8.21173 26.5952 7.78822 26.3838 7.57645C25.9609 7.36469 25.7495 7.57645 25.3266 7.78821C23.8465 8.63527 23.0007 9.90586 22.155 11.1764C21.5206 12.0235 20.8863 13.0823 20.0405 14.1411C19.8291 14.3529 19.6177 14.7765 19.1948 14.5647C18.7719 14.3529 18.9833 13.9294 18.9833 13.5059C19.6177 12.447 20.0405 11.3882 20.252 10.1176C20.252 9.90586 20.4634 9.69408 20.4634 9.48232C20.4634 9.27056 20.6749 8.84704 20.252 8.84704C20.0405 8.84704 19.8291 9.0588 19.6177 9.0588C18.5605 10.1176 17.7147 11.3882 16.8689 12.6588C16.6575 12.8706 16.6575 13.0823 16.446 13.2941C16.2346 13.5059 16.0232 13.5059 15.8117 13.5059C15.6003 13.2941 15.3888 13.0823 15.6003 12.8706C15.8117 12.6588 15.8117 12.2353 16.0232 12.0235C16.8689 10.5411 17.7147 9.0588 18.5605 7.57645C18.9833 6.94116 19.1948 6.94114 19.6177 7.36467C19.8291 7.57644 19.8291 7.57645 20.0405 7.57645C21.0978 7.78822 21.3092 7.99997 21.3092 9.0588C21.5206 9.27056 21.3092 9.6941 21.5206 10.3294Z" fill="black"/>
              <path d="M72.8996 12.6589C72.2653 13.0824 71.8424 13.2942 71.4196 13.7177C70.9967 13.9295 70.5738 14.353 70.1509 14.353C69.0937 14.5648 68.2479 13.9295 68.4594 12.8707C68.6708 11.8119 68.6708 10.5413 69.728 9.69423C70.3623 9.2707 70.7852 8.6354 71.2081 8.00011C71.4196 7.57658 71.8424 7.36481 72.2653 7.15305C72.6882 6.94128 73.1111 6.94128 73.534 7.36481C73.9568 7.78834 73.7454 8.21188 73.534 8.63541C73.3225 9.05894 72.8996 9.27069 72.4768 9.48245C72.0539 9.69422 71.631 10.1178 71.2081 10.1178C69.9395 10.3295 69.5166 11.3884 69.3051 12.4472C69.3051 12.6589 69.0937 13.0825 69.5166 13.2942C69.728 13.506 70.1509 13.506 70.5738 13.2942C72.0539 12.6589 73.1111 11.6001 73.9569 10.1178C75.0141 8.42364 76.0713 6.72952 77.1285 5.0354C77.3399 4.82364 77.3399 4.61189 77.5514 4.40012C77.7628 3.97659 77.9742 3.55306 78.3971 3.76482C79.0315 3.97659 78.6086 4.61188 78.3971 4.82364C76.917 7.36482 75.4369 9.906 74.3797 12.4472C74.3797 12.6589 74.1683 12.6589 74.1683 12.8707C73.9569 13.0825 73.9568 13.506 73.534 13.2942C73.1111 13.2942 73.1111 12.8707 73.1111 12.6589C73.1111 13.0824 72.8996 13.0824 72.8996 12.6589ZM72.8996 8.00011C72.2653 8.21187 72.0539 8.42364 71.631 9.05893C72.2653 9.05893 72.6882 8.6354 72.8996 8.00011Z" fill="black"/>
              <path d="M245.013 13.5061C245.436 13.0826 245.647 12.659 246.07 12.0237C247.55 9.90609 249.03 8.00022 250.51 5.88256C250.722 5.45903 250.933 5.24727 251.356 5.6708C251.779 5.88257 251.568 6.3061 251.356 6.51787C248.396 10.1179 245.859 14.1414 243.11 17.9532C242.899 18.1649 242.687 18.3767 242.476 18.8002C242.264 19.012 242.053 19.012 241.841 19.012C241.63 18.8002 241.63 18.5885 241.63 18.3767C241.841 17.9532 242.053 17.5296 242.264 17.3179C242.899 16.0473 243.533 14.7767 244.167 13.5061C244.167 13.2944 244.379 13.0826 244.167 12.8708C243.956 12.6591 243.744 12.8708 243.533 13.0826C243.11 13.5061 242.476 13.9297 242.264 14.5649C241.841 15.2002 241.841 15.6237 242.053 16.259C242.264 16.4708 242.264 16.8944 242.053 17.1061C241.841 17.3179 241.418 17.1061 241.207 16.8943C240.784 16.4708 240.784 16.0473 240.784 15.6238C240.996 14.3532 242.476 12.4473 243.744 12.0237C244.59 11.3884 245.013 12.0238 245.013 13.5061Z" fill="black"/>
              <path d="M66.9801 7.78826C67.1915 8.00002 67.403 8.00002 67.6144 8.00002C67.8259 8.00002 68.0373 8.21178 68.0373 8.42354C68.0373 8.84707 67.8259 8.84708 67.6144 8.84708C66.3458 8.63532 65.9229 9.48236 65.5 10.5412C65.0771 11.3882 64.6542 12.4471 64.2314 13.2941C64.0199 13.9294 63.597 14.5647 63.597 15.2C63.597 15.6235 63.3856 16.0471 62.7513 15.8353C62.3284 15.6235 62.1169 15.2 62.3284 14.9883C62.7513 13.9294 63.1742 13.0824 63.597 12.2353C63.8085 11.6 64.2314 10.9647 64.6542 10.3294C64.8657 10.1177 65.0771 9.90591 64.8657 9.69414C64.6542 9.48238 64.2314 9.69414 64.0199 9.69414C62.9627 9.90591 61.9055 10.3294 61.0597 10.753C60.6369 10.9647 60.214 11.1765 60.0025 10.5412C59.7911 10.1177 60.214 9.90591 60.6369 9.69414C62.1169 9.27061 63.3856 8.63531 64.8657 8.42354C65.5 8.42354 65.7115 8.00002 65.9229 7.5765C66.1343 6.9412 66.3458 6.51767 66.5572 5.88237C66.7687 5.45884 66.9801 5.24707 67.403 5.24707C67.8259 5.45884 67.8259 5.88236 67.6144 6.30589C67.403 6.94119 67.1915 7.36473 66.9801 7.78826Z" fill="black"/>
              <path d="M202.302 16.4708C202.514 16.6826 202.725 16.4708 202.937 16.6826C203.148 16.6826 203.36 16.8944 203.148 17.1061C202.937 17.5297 202.514 17.7414 201.879 17.5297C201.457 17.5297 201.245 17.1061 201.245 16.6826C201.245 16.2591 201.457 16.0473 201.457 15.8355C202.091 14.3532 202.725 13.0826 203.571 11.6002C203.571 11.3884 203.782 11.3885 203.571 11.1767C203.148 10.9649 202.725 11.1767 202.302 11.1767C202.091 11.1767 201.668 11.1767 201.668 10.7532C201.668 10.5414 201.879 10.3296 202.091 10.3296H202.302C203.994 10.5414 204.84 9.48257 205.474 8.00021C205.474 7.78844 205.474 7.78845 205.685 7.57668C205.897 7.15315 206.108 6.94138 206.531 7.15314C206.954 7.36491 206.954 7.78844 206.531 8.21197C206.32 8.42374 206.108 8.6355 205.897 9.05904C205.685 9.2708 205.474 9.69432 205.897 9.90608C206.32 10.1178 206.108 10.5414 205.685 10.7532C204.84 10.7532 204.417 11.3884 203.994 12.0237C203.782 13.7179 202.937 15.2002 202.302 16.4708Z" fill="black"/>
              <path d="M216.68 16.4705C217.103 16.2587 217.526 15.8352 217.737 15.6235C218.583 14.3529 219.429 12.8705 220.274 11.5999C220.486 11.1764 220.697 10.7529 221.12 10.5411C221.332 10.3293 221.543 10.3293 221.754 10.5411C221.966 10.7529 221.966 10.9646 221.754 11.1764C221.754 11.1764 221.754 11.3882 221.543 11.3882C220.274 12.8705 219.429 14.5646 218.16 16.047C217.737 16.4705 217.314 17.1058 216.891 17.3176C216.468 17.5293 216.257 17.5293 215.834 17.3176C215.411 17.1058 215.411 16.6823 215.411 16.2587C215.411 15.4117 215.834 14.7764 216.045 13.9293C216.468 12.6588 217.103 11.3882 217.526 9.9058C217.737 9.69403 217.737 9.27051 218.16 9.48228C218.583 9.69404 218.371 9.90582 218.371 10.3294C217.737 12.0235 217.103 13.5058 216.468 15.1999C216.68 15.8352 216.468 16.047 216.68 16.4705Z" fill="black"/>
              <path d="M239.727 13.7177C239.093 14.9883 238.247 16.2589 237.613 17.5294C237.401 17.7412 237.19 18.1647 236.979 18.3765C236.767 18.5882 236.556 18.5883 236.344 18.5883C236.133 18.3765 236.133 18.1647 236.133 17.953C236.133 17.7412 236.344 17.5294 236.556 17.3177C238.459 14.9883 239.727 12.2353 241.207 9.4824C241.419 9.27064 241.419 9.05889 241.63 8.63536C241.842 8.4236 241.842 8.42358 242.053 8.42358C242.265 8.63535 242.476 8.84712 242.265 9.05888C242.265 9.27065 242.053 9.48242 241.842 9.69418C241.207 10.9648 240.573 12.2353 239.727 13.7177Z" fill="black"/>
              <path d="M246.916 17.3177C247.551 16.2589 247.974 15.2001 248.397 14.1413C249.031 12.6589 250.088 11.3884 251.568 10.7531C251.78 10.5413 252.203 10.5413 252.414 10.7531C252.625 11.1766 252.414 11.3884 251.991 11.3884C250.088 12.2354 249.242 13.9295 248.608 15.8354C248.397 16.4707 248.185 17.3177 247.762 17.953C247.551 18.3766 247.339 18.8001 246.916 19.0119C246.705 19.2236 246.282 19.2236 246.071 19.0119C245.859 18.8001 245.859 18.3766 246.071 18.1648C246.705 17.7413 246.916 17.5295 246.916 17.3177Z" fill="black"/>
              <path d="M78.6088 9.90586C78.186 10.7529 77.7631 11.6 77.3402 12.4471C77.1288 12.8706 76.9173 13.5059 76.283 13.5059C75.8601 13.5059 75.8601 12.6588 76.4944 12.0235C77.5516 10.3294 78.3974 8.63528 79.4546 6.94116C79.6661 6.51763 79.8775 6.0941 80.0889 5.88233C80.3004 5.4588 80.5118 5.24704 80.9347 5.45881C81.3576 5.67058 81.3576 6.09409 81.1461 6.30586C79.8775 7.36468 79.4546 8.63527 78.6088 9.90586Z" fill="black"/>
              <path d="M80.0899 9.90602C80.3014 9.48249 80.7243 8.84721 80.9357 8.42368C81.1471 8.00015 81.3586 7.7884 81.7815 7.57664C82.2043 7.57664 82.2043 7.15311 82.4158 6.94134C82.6272 6.72958 82.8387 6.51782 83.0501 6.51782C83.2615 6.72959 83.2615 6.94134 83.2615 7.1531C82.8387 7.78839 82.8387 8.42369 81.9929 8.84722C81.3586 9.05898 81.1471 9.90603 80.9357 10.5413C80.7243 10.9648 80.5128 11.6001 80.3014 12.0237C80.0899 12.4472 79.8785 12.8707 79.2442 12.8707C78.6099 12.659 78.8213 12.0237 79.0327 11.6001C79.4556 11.1766 79.8785 10.5413 80.0899 9.90602Z" fill="black"/>
              <path d="M199.131 12.8706C199.554 12.2353 199.765 11.3883 200.188 10.753C200.399 10.5412 200.611 10.1177 200.822 10.3294C201.245 10.5412 201.034 10.9647 200.822 11.1765C200.399 12.2353 199.976 13.0824 199.765 14.1412V14.353C199.554 14.7765 199.342 15.2 198.708 14.9883C198.285 14.7765 198.285 14.353 198.496 13.9294C198.708 13.5059 198.919 13.0824 199.131 12.8706Z" fill="black"/>
              <path d="M252.626 19.4353C252.414 19.8588 251.991 19.8588 251.568 19.647C251.145 19.4353 250.934 19.0117 251.145 18.5882C251.357 18.1646 251.78 18.1646 252.203 18.3764C252.837 18.5882 252.837 19.0117 252.626 19.4353Z" fill="black"/>
              <path d="M18.3485 4.82368C18.137 5.2472 17.7141 5.24719 17.5027 5.03543C17.0798 4.82367 17.0798 4.61191 17.2912 4.18839C17.5027 3.97663 17.7141 3.76487 18.137 3.97663C18.3485 4.18839 18.5599 4.61192 18.3485 4.82368Z" fill="black"/>
              <path d="M202.726 9.05867C202.514 9.4822 202.303 9.48222 201.88 9.27045C201.669 9.05869 201.457 8.8469 201.669 8.42337C201.88 7.99984 202.092 7.99984 202.514 8.21161C202.726 8.42337 202.726 8.84691 202.726 9.05867Z" fill="black"/>
            </svg>
          </article>
        </Manifesto>
        <Container>
          <AboutImg 
            fixed={data.aboutImage.childImageSharp.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="#"
            style={{display: "block"}}
          />
          <TextContainer>
            <h1>Meet Farrah</h1>
            <p>For the past five years Farrah has been photographing weddings and elopments. She has found her niche in documentary style wedding photography because of the way it produces meaningful and honest imagery that gets better over time. Farrah and her husband Matt live in Atlanta, GA but continue to fall in love with the cities their travels bring them to.</p>
          </TextContainer>
        </Container>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    aboutImage: file(absolutePath: {regex: "/about.png/"}) {
      childImageSharp {
        fixed(width: 1000) {
          srcSet
          src
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
