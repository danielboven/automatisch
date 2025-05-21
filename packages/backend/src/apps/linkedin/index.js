import defineApp from '../../helpers/define-app.js';
import addAuthHeader from './common/add-auth-header.js';
import addApiVersionHeader from './common/add-api-version-header.js';
import auth from './auth/index.js';
import triggers from './triggers/index.js';

export default defineApp({
  name: 'LinkedIn',
  key: 'linkedin',
  baseUrl: 'https://www.linkedin.com',
  apiBaseUrl: 'https://api.linkedin.com',
  iconUrl: '{BASE_URL}/apps/linkedin/assets/favicon.svg',
  authDocUrl: 'https://learn.microsoft.com/nl-nl/linkedin/shared/authentication/authorization-code-flow?context=linkedin%2Fcontext&tabs=cURL1#step-1-configure-your-application',
  primaryColor: '#0A66C2',
  supportsConnections: true,
  beforeRequest: [addAuthHeader, addApiVersionHeader],
  auth,
  triggers,
});
