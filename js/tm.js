//顶部监听效果开始
{
    let topbar = document.querySelector('.topbar-box')
    window.onscroll = function () {
        let obj = document.body.scrollTop === 0 ?
            document.documentElement.scrollTop : document.body;
        let st = obj.scrollTop;
        if (st > 800) {
            topbar.style.top = '0';
        } else {
            topbar.style.top = '-50px';
        }
    }
}
//顶部监听效果结束
// 左侧导航最下面回到顶部
{
    let totop = document.querySelector('.totop');
    console.log(totop)
    window.addEventListener('scroll', function () {
        let obj = document.body.scrollTop === 0 ?
            document.documentElement.scrollTop :
            document.body;
        totop.onclick = function () {
            animate(obj, {scrollTop: 0}, 500);
        }
    })
}
// 左侧导航最下面回到顶部结束
//左侧导航效果开始-------------------------
{
    let leftbar = document.querySelector('.leftbar-box');
    window.addEventListener('scroll', function () {
        let obj = document.body.scrollTop === 0 ?
            document.documentElement.scrollTop : document.body;
        let st = obj.scrollTop;
        if (st > 800) {//左侧导航出现、隐藏效果
            leftbar.style.cssText = 'width:36px;height:324px;';
        } else {
            leftbar.style.cssText = 'width:0;height:0;';
        }
    })
}
//左侧导航效果结束----------------------
//左侧导航楼层点击效果----用animate------------------------
{
    let btns = document.querySelectorAll('.leftbar li');
    let contents = document.querySelectorAll('.content');
    let obj = document.body.scrollTop === 0 ?
        document.documentElement.scrollTop : document.body;
    btns.forEach(function (ele, index) {
        ele.onclick = function () {//鼠标点击效果，显示楼层效果
            let ot = contents[index].offsetTop;
            animate(obj, {scrollTop: ot - 70}, 1000, function () {
            });
        }
    })
}
//左侧楼层点击效果结束------------
{
//左侧导航内容动  左侧导航效果----------------
    let btns = document.querySelectorAll('.leftbar li');
    let contents = document.querySelectorAll('.content');
    let demo = document.querySelector('.demo');
    window.addEventListener('scroll', function () {
        let obj = document.body.scrollTop === 0 ?
            document.documentElement.scrollTop : document.body;
        let st = obj.scrollTop;
//效果：内容动 左侧按钮颜色变
        for (let i = 0; i < contents.length; i++) {
            if (st >= contents[i].offsetTop - 70) {
                for (let j = 0; j < btns.length; j++) {
                    btns[j].classList.remove('active');
                }
                btns[i].classList.add('active');
            }
        }
    })
}
//按需加载开始------------------------
{
    window.addEventListener('scroll',function(){
        let obj = document.body.scrollTop === 0 ?
            document.documentElement.scrollTop : document.body;
        let st = obj.scrollTop;
        let contentinners = document.querySelectorAll('.content-inner');
        console.log(contentinners)
        for (let i = 0; i < contentinners.length; i++) {
            if (st >= contentinners[i].offsetTop - window.innerHeight) {
                let imgs = contentinners[i].querySelectorAll('img');
                console.log(imgs)
                for (let j = 0; j < imgs.length; j++) {
                    imgs[j].src = imgs[j].getAttribute('data-src');
                }
            }
        }
    })
}
//按需加载结束-----------
//轮播开始-----------------------------
{
    var colors = ['#FCDB64', '#FB4B26', '#F78C94', '#E8E8E8', '#FE9A1E', '#E9E8E8'];
    var bg = document.querySelector('.banner');
    let imgs = document.querySelectorAll('.banner-pcbox li');
    let dians = document.querySelectorAll('.dian-box li');
    var d = dians.length, l = imgs.length;
    dians.forEach(function (ele, index) {
        ele.onmouseover = function () {//鼠标移入
            for (var i = 0; i < d; i++) {
                dians[i].classList.remove('active');
                imgs[i].classList.remove('active');
                bg.classList.remove('big-active');
            }
            ele.classList.add('active');
            imgs[index].classList.add('active');
            bg.style.background = colors[index];
            now = index;
        }
    })
//自动轮播   //轮播图背景色的效果
    var now = 0;
    var stop = setInterval(fn, 2000);
    function fn() {
        now++;
        if (now === d) {
            now = 0;
        }
        for (var i = 0; i < d; i++) {
            dians[i].classList.remove('active');
            imgs[i].classList.remove('active');
            bg.classList.remove('big-active');
        }
        dians[now].classList.add('active');
        imgs[now].classList.add('active');
        bg.style.background = colors[now];
    }
//鼠标移入停止，移除自动轮播
    var pc_box = document.querySelector('.banner-pcbox');
    pc_box.onmouseover = function () {
        clearInterval(stop);
    }
    pc_box.onmouseout = function () {
        stop = setInterval(fn, 2000);
    }
}

