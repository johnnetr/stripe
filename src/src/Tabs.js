import React, { Component } from 'react'
import './Tabs.css';

export default class Tabs extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className="Tabs">
                {React.Children.map(this.props.children, (child, i) => {
                     let className = 'Tabs__Tab';
                     if (child.key === this.props.active) {
                         className = `${className} Tabs__Tab--active`;
                     }
                    return (
                        <div className={className}
                        onClick={() => {
                            this.props.onChange(child.key);
                        }}
                        >
                            {child}
                        </div>
                    )
                })}
                <div
                className="Tabs__Underline"
                />
            </div>
        )
    }
}
