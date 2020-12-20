// import './Card.css';

// const Card = (props) => {
//   const { children } = props;
//   return (
//     <div>
//       {children}
//     </div>
//   );
// }

// Most of the time when you create reusable component, you will be forwarding props.
// Most of the time when you create reusable components, they will be visually reusable
import styled from 'styled-components';

// The same card component can be created like the following
// It's only one line of code when there are no styles
// But it's very easy to add styling to the component (CSS)
// Useful for created simple good looking presentational components
const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  min-height: 200px;
`;

export default Card;