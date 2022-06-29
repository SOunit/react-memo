const url = `https://jsonplaceholder.typicode.com/users`;

const fetchGetUsers = () => {
  return fetch(url, { method: "GET" })
    .then((response) => response.json())
    .catch((err) => {
      throw err;
    });
};

export default fetchGetUsers;
