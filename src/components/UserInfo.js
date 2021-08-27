export default class UserInfo {
    constructor(nameProfile, subnameProfile, profileAvatarImage) {
      this._nameProfile = nameProfile;
      this._subnameProfile = subnameProfile;
      this._profileAvatarImage = profileAvatarImage;
    }

    getUserInfo(){
      this._userData = {};
      this._userData.name = this._nameProfile.textContent;
      this._userData.about = this._subnameProfile.textContent;
      return this._userData
    }

    setUserInfo = (Data) => { 
      this._nameProfile.textContent = Data.name;
      this._subnameProfile.textContent = Data.about;
    }
}