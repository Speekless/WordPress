if(typeof wp==="undefined"){var wp={}}(function(a,b){var c=function(e){var d=this,g={container:"container",browser:"browse_button",dropzone:"drop_element"},f;this.plupload=b.extend({multipart_params:{}},wpPluploadDefaults);this.container=document.body;b.extend(true,this,e);for(f in this){if(b.isFunction(this[f])){this[f]=b.proxy(this[f],this)}}for(f in g){if(!this[f]){continue}this[f]=b(this[f]).first();if(!this[f].prop("id")){this[f].prop("id","__wp-uploader-id-"+c.uuid++)}this.plupload[g[f]]=this[f].prop("id")}this.uploader=new plupload.Uploader(this.plupload);delete this.plupload;this.param(this.params||{});delete this.params;this.uploader.bind("Init",this.init);this.uploader.init();this.uploader.bind("UploadProgress",this.progress);this.uploader.bind("FileUploaded",function(h,j,i){i=JSON.parse(i.response);if(!i||!i.type||!i.data){return d.error(pluploadL10n.default_error)}if("error"===i.type){return d.error(i.data.message,i.data)}if("success"===i.type){return d.success(i.data)}});this.uploader.bind("Error",function(h,i){var k=pluploadL10n.default_error,j;for(j in c.errorMap){if(i.code===plupload[j]){k=c.errorMap[j];break}}d.error(k,i);h.refresh()});this.uploader.bind("FilesAdded",function(h,i){b.each(i,function(){d.added(this)});h.refresh();h.start()})};c.uuid=0;c.errorMap={FAILED:pluploadL10n.upload_failed,FILE_EXTENSION_ERROR:pluploadL10n.invalid_filetype,IMAGE_FORMAT_ERROR:pluploadL10n.not_an_image,IMAGE_MEMORY_ERROR:pluploadL10n.image_memory_exceeded,IMAGE_DIMENSIONS_ERROR:pluploadL10n.image_dimensions_exceeded,GENERIC_ERROR:pluploadL10n.upload_failed,IO_ERROR:pluploadL10n.io_error,HTTP_ERROR:pluploadL10n.http_error,SECURITY_ERROR:pluploadL10n.security_error};b.extend(c.prototype,{param:function(d,e){if(arguments.length===1&&typeof d==="string"){return this.uploader.settings.multipart_params[d]}if(arguments.length>1){this.uploader.settings.multipart_params[d]=e}else{b.extend(this.uploader.settings.multipart_params,d)}},init:function(){},error:function(){},success:function(){},added:function(){},progress:function(){},complete:function(){}});a.Uploader=c})(wp,jQuery);