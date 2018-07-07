/**
 * 200 (Feedback) Response
 *
 * Usage:
 * return res.feedback(success, data, msg);
 *
 * @param  {code} code
 * @param  {Object} data
 * @param  {String} msg
 *
 * from jcc_sercer!
 */

module.exports = function feedback(code, dataObj, msg) {
	var res = this.res;
	body = { 'code': code, 'data': dataObj, 'msg': msg };
	return res.status(200).json(body);
};
