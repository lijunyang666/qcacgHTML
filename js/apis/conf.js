var PathList = {};

PathList.TemprootPath = '';
PathList.TemprootPath = 'http://127.0.0.1:8020/ROOT'; // 页面跳转用这个

PathList.rootPath = '/Controller';
PathList.rootPath = 'http://www.qcacg.cn/Controller'; // 封面 头像


// 登陆的3个请求
PathList.VerifyLoginServlet = PathList.rootPath + '/VerifyLoginServlet';
PathList.StartCaptchaServlet = PathList.rootPath + '/StartCaptchaServlet';
PathList.login = PathList.rootPath + '/login.shtml';
// 注册的2个请求
PathList.registerTelephoneCode = PathList.rootPath + '/registerTelephoneCode.shtml';
PathList.register = PathList.rootPath + '/register.shtml';


// 查看用户创建作品列表 不需要传数据
PathList.findBookByUser = PathList.rootPath + '/book/findBookByUser.shtml';
// 查看作者创建作品目录页 需要传入作品id
PathList.queryBook = PathList.rootPath + '/book/queryBook.shtml'
// 作者作品新增卷
PathList.saveOrUpdateVolume = PathList.rootPath + '/volume/saveOrUpdateVolume.shtml';
// 作者新建作品上传封面页
PathList.bookUpload = PathList.rootPath + '/book/upload.shtml';
// 作者新建与修改作品的接口
PathList.saveOrUpdateBook = PathList.rootPath + '/book/saveOrUpdateBook.shtml';
// 作者阅读章节接口
PathList.findContent = PathList.rootPath + '/content/findContent.shtml';
// 作者新建章节接口
PathList.saveOrUpdateContent = PathList.rootPath + '/content/saveOrUpdateContent.shtml';

// 获取作品分类的接口
PathList.queryBookType = PathList.rootPath + '/bookType/queryBookType.shtml';

// 读者访问目录页
PathList.queryBookDirectory = PathList.rootPath + '/catalog/queryBookDirectory.shtml';
//作者其他作品的
PathList.findUserOtherBook = PathList.rootPath + '/catalog/findUserOtherBook.shtml';
//阅读页
PathList.findContent = PathList.rootPath + '/catalog/findContent.shtml';

PathList.queryBookTitle = PathList.rootPath + '/bookType/queryBook.shtml';

// 分类页面
PathList.queryBookClass = PathList.rootPath + '/bookType/filter.shtml';

//主页
PathList.getIndexData = PathList.rootPath + '/index/getIndexData.shtml';
//小编推荐
PathList.nextBatch = PathList.rootPath + '/index/nextBatch.shtml';
//排行榜
PathList.getRankingList = PathList.rootPath + '/rank/getRankingList.shtml';

//我的书架 -我的收藏
PathList.findBookCollectByUser = PathList.rootPath + '/bookCollect/findBookCollectByUser.shtml';
//我的书架-我的浏览记录
PathList.findBookCollectByUser = PathList.rootPath + '/bookCollect/findBookCollectByUser.shtml';
// 判断是否登入
PathList.getStatus = PathList.rootPath + '/getStatus.shtml';
// 添加或取消收藏
PathList.saveOrDeleteBookCollect =  PathList.rootPath + '/bookCollect/saveOrDeleteBookCollect.shtml';
// 获取评论
PathList.findCommentAndReplyByReplyUserId = PathList.rootPath + '/reply/findCommentAndReplyByReplyUserId.shtml';
// 获取个人信息
PathList.queryUser = PathList.rootPath + '/user/queryUser.shtml';
// 修改个人信息
PathList.updateUser = PathList.rootPath + '/user/updateUser.shtml';
