import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <div className={css.statistics}>
        <Notification message="There is no feedback" total={total} />
        <div style={{ display: total === 0 ? 'none' : 'block' }}>    
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
    </div>
        </div>
}

Statistics.protoTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired, 
    total: PropTypes.number.isRequired, 
    positivePercentage: PropTypes.number.isRequired, 
}