import getCurrentUser from '../common/get-current-user.js';

const verifyCredentials = async ($) => {
  const oauthRedirectUrlField = $.app.auth.fields.find(
    (field) => field.key == 'oAuthRedirectUrl'
  );
  const redirectUri = oauthRedirectUrlField.value;

  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code: $.auth.data.code,
    client_id: $.auth.data.consumerKey,
    client_secret: $.auth.data.consumerSecret,
    redirect_uri: redirectUri,
  });

  const response = await $.http.post(
    `${$.app.baseUrl}/oauth/v2/accessToken`,
    params.toString(),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    }
  );

  const data = response.data;

  const {
    access_token: accessToken,
    expires_in: expiresIn,
    refresh_token: refreshToken,
    refresh_token_expires_in: refreshTokenExpiresIn,
    scope: scope,
    token_type: tokenType,
  } = data;

  await $.auth.set({
    accessToken,
    expiresIn,
    refreshToken,
    refreshTokenExpiresIn,
    scope,
    tokenType,
  });

  const user = await getCurrentUser($);

  await $.auth.set({
    userId: user.id,
    screenName: `${user.localizedFirstName} ${user.localizedLastName}`,
  });
};

export default verifyCredentials;
