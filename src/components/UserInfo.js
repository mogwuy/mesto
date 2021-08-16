export default class UserInfo {
    constructor(nameProfile, subnameProfile) {
      this._nameProfile = nameProfile;
      this._subnameProfile = subnameProfile;
    }

    getUserInfo(){
      this._userData = {};
      this._userData.name = this._nameProfile.textContent;
      this._userData.subname = this._subnameProfile.textContent;
      return this._userData
    }

    setUserInfo = (userData) => { 
       this._nameProfile.textContent = userData.title;
       this._subnameProfile.textContent = userData.subname;  
    }
}