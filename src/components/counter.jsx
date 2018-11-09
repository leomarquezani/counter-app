import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    }
    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement(1)} className="btn btn-secondary btn-sm">Increment</button>
                { this.renderTags()}
            </div>
        );
    }

    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags!</p>

        return (
            <ul>
                { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
            </ul>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }

    handleIncrement = (product) => {
        console.log(product);
        this.setState({ count: this.state.count + 1});
    }
}