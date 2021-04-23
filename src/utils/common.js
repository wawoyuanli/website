export function goAnchor(selector) {
    let _th=this
    console.info("selector1", selector)
    var anchor = this.$el.querySelector(selector);//获取元素
    console.info("anchor", anchor)
    if (anchor) {
        setTimeout(() => {//页面没有渲染完成时是无法滚动的，因此设置延迟         
            var targetOffset = $(selector).offset().top;

            console.info("targetOffset", anchor, targetOffset)

            $('html,body').animate({
                scrollTop: targetOffset

            },

                1000);

        }, 500);

    }

}

export function getQueryString(name) {
    var href = window.location.href;

    var r = getSearchString(name, href);

    if (r != null) return decodeURI(r);

    return null;
}
export function getSearchString(key, Url) {
    var str = Url;

    str = str.substring(1, str.length);

    if (str.indexOf("?") != -1) {
        var arr = str.split("?")[1].split("&");// 获取？后的参数内容，并以&分隔字符串，获得类似name=xiaoli这样的元素数组

        var obj = new Object();

        // 将每一个数组元素以=分隔并赋给obj对象

        for (var i = 0; i < arr.length; i++) {
            var tmp_arr = arr[i].split("=");
            obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
        }
        return obj[key];
    }
}
