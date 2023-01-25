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

  	render(){
    	return(
       		<FloatContainer>
                <Card cardClass = "card" id="user-info-card" title = "User Information" titlebar = {true} actions = {{minimize: null, close:this.ConfirmCloseBeforeSave}}>
                    <div class="card-content" id = "user-card-content">
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
                        <div class = "button-row">
                            <ActionButton
                                text = "Save and Close"
                                id = "user-info-save"
                                ClickFunction = {this.SaveAndClose}
                            />
                        </div>
                    </div>
                </Card>
                {this.state.confirmDialogueActive&&<Card cardClass="dialogue float" id="user-info-confirm-close" titlebar = {false}>
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
                </Card>}
            </FloatContainer>
    	)
  	}
}