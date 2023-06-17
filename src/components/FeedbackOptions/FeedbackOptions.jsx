import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions =({options, onLeaveFeedback})=>{
   
       return <div>
               {options.map(option => ( 
               <button className={css.button} type='button'
                       onClick={() => onLeaveFeedback(option)}
                       key={option}
                       >{option}</button>
               ))}
        </div>       
    }
FeedbackOptions.protoTypes = {
        options: PropTypes.array.isRequired,
        onLeaveFeedback: PropTypes.func.isRequired, 
}