import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateExpression, evaluateExpression, resetExpression } from './redux/calculateSlice';
function Expression() {

        const dispatch = useDispatch();
        const { expression, result } = useSelector((store) => store.expressionReducer);
    
        const handleInputChange = (e) => {
            dispatch(updateExpression(e.target.value));
        };
    
        const handleEvaluate = () => {
            dispatch(evaluateExpression());
        };
    
        const handleReset = () => {
            dispatch(resetExpression());
        };

  return (
    <>
        <div className=" d-flex flex-column align-items-center border border-info m-5" style={{borderRadius:"15px"}}>
                <h1 className="text-info m-4 text-center"> Expression Calculator</h1>
                <input
                    type="text"
                    value={expression}
                    onChange={handleInputChange}
                    placeholder="Enter an expression"
                    className="form-control m-3"
                />
                <div className="d-flex mb-3">
                    <button className="btn btn-success me-3" onClick={handleEvaluate}>
                        Calculate
                    </button>
                    <button className="btn btn-danger" onClick={handleReset}>
                        Reset
                    </button>
                </div>
                <h3 className="tx1 text-info">Result: {result !== null ? result : "0"}</h3>
            </div>

    </>
  )
}

export default Expression