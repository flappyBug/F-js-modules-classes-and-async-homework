const { ADDRESS, PORT, PATH, REGION } = require("./constant");
const { default: getUrl } = require("./utils");

export const url = getUrl(ADDRESS, PORT, PATH);

export const region = REGION;
