class Download {
    //对外暴露下载接口。
    downloadFile(fileName, content) {
        let aLink = document.createElement('a');
        let blob = this.base64ToBlob(content); //new Blob([content]);
        let evt = document.createEvent("HTMLEvents");
        evt.initEvent("click", true, true);//initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
        aLink.download = fileName;
        aLink.href = URL.createObjectURL(blob);
        aLink.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));//兼容火狐
    }
    base64ToBlob(code) {
        let contentType = code;
        let raw = atob(contentType.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
        let rawLength = raw.length;
        let uInt8Array = new Uint8Array(rawLength);
        for (let i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        // new Blob 可以设置下载文件的后缀名类型 type
        return new Blob([uInt8Array], { type: 'image/png' });
    }
}
export {Download};