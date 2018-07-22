// fengxf added begin: 20140317
cordova.define("org.apache.cordova.appfilemanage", function(require,exports,module){

    var exec = require('cordova/exec');

    module.exports = {
        /** 
		 * 一共5个参数 
		   第一个 :成功会掉 
		   第二个 :失败回调 
		   第三个 :将要调用的类的配置名字(在config.xml中配置 稍后在下面会讲解) 
		   第四个 :调用的方法名(一个类里可能有多个方法 靠这个参数区分) 
		   第五个 :传递的参数  以json的格式 


        },
		 */  
        open: function() {			 
            console.log("cordovajs      open");
            exec(null,null,"appfilemanage","open",[]);
        }, 
		getFileInfo: function(successCallback,appcode) {
			console.log("cordovajs      getFileInfo");
			exec(successCallback,null,"appfilemanage","getFileInfo",[appcode]);
        },
		fileUpload: function(successCallback,appcode) {
			exec(successCallback,null,"appfilemanage","fileUpload",[]);
        }, 

		fileDownload: function(successCallback,appcode,appservercode,urlType,downloadUrl,saveUrl,filename,appname,fileSize,fileStatus) {
			console.log("cordovajs      fileDownload");
			exec(successCallback,null,"appfilemanage","fileDownload",[appcode,appservercode,urlType,downloadUrl,saveUrl,filename,appname,fileSize,fileStatus]);
        },

		rmFile: function(successCallback,appcode,filename) {
			console.log("cordovajs      rmFile");
			exec(successCallback,null,"appfilemanage","rmFile",[appcode,filename]);
        }
    };

});
