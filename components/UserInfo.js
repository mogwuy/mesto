import {nameProfile, subnameProfile} from '../utils/constants.js'
export default class UserInfo {
    constructor(nameInput, jobInput) {
      this._nameInput = nameInput;
      this._jobInput = jobInput;
    }

    getUserInfo(){
        this._nameInput.value = nameProfile.textContent;
        this._jobInput.value = subnameProfile.textContent;
    }

    setUserInfo = () => {
      nameProfile.textContent = this._nameInput.value;
      subnameProfile.textContent = this._jobInput.value;
    }
}