import Main from './Main'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {removePost} from '../redux/actions'
function mapStatetoProps (state)
{
    return {

        posts: state
    }

    }

    function mapDispatchtoProps (dispatch)

    {

    return bindActionCreators({removePost},dispatch);
    
    }

    const App = connect (mapStatetoProps,mapDispatchtoProps) (Main)
    export default App;