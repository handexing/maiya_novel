/**
 * 首页管理
 */
function mainConfig() {

	var self = this;

	this.init = function() {

		$("#m_Iframe").load("pages/indexPage.html");

		//		$('.logoBtn').bind('click', function() {
		//			$("#m_Iframe").attr("src", "view/indexPage.html").attr("name", "indexPage");
		//		});
		
	}

	self.init();
}