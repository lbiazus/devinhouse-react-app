import React from 'react';

class EstruturaDaPagina extends React.Component {

    render() {
        return (
            <div className="mainPage">
                <div className="header">
                    <h1>Dev In House React App</h1>
                    <h2>{this.props.title}</h2>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default EstruturaDaPagina;