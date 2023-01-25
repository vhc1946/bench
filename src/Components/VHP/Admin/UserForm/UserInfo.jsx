import React, {Component} from 'react';
import { ActionButton } from '../../Buttons/ActionButton';
import { TextArea } from '../../Inputs/TextArea';
import { TextInput } from '../../Inputs/TextInput';
import { Card } from '../../Cards/Card';
import { CardTitlebar } from '../../Cards/CardTitlebar';
import { CardContent } from '../../Cards/CardContent';
import { StaticForm } from '../../Forms/StaticForm';
import { InputForm } from '../../Forms/InputForm';
import { FloatContainer } from '../../Containers/FloatContainer';
import { ActionRow } from '../../Tables/DataTable/ActionRow';

export class UserInfo extends Component{
	constructor(props){
		super(props);

        console.log(props)
        this.state = {
            interests: props.user.userInfo.interests,
            skills: props.user.userInfo.skills,
            birthday:props.user.userInfo.birthday,
            emoji:props.user.userInfo.emoji,
            confirmDialogueActive:false
        }

        //Create a copy of state so you can track changes
        this.savedState = {
            interests: props.user.userInfo.interests,
            skills: props.user.userInfo.skills,
            birthday:props.user.userInfo.birthday,
            emoji:props.user.userInfo.emoji,
            confirmDialogueActive:this.state.confirmDialogueActive,
            logoutDialogueActive:this.state.logoutDialogueActive
        }

        this.SetInterests = this.SetInterests.bind(this)
        this.SetSkills = this.SetSkills.bind(this)
        this.SetBirthday = this.SetBirthday.bind(this)
        this.SetEmoji = this.SetEmoji.bind(this)

        this.ConfirmCloseBeforeSave = this.ConfirmCloseBeforeSave.bind(this)
        this.CloseConfirmDialogue = this.CloseConfirmDialogue.bind(this)
        this.SaveAndClose = this.SaveAndClose.bind(this)

        this.ConfirmLogoutBeforeSave = this.ConfirmLogoutBeforeSave.bind(this)
        this.CloseLogoutDialogue = this.CloseLogoutDialogue.bind(this)

        this.GetStateChanged = this.GetStateChanged.bind(this)
  	}

    /**
     * Input state setters 
     */
    SetInterests(Input) {this.setState({interests:Input})}

    SetSkills(Input) {this.setState({skills:Input})}

    SetBirthday(Input) {this.setState({birthday:Input})}

    SetEmoji(Input) {this.setState({emoji:Input})}

    GetStateChanged() {
        let StateChanged = false;
        for (let key in this.state) {
            if (this.state[key] != this.savedState[key]) {
                console.log("State changed at", this.state[key], this.savedState[key], key)
                StateChanged = true;
                break;
            }
        }

        return StateChanged
    }

    /**
     * Dialogue box which confirms if the user wishes to save before closing user form
     */
    ConfirmCloseBeforeSave() {
        let StateChanged = this.GetStateChanged();

        //Open the dialogue
        if (StateChanged) {
            this.setState({
                confirmDialogueActive: true
            })
        } else {
            this.props.ToggleUserForm()
        }
    }

    //Close the confirm dialogue
    CloseConfirmDialogue() {this.setState({confirmDialogueActive: false})}

    /**
     * Save the user info, then close all dialogues
     */
    SaveAndClose() {
        let data = {
            interests: this.state.interests,
            skills: this.state.skills,
            birthday:this.state.birthday,
            emoji:this.state.emoji,
        }
        this.props.SetUserInfo(data);
        if (this.state.confirmDialogueActive == true) {
            this.CloseConfirmDialogue()
        }
    }

    /**
     * Dialogue box which confirms if the user wishes to save before logging out
     */
    ConfirmLogoutBeforeSave() {
        let StateChanged = this.GetStateChanged();

        //Open the dialogue
        if (StateChanged) {
            this.setState({
                logoutDialogueActive: true
            })
        } else {
            this.props.LogUserOut()
        }
    }

    //Close the confirm dialogue
    CloseLogoutDialogue() {this.setState({logoutDialogueActive: false})}

