import { URLSearchParams } from 'url';

export default async function generateAuthUrl($) {
  const scopes = ['r_basicprofile', 'r_organization_social'];
  const oauthRedirectUrlField = $.app.auth.fields.find(
    (field) => field.key == 'oAuthRedirectUrl'
  );
  const redirectUri = oauthRedirectUrlField.value;
  const searchParams = new URLSearchParams({
    client_id: $.auth.data.consumerKey,
    redirect_uri: redirectUri,
    scope: scopes.join(','),
    response_type: 'code',
  });

  const url = `${
    $.app.baseUrl
  }/oauth/v2/authorization?${searchParams.toString()}`;

  await $.auth.set({
    url,
  });
}
