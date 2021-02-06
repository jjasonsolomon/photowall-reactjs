import Main from './Main'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import {withRouter} from 'react-router';
function mapStatetoProps (state)
{
    return {

        posts: state
    }

    }

    function mapDispatchtoProps (dispatch)

    {

    return bindActionCreators(actions ,dispatch);
    
    }

    const App = withRouter(connect (mapStatetoProps,mapDispatchtoProps) (Main))
    export default App;