import { useDispatch, useSelector } from 'react-redux/es/exports';
import { decrementWitchCheckingAction, increment } from '../../../app/features/Counter/Action';
import Navbar from '../../Component/Navbar';
import '../../Validation/Form/Style/style.scss';
const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />
      <div className="section">
        <div className="container1 ">
          <div className="row ">
            <div className="col">
              <h1 className="display-5 justify-content-center">{count}</h1>
              <div className="row ">
                <div className="col-md-6">
                  <button onClick={() => dispatch(decrementWitchCheckingAction(1))} className="btn btn-danger">
                    -
                  </button>
                </div>
                <div className="col-md-6">
                  <button onClick={() => dispatch(increment(1))} className="btn btn-primary">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
