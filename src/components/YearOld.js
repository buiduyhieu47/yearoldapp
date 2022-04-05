import React from 'react';

class YearOld extends React.Component {
    state = {
        age: '',
    }
    handleOnChangeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }
    handleClickButton = (e) => {
        e.preventDefault()
        console.log()
    }
    render() {
        return (
            <div>
                <form>
                    現在の年齢:<input type="number" value={this.state.age}
                        onChange={(e) => this.handleOnChangeAge(e)} />歳の方が生まれた年は何年?

                </form>
                <div><button onClick={(e) => this.handleClickButton(e)} type="submit">調べる</button></div>
                年齢: {this.state.age} 歳
            </div>
        );
    }
};
export default YearOld;