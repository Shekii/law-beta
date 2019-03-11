import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';
import { DotLoader } from 'react-spinners';
// Another way to import


 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
class Dot_Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='loader'>
        <DotLoader
          css={override}
          sizeUnit={"px"}
          size={75}
          color={'#0E2F44'}
          loading={this.props.loading}
        />
      </div> 
    )
  }
}
export default Dot_Loader;
