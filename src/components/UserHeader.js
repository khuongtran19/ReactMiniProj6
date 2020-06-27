import React from 'react';
import { fetchUser } from '../action'
import { connect } from 'react-redux'

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }
    render() {
        const user = this.props.users.find(
            (user) => user.id === this.props.userId)
        if (!user) return null
        return (
            <div className='header'>{user.name}</div>
        )
    }
}

const mapStateToProp = state => {
    return { user: state.user }
}

export default connect(
    mapStateToProp,
    { fetchUser }
)(UserHeader)