import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

    styleCompleted() {
        return {
            fontSize: "20px",
            color: "gray",
            textDecoration: this.props.task.done ? "line-through" : "none"
        }
    }

    styleBtnComplete() {
        return {
            fontSize: "18px",
            background: "#000",
            color: this.props.task.done ? "#fff" : "yellow",
            border: "none",
            padding: "10px 15px",
            borderRadius: "50%",
            cursor: "pointer"
        }
    }

    render() {
        const { task } = this.props;

        return <div style={this.styleCompleted()}>
            {task.title} -
            {task.description} -
            {task.done}
            <input type="checkbox" />
            <button style={this.styleBtnComplete()}>
                x
            </button>
        </div >
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task;