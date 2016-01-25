var $ = require('jquery');

var Request = function Request() {
	this.getAuthKey = function() {
		//if authtoken expired redirect to login etc
		return "3b502b3f-b1ff-4128-bd99-626e74836d9c";
	}
}

Request.prototype.getData = function(url, data, callback){
	if (!data) data = {};
	data.authToken = this.getAuthKey();
	data = $.param(data, true);
	$.ajax({
		  url: url,
		  type: 'GET',
		  data: data
		}).done(callback);
	
};




module.exports = new Request();