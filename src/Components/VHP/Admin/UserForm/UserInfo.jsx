import React, {Component} from 'react';
import { ActionButton } from '../../Buttons/ActionButton';
import { TextArea } from '../../Inputs/TextArea';
import { TextInput } from '../../Inputs/TextInput';
import { CardDialogue } from '../../Cards/CardDialogue';

export class UserInfo extends Component{
	constructor(props){
		super(props);

        this.state = {
            interests: props.userInfo.interests,
            skills: props.userInfo.skills,
            birthday:null,
            emoji:props.userInfo.emoji,
            confirmDialogueActive:false
        }

        this.savedState = {
            interests: props.userInfo.interests,
            skills: props.userInfo.skills,
            birthday:null,
            emoji:props.userInfo.emoji,
            confirmDialogueActive:this.state.confirmDialogueActive
        }

        this.SetInterests = this.SetInterests.bind(this)
        this.SetSkills = this.SetSkills.bind(this)
        this.SetBirthday = this.SetBirthday.bind(this)
        this.SetEmoji = this.SetEmoji.bind(this)

        this.ConfirmCloseBeforeSave = this.ConfirmCloseBeforeSave.bind(this)
        this.CloseConfirmDialogue = this.CloseConfirmDialogue.bind(this)
        this.SaveAndClose = this.SaveAndClose.bind(this)
  	}

    /**
     * Input state setters 
     */
    SetInterests(Input) {this.setState({interests:Input})}

    SetSkills(Input) {this.setState({skills:Input})}

    SetBirthday(Input) {this.setState({birthday:Input})}

    SetEmoji(Input) {this.setState({emoji:Input})}

    /**
     * TODO: Dialogue box for confirming close
     * If not saved and changes have been made, ask the user if they wish to save.
     * For this, we may need to keep track of state history, and if the current state does not match the saved state, ask if the user wishes to save
     * Reason for doing this versus just having a bool is that they could make a change, and then change it back to what it was before.
     */
    ConfirmCloseBeforeSave() {
        let StateChanged = false;
        for (let key in this.state) {
            if (this.state[key] != this.savedState[key]) {
                console.log("State changed at", this.state[key], this.savedState[key], key)
                StateChanged = true;
                break;
            }
        }

        //Open the dialogue
        if (StateChanged) {
            this.setState({
                confirmDialogueActive: true
            })
        } else {
            this.props.SetUserForm()
        }
    }

    //Close the confirm dialogue
    CloseConfirmDialogue() {this.setState({confirmDialogueActive: false})}

    /**
     * Save the user info, then close all dialogues
     * TODO: Larger save function
     */
    SaveAndClose() {
        this.props.SetUserInfo(this.state);
        if (this.state.confirmDialogueActive == true) {
            this.CloseConfirmDialogue()
        }
        this.props.SetUserForm();
    }

  	render(){
    	return(
       		<div className = "float-container">
                <div className = "card" id="user-info-card">
                    <div class="card-menubar">
                        <div class = "card-title">
                            User Information
                        </div>
                        <ActionButton 
                            ClickFunction = {this.ConfirmCloseBeforeSave}
                            ButtonType = "close-button"
                            text="X"
                        />
                    </div>
                    <div class="card-content" id = "user-card-content">
                        <div class = "card-content" id="basic-user-info">
                            <div id = "user-fullname">
                                {this.props.userInfo.firstname + ' ' + this.props.userInfo.lastname}
                            </div>
                            <div class="user-info-item">
                                <div id = "user-username">
                                    {this.props.userInfo.username}
                                </div>
                                <div style={{fontWeight: 600}}> - </div>
                                <div id = "user-usertitle">
                                    {this.props.userInfo.title}
                                </div>
                            </div>
                        </div>
                        
                        <div class = "card-content" id="job-info">
                            <div class="card-menubar">
                                <div class = "card-title" id="job-card-title">
                                    Job Information
                                </div>
                            </div>
                            <div class = "card-content" id = "job-info-contents">
                                <div class="user-info-item">
                                    <div>Job Type:</div>
                                    <div>{this.props.userInfo.jobtype}</div>
                                </div>
                                <div class="user-info-item">
                                    <div>Department:</div>
                                    <div>{this.props.userInfo.dept}</div>
                                </div>
                                <div class="user-info-item">
                                    <div>Reports To:</div>
                                    <div>{this.props.userInfo.reportto}</div>
                                </div>
                                <div class="user-info-item">
                                    <div>Job Description:</div>
                                    <div>{this.props.userInfo.jobdescr}</div>
                                </div>
                            </div>
                        </div>

                        <div class = "card-content" id="personal-info">
                            <div class="card-menubar">
                                <div class = "card-title" id="personal-card-title">
                                    Personal Information
                                </div>
                            </div>
                            <div class = "card-content" id = "personal-info-contents">
                                <div class="user-info-item">
                                    <div>Interests:</div>
                                    <TextArea
                                        value={this.state.interests}
                                        ChangeFunction = {this.SetInterests}
                                        inputClass = "user-info-form"
                                    />
                                </div>
                                <div class="user-info-item">
                                    <div>Skills:</div>
                                    <TextArea
                                        value={this.state.skills}
                                        inputClass = "user-info-form"
                                        ChangeFunction = {this.SetSkills}
                                    />
                                </div>
                                <div class="user-info-item">
                                    <div>Joined:</div>
                                    <div>{this.props.userInfo.joined}</div>
                                </div>
                                <div class="user-info-item">
                                    <div>Birthday:</div>
                                    <TextInput
                                        value = {this.state.birthday}
                                        ChangeFunction = {this.SetBirthday}
                                        type = "date"
                                    />
                                </div>
                                <div class="user-info-item">
                                    <div>Favorite Emoji:</div>
                                    <TextInput
                                        value = {this.state.emoji}
                                        ChangeFunction = {this.SetEmoji}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class = "button-row">
                            <ActionButton
                                text = "Save and Close"
                                id = "user-info-save"
                                ClickFunction = {this.SaveAndClose}
                            />
                        </div>
                        
                    </div>
                </div>
                {this.state.confirmDialogueActive&&<CardDialogue cardClass="float" id="user-info-confirm-close">
                    <div>Are you sure you want to close? You have unsaved changes!</div>
                    <div>
                        <ActionButton
                            text = "Save and Close"
                            ClickFunction = {this.SaveAndClose}
                        />
                        <ActionButton 
                            text = "Close without saving"
                            ClickFunction = {this.props.SetUserForm}
                            id = "close-no-save"
                        />
                        <ActionButton 
                            text = "Go back"
                            ClickFunction = {this.CloseConfirmDialogue}
                        />
                    </div>
                </CardDialogue>}
            </div>
    	)
  	}
}