import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  constructor() { }

  ngOnInit() {
    // window._bd_share_config={
    //   "common":{
    //     "bdSnsKey":{},
    //     "bdText":"",//分享的内容
    //     "bdMini":"2",//下拉浮层中分享按钮的列数
    //     "bdPic":"",//分享的图片
    //     "bdStyle":"0",
    //     "bdSize":"16"//分享按钮的尺寸
    //   },//此处放置通用设置
    //     "share":{},//此处放置分享按钮设置
    //     "image":{
    //       "viewList" : ['qzone','tsina','huaban','tqq','renren'],//自定义展示层中的分享按钮类型和排列顺序.
    //       "viewText":"分享到：",
    //       "viewSize":"16"//图片分享展示层的图标大小
    //     },//此处放置图片分享设置
    //     "selectShare":{
    //       "bdContainerClass":null,//自定义划词分享的激活区域
    //       "bdSelectMiniList":["tieba"]//自定义弹出浮层中的分享按钮类型和排列顺序.
    //     }//此处放置划词分享设置
    // };
      
  }
}
// 分享媒体id对应表
// 名称	    ID
// 一键分享	mshare
// QQ空间	qzone
// 新浪微博	tsina
// 人人网	renren
// 腾讯微博	tqq
// 百度相册	bdxc
// 开心网	kaixin001
// 腾讯朋友	tqf
// 百度贴吧	tieba
// 豆瓣网	douban
// 搜狐微博	tsohu
// 百度新首页	bdhome
// QQ好友	sqq
// 和讯微博	thx
// 百度云收藏	bdysc
// 美丽说	meilishuo
// 蘑菇街	mogujie
// 点点网	diandian
// 花瓣	huaban
// 堆糖	duitang
// 和讯	hx
// 飞信	fx
// 有道云笔记	youdao
// 麦库记事	sdo
// 轻笔记	qingbiji
// 人民微博	people
// 新华微博	xinhua
// 邮件分享	mail
// 我的搜狐	isohu
// 摇篮空间	yaolan
// 若邻网	wealink
// 天涯社区	ty
// Facebook	fbook
// Twitter	twi
// linkedin	linkedin
// 复制网址	copy
// 打印	print
// 百度个人中心	ibaidu
// 微信	weixin
// 股吧	iguba