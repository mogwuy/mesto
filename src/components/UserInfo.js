export default class UserInfo {
    constructor(nameProfile, subnameProfile, profileAvatarImage) {
      this._nameProfile = nameProfile;
      this._subnameProfile = subnameProfile;
      this._profileAvatarImage = profileAvatarImage;
    }

    getUserInfo(){
      this._userData = {};
      this._userData.name = this._nameProfile.textContent;
      this._userData.subname = this._subnameProfile.textContent;
      return this._userData
    }

    setUserInfo = (userData) => { 
      this._nameProfile.textContent = userData.name;
      this._subnameProfile.textContent = userData.about;
      this._profileAvatarImage.src = userData.avatar;
    }
}