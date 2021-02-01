import React from 'react';
import './SelectBox.css';

class SelectBox extends React.Component {
    state = {
        ...this.props,
        items: this.props.items || [],
        selectedItem: this.props.items[0] || this.props.selectedItem,
        showItems: false,
    };

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems
        }))
    };

    selectItem = (item) => {
        this.setState({
            selectedItem: item,
            showItems: false,

        })
        let lang = item.id === 1 ? 'ru' : 'en';
        this.props.changeLanguage(lang);
    };

    render () {
        return (
            <div>
                <div className="select-box--box">
                    <div className="select-box--container">
                        <div className="select-box--selected-item"
                             onClick={this.dropDown}>
                            <p className="txt-lang" title={this.state.selectedItem.value }>{ this.state.selectedItem.value }</p>
                        </div>
                        {/*<div className="select-box--arrow"
                            onClick={this.dropDown}>
                            <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}/>
                        </div>*/}
                    </div>
                    <div
                        className="select-box--items"
                        style={{display: this.state.showItems ? 'block' : 'none'}}
                    >
                        {
                            this.state.items.map(item => <div
                                key={item.id}
                                onClick={() => this.selectItem(item)}
                                className={this.state.selectedItem === item ? 'selected' : ''}
                            >
                                { item.value }
                            </div>)
                        }
                    </div>
                </div>
                <input type="hidden" name={this.state.name} value={this.state.selectedItem.id} />
            </div>
        )
    }
}

export default SelectBox;