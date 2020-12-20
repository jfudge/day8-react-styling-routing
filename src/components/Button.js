import styled from 'styled-components';
import PropTypes from 'prop-types';

// Customizations you can do with styled components and props
// You can define props that will change the look of your component
// This is where knowing arrow functions comes in handy
const Button = styled.button`
  color: #fff;
  background: ${(props) => {
    if (props.color === 'primary') {
      return '#D9A200';
    }
    if (props.color === 'secondary') {
      return '#002DB2';
    }
    return '#666';
  }};
  border: 0;
  padding: 4px 8px;
  border-radius: 4px;
`;

Button.defaultProps = {
  color: undefined,
};

Button.propTypes = {
  color: PropTypes.string,
};

export default Button;