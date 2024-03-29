import React from 'react';

import './App.css';

import { createFunctionObjects } from './parser';

function Title() {
    return <h1>Spy Code!</h1>;
}

class CodeForm extends React.Component {
    constructor(props) {
        super(props);
        this.keyDown = this.keyDown.bind(this);
    }

    keyDown(e) {
        if (e.keyCode === 9 || e.which === 9) {
            this.tabKey(e);
        }
    }

    tabKey(e) {
        e.preventDefault();
        const text = document.getElementById('code');
        const start = text.selectionStart;
        const end = text.selectionEnd;
        const value = text.value;
        text.value = value.substring(0, start) + '\t' + value.substring(end);
        text.selectionEnd = start + 1;
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit}
            >
                <textarea
                    name="code"
                    id="code"
                    value={this.props.code}
                    onChange={this.props.handleChange}
                    onKeyDown={this.keyDown}
                    rows="20"
                    cols="40"
                    wrap="hard"
                    autoComplete="off"
                    autoFocus
                ></textarea>
                <br />
                <input type="submit" value="submit"></input>
            </form>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            code: (
                'function add(a) { \n' +
                '\tlet b = 1;\n' +
                '\tfor (let i=0; i<5; i++) {\n' + 
                '\t\tb++;\n' +
                '\t}\n' +
                '\tif (b===6) {\n' +
                '\t\t b = 1;\n' +
                '\t}\n' +
                '\treturn a + b;\n' +
                '}\n' +
                '\n' +
                'add(1);' 
            )
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({code: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const functionObjects = createFunctionObjects(this.state.code);
        console.log(eval(functionObjects));
    }

    render() {
        return (
            <div>
                <Title></Title>
                <CodeForm
                    code={this.state.code}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                ></CodeForm>
            </div>
        )
    }

}

export default App;
