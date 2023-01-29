import { Btn, BtnList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ onGoodMark, onNeutralMark, onBadMark }) => (
  <BtnList>
    <Btn onClick={onGoodMark}>Good</Btn>
    <Btn onClick={onNeutralMark}>Neutral</Btn>
    <Btn onClick={onBadMark}>Bad</Btn>
  </BtnList>
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
