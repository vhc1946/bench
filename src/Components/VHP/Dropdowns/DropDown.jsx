import React, { Component } from 'react';
import { SearchBar } from '../Tables/DataTable/SearchBar';
import { DropOption } from './DropOption';

/**
 * Input component which takes a search function with an optional key and returns filtered data.
 */
export class DropDown extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected:this.props.selected,
            list:this.props.list,
            listActive:false
        }

        this.staticData = JSON.parse(JSON.stringify(this.state.list))

        this.ToggleDroplist = this.ToggleDroplist.bind(this)
        this.SelectOption = this.SelectOption.bind(this)
        this.GenerateList = this.GenerateList.bind(this)
        this.FilterByText = this.FilterByText.bind(this)
    }

    /**
     * Filters this.props.data based on the input
     * May move this into the search bar itself
     * @param {event} e : JS change event passed from Search Bar
     */
    FilterByText(e, searchKey) {
        let newData = null;
        console.log("SEARCH TERM:", e.target.value)
        if (e.target.value == "") {
            newData = null
        } else {
            newData = []
            for (let obj in this.staticData) {
                //Search through the properties of each object
                for (let key in this.staticData[obj]) {
                    if (key == searchKey || searchKey == undefined) {
                        if (this.staticData[obj][key].toLowerCase().includes(e.target.value.toLowerCase())) {
                            newData.push(JSON.parse(JSON.stringify(this.staticData[obj]))) //Push clone of object to new array
                            break;
                        }
                    }
                }
            }
        }
        this.SetList(newData)
    }

    /**
     * Sets the list
     */
    SetList(data) {
        if (data == null || data == undefined) {
            data = this.staticData;
        }

        this.setState({
            list:data
        })
    }

    /**
     * Resets list and toggles drop list visibility
     */
    ToggleDroplist() {
        this.SetList(null)
        this.setState({
            listActive:!this.state.listActive
        })
    }

    /**
     * 
     * @param {object} selectedOption : selected object
     */
    SelectOption(selectedOption) {
        //If it's not already selected update it.
        if (this.state.selected.value != selectedOption.value) {
            for (let option in this.state.list) {
                if (this.state.list[option].value == selectedOption.value) {
                    this.setState({
                        selected:selectedOption
                    })
                    this.ToggleDroplist();
                    break
                }
            }
        }
    }

    GenerateList() {
		let items = this.state.list.map((obj) => {
			if (obj.value != this.state.selected.value) {
				return(<DropOption
                        text = {obj.text}
                        value = {obj.value}
                        id = {obj.id}
                        ClickFunction = {this.SelectOption}
                        data={obj}
                        selected={false}
				    />)
			    }
		    }	
		);

		return items
    }

    render() {
        return(
            <>
                 <DropOption 
                    text = {this.state.selected.text}
                    value = {this.state.selected.value}
                    id = {this.state.selected.id}
                    ClickFunction = {this.ToggleDroplist}
                    selected = {true}
                />
                {this.state.listActive&&<div class = "dropdown-list">
                    {this.props.searchable&&<SearchBar 
                        FilterByText = {this.FilterByText}
                        searchKey = {this.props.searchKey}
                    />}
                    {this.GenerateList()}
                </div>}
            </>
            
        );
    }
}