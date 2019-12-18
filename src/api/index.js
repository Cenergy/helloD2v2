import ajax from './ajax';
// const BASE_URL="./api"
// export let abc = function () {
// ajax()
// }
export const reqUser = username => ajax(`https://api.github.com/users/${username}`);
