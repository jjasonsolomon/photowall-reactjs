import Main from './Main'
import {connect} from 'react-redux'

function mapStatetoProps (state)
{
    return {

        posts: state
    }
    }

    const App = connect (mapStatetoProps) (Main)
    export default App;