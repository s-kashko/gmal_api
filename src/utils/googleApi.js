import { setUserProfile } from "../Redux/userProfile/actions";
import { getMessagesThunk } from "../Redux/rowData/thunks";

export function authorize(dispatch) {
  window.onAuthorize = function (googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();

    const userProfile = {
      id: profile.getId(),
      fullName: profile.getName(),
      givenName: profile.getGivenName(),
      familyName: profile.getFamilyName(),
      imageUrl: profile.getImageUrl(),
      email: profile.getEmail(),
      accessToken: googleUser.getAuthResponse().access_token,
    };

    dispatch(setUserProfile(userProfile));
    dispatch(getMessagesThunk(userProfile.accessToken, userProfile.id));
  };
}
