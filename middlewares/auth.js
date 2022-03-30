const dummyToken = "qwer1234";

const auth = (req) => {
  const requestToken = req.headers["auth"];

  if (!requestToken || requestToken != dummyToken) {
    return false;
  }
  return true;
};

module.exports = auth