  	render(){
    	return(
       		<FloatContainer>
                <Card cardClass = "card" id="user-info-card" title = "User Information" titlebar = {true} actions = {{minimize: null, close:this.ConfirmCloseBeforeSave}}>
                    <CardContent id = "user-card-content">
                        <CardContent id="basic-user-info">
                            <div id = "user-fullname">
                                {this.props.user.userInfo.firstname + ' ' + this.props.user.userInfo.lastname}
                            </div>
                            <div class="user-info-item">
                                <div id = "user-username">
                                    {this.props.user.userInfo.username}
                                </div>
                                <div style={{fontWeight: 600}}> - </div>
                                <div id = "user-usertitle">
                                    {this.props.user.userInfo.title}
                                </div>
                            </div>
                        </CardContent>
                        <CardContent id="job-info">
                            <CardTitlebar title = "Job Information" cardTitlebarClass = "job-card-title"/>
                            <CardContent id = "job-info-contents">
                                <InputForm
                                    formdata = {[
                                        {title:"Job Type: ", value:this.props.user.userInfo.jobtype},
                                        {title:"Department: ", value:this.props.user.userInfo.dept},
                                        {title:"Reports To: ", value:this.props.user.userInfo.reportto},
                                        {title:"Job Description: ", value:this.props.user.userInfo.jobdescr}
                                    ]}
                                />
                            </CardContent>
                        </CardContent>
                        <CardContent id="personal-info">
                            <CardTitlebar title = "Personal Information" cardTitlebarClass = "personal-card-title"/>
                            <CardContent id = "personal-info-contents">
                                <InputForm
                                    formdata = {[
                                        {   
                                            title:"Interests: ", 
                                            value:this.state.interests, 
                                            ChangeFunction:this.SetInterests, 
                                            inputClass: "user-info-form",
                                            inputType:"TextArea"
                                        },
                                        {   
                                            title:"Skills: ", 
                                            value:this.state.skills, 
                                            ChangeFunction:this.SetSkills, 
                                            inputClass: "user-info-form",
                                            inputType:"TextArea"
                                        },
                                        {   
                                            title:"Joined: ", 
                                            value:this.props.user.userInfo.joined,
                                            inputType:"static"
                                        },
                                        {   
                                            title:"Birthday: ", 
                                            value:this.state.birthday, 
                                            ChangeFunction:this.SetBirthday, 
                                            type:"date",
                                            inputType:"TextInput"
                                        },
                                        {   
                                            title:"Emoji: ", 
                                            value:this.state.emoji, 
                                            ChangeFunction:this.SetEmoji,
                                            inputType:"TextInput"
                                        }
                                    ]}
                                />
                            </CardContent>
                        </CardContent>
                        <ActionRow
                            data = {[
                                {
                                    text:"Logout",
                                    id:"user-logout",
                                    ClickFunction:this.ConfirmLogoutBeforeSave
                                },
                                {
                                    text:"Save and Close",
                                    id:"user-info-save",
                                    ClickFunction:this.SaveAndClose
                                }
                            ]}
                        />
                    </CardContent>
                </Card>
                {this.state.confirmDialogueActive&&<Card cardClass="dialogue float" id="user-info-confirm-close" titlebar = {false}>
                    <div>Are you sure you want to close? You have unsaved changes!</div>
                    <ActionRow
                        data = {[
                            {
                                text:"Save and Close",
                                id:"close-dialogue-save",
                                ClickFunction:this.SaveAndClose
                            },
                            {
                                text:"Close without saving",
                                id:"close-dialogue-nosave",
                                ClickFunction:this.props.ToggleUserForm
                            },
                            {
                                text:"Go back",
                                id:"close-dialogue-back",
                                ClickFunction:this.CloseConfirmDialogue
                            }
                        ]}
                    />
                </Card>}
                {this.state.logoutDialogueActive&&<Card cardClass="dialogue float" id="user-info-confirm-logout" titlebar = {false}>
                    <div>Are you sure you want to logout? You have unsaved changes!</div>
                    <ActionRow
                        data = {[
                            {
                                text:"Logout without saving",
                                id:"logout-dialogue-nosave",
                                ClickFunction:this.props.LogUserOut
                            },
                            {
                                text:"Go back",
                                id:"logout-dialogue-back",
                                ClickFunction:this.CloseLogoutDialogue
                            }
                        ]}
                    />
                </Card>}
            </FloatContainer>
    	)
  	}
}