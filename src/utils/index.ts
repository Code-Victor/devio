export function CheckGithubUsername(
  username: string
) {
  //check if usernane exists
  const url = `https://api.github.com/users/${username}`;
  const promise = fetch(url);
  const res = promise.then(
    function (response) {
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    },
    function (error) {
      console.log(error); // Failure
    }
  );
  return res;
}
