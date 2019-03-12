import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { PropagateLoader } from 'react-spinners';
// Another way to import

import '../css/main.css';
 
const override = css`
    display: block;
    margin: 0 auto;
    text-align:center;
    border-color: red;
`;
 
class Propa_Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='loaderBlock'>
        <PropagateLoader
          css={override}
          sizeUnit={"px"}
          size={15}
          color={'#0E2F44'}
          loading={this.props.loading}
        />
      </div> 
    )
  }
}
export default Propa_Loader;
