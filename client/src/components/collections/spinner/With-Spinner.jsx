
import React, {Fragment} from 'react';
import spinner from './spinner.gif';

const WithSpinner = WrappedComponent =>  ({ isLoading, ...otherProps })  => {
    return isLoading ? (
        <Fragment>
            <img
            src={spinner}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt='Loading...'
            />
      </Fragment>
    ) : (
      <WrappedComponent {...otherProps} />
    );

};

export default WithSpinner;

