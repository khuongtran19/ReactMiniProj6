import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../action'

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>Post list</div>
        )
    }
}

const mapStateToProps = (state) => {

}

export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostList)