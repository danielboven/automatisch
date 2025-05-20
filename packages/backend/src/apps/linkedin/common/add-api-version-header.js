const addApiVersionHeader = ($, requestConfig) => {
  if (requestConfig.headers) {
    requestConfig.headers['LinkedIn-Version'] = '202505';
  }

  return requestConfig;
};

export default addApiVersionHeader;
