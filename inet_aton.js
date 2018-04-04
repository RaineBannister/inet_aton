/**
 *
 * @param {string} ip
 * @returns {Array<Number>}
 */
function inet_aton(ip) {
    let ret = [];
    let bytes = ip.split('.');

    for(let i = 0; i < 4; i ++) {
        ret.push(parseInt(bytes[i]));
    }

    return ret;
}

module.exports = inet_aton;