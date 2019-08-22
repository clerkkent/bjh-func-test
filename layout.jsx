import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import {withRouter} from 'react-router';
import P404 from './pages/P404';
import { pagesComponents } from './pages';
import * as environment from './utils/environment';
import handleLoading from './utils/loading';
import weixin from './utils/weixin';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';

const {
    // under content is keywords,don't remove!
    
                
                
    // replace
             [object Object],
             oppo,
             oppo,
             oppo,
             oppo,
             oppo,
             oppo,
             oppo,
             oppo,
             oppo,
             kolp,
             kkl,
            l,
            l,
            l,
            l,
            l,
            l,
            l,
            l,
            l,
            lp,
            lp,
            l,
            lpo,
            klo,
            kh,
            
                lki,
            
                l,
            
                l,
            
    // RedPackets,
    RedPacketsGuidePage,
    // RedPacketsGuide,
    RedPacketsDetail,
    // FollowPrizeDetail,
    FollowPrizeRule,
    // FollowPrizeGuide,
    FollowPrizeGuidePage,

    // 两周年H5
    AuthorDetail,
    ClassifyPoly,
    PhotoPoly,
    BaseInfo,
    RedPacketDetail,
    CustomInfoEdit,
    CustomInfoPublish,

    // 导师计划
    MentorProgram,

    // 端上页面
    NaArticle,
    // 答题活动
    AnswerQuestion,
    AnswerHomeGuider,
    AQRedPacketDetail,
    Result,

    // 汽车频道投票活动
    HomePage,
    FinalResult,
    // 百万年薪投票
    MillionAuthorVote,

    // 汽车三期-达人榜
    TalentListHome,

    // 春节刷资讯领红包
    springFestivalHomeGuider,
    springFestivalRule,
    springFestivalUpdate,

    // 汽车签到
    CarSignIn,
    // feed感情化分享
    AnnualReview,
    // pick爱豆-时尚频道
    pickIdol,
    pickList,
    cardList,
    pickIdolInformation,
    // 汽车频道全部栏目聚合页
    CarAggregatePage,
    Sunray,
    // 刷咨询赛龙舟
    DragonBoatFestivalHome,
    DragonBoatFestivalMyTeam,
    DragonBoatFestivalBackflow,
    DragonBoatFestivalUpdate,
    // 刷咨询赛龙舟 替换路由
    DragonBoatRacingHome,
    DragonBoatRacingBackflow,
    DragonBoatRacingMyTeam,
    DragonBoatRacingUpdate,
    // 童心时间项目
    childTime,
    childTimeHomeGuider,
    // 小程序回流页相关
    // --汽车老司机训练营小程序
    swanShareCarDaren,

    //音你成名
    yncmVote,

    // others 杂项
    carSharebackToFeed,
    // 万象创作
    WanXiang,
    // 国风频道名家榜
    nationalWind,
    goFeedTab,
    jikaGoFeedTab,
    yncmVoteAgreement
} = pagesComponents;

class Layout extends React.Component {

    static propTypes = {
        subscribe: PropTypes.func,
        getState: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.subscribe(() => {
            this.setState({
                global: this.props.getState().toJS().global
            });
        });

        // 页面初始化打点
        window.MP && window.MP.stats({
            urlkey: '-pv/uv'
        });
    }

    componentDidMount() {
        this.initWeiXin(this.props.location.pathname);
        window.iNoBounce && window.iNoBounce.disable(); // 引入iNoBounce橡皮筋效果被禁掉，需要手动打开。在需要禁掉的地方在禁掉就行
        // 处理loading引导页面逻辑
        handleLoading();
    }

    componentWillReceiveProps(nextProps) {
        const {pathname, search} = this.props.location;
        const {pathname: nextPathname, search: nextSearch} = nextProps.location;
        if (pathname + search !== nextPathname + nextSearch) {
            window.MP && window.MP.stats({
                urlkey: '-pv/uv'
            });
            this.initWeiXin(nextPathname);
        }
    }

    initWeiXin(pathname) {
        if (environment.isWeiXin()) {
            weixin(pathname);
        }
    }

    render() {
        return (
            <div className="mp-container">
                {/* 路由定义规范  /activity/m/rc/xxxx */}
                <Route exact path="/activity/m/rc/404" component={P404} />
                
                
                
                
                
                {/* replace */}
<Route exact path="/activity/m/rc/kkl" component={kkl} />
<Route exact path="/activity/m/rc/kopo" component={kopo} />
                <Route exact path="/activity/m/rc/kkl" component={kkl} />

                <Route exact path="/activity/m/rc/klo" component={klo} />
                <Route exact path="/activity/m/rc/op" component={op} />
                <Route exact path="/activity/m/rc/l" component={l} />
                <Route exact path="/activity/m/rc/l" component={l} />
                <Route exact path="/activity/m/rc/l" component={l} />
                <Route exact path="/activity/m/rc/l" component={l} />
                <Route exact path="/activity/m/rc/l" component={l} />
                <Route exact path="/activity/m/rc/l" component={l} />
                <Route exact path="/activity/m/rc/l" component={l} />
                <Route exact path="/activity/m/rc/l" component={l} />
                <Route exact path="/activity/m/rc/l" component={l} />
                <Route exact path="/activity/m/rc/lp" component={lp} />
                <Route exact path="/activity/m/rc/lp" component={lp} />
                <Route exact path="/activity/m/rc/l" component={l} />
                <Route exact path="/activity/m/rc/lpo" component={lpo} />
                <Route exact path="/activity/m/rc/klo" component={klo} />
                <Route exact path="/activity/m/rc/kh" component={kh} />
                <Route exact path="/activity/m/rc/lki" component={lki} />
            
                <Route exact path="/activity/m/rc/l" component={l} />
            
                <Route exact path="/activity/m/rc/l" component={l} />
            
                {/*feed感情化分享*/}
                <Route exact path="/activity/m/rc/wanxiang" component={WanXiang} />
                <Route exact path="/activity/m/rc/Sunray" component={Sunray} />
                <Route exact path="/activity/m/rc/AnnualReview" component={AnnualReview} />
                <Route exact path="/activity/m/rc/shakehappy3" component={RedPacketsGuidePage} />
                <Route exact path="/activity/m/rc/redpackets/detail" component={RedPacketsDetail} />
                <Route exact path="/activity/m/rc/followPrize/detail" component={FollowPrizeGuidePage} />
                <Route exact path="/activity/m/rc/followPrize/rule" component={FollowPrizeRule} />
                {/*两周年活动*/}
                <Route exact path="/activity/m/rc/twoYear/toC/authorDetail" component={AuthorDetail} />
                <Route exact path="/activity/m/rc/twoYear/toC/redPacketDetail" component={RedPacketDetail} />
                <Route exact path="/activity/m/rc/twoYear/toB/baseInfo" component={BaseInfo} />
                <Route exact path="/activity/m/rc/twoYear/toC/classifyPoly" component={ClassifyPoly} />
                <Route exact path="/activity/m/rc/twoYear/toC/photoPoly" component={PhotoPoly} />
                <Route exact path="/activity/m/rc/twoYear/toB/customInfo/edit" component={CustomInfoEdit} />
                <Route exact path="/activity/m/rc/twoYear/toB/customInfo/publish" component={CustomInfoPublish} />
                {/* 导师计划 */}
                <Route exact path="/activity/m/rc/mentorProgram" component={MentorProgram} />
                {/* 端上页面 */}
                <Route exact path="/activity/m/rc/na/article/:albumId/:articleId" component={NaArticle} />
                {/*答题赢现金一期地址 废弃*/}
                {/* <Route exact path="/activity/m/rc/answerQuestion/answer" component={AnswerQuestion} />
                <Route exact path="/activity/m/rc/answerQuestion/home" component={AnswerHomeGuider} />
                <Route exact path="/activity/m/rc/answerQuestion/redPacketDetail" component={AQRedPacketDetail} />
                <Route exact path="/activity/m/rc/answerQuestion/result" component={Result} /> */}
                {/*答题赢现金二期 废弃*/}
                {/*<Route exact path="/activity/m/rc/answerQuestion/2/answer" component={AnswerQuestion} />
                <Route exact path="/activity/m/rc/answerQuestion/2/home" component={AnswerHomeGuider} />
                <Route exact path="/activity/m/rc/answerQuestion/2/redPacketDetail" component={AQRedPacketDetail} />
                <Route exact path="/activity/m/rc/answerQuestion/2/result" component={Result} />*/}
                {/*答题赢现金三期*/}
                <Route exact path="/activity/m/rc/answerQuestion/3/answer" component={AnswerQuestion} />
                <Route exact path="/activity/m/rc/answerQuestion/3/home" component={AnswerHomeGuider} />
                <Route exact path="/activity/m/rc/answerQuestion/3/redPacketDetail" component={AQRedPacketDetail} />
                <Route exact path="/activity/m/rc/answerQuestion/3/result" component={Result} />
                {/* 汽车频道投票活动 投票结束后直接路由到结果页，不用之前的跳转逻辑 */}
                <Route exact path="/activity/m/rc/carChannelVote/homePage" component={HomePage} />
                <Route exact path="/activity/m/rc/carChannelVote/finalResult" component={FinalResult} />
                {/* 百万年薪投票活动 */}
                <Route exact path="/activity/m/rc/millionAuthorVote" component={MillionAuthorVote} />
                {/* 汽车三期达人榜 */}
                <Route exact path="/activity/m/rc/carTalentList/home" component={TalentListHome} />
                {/* 春节刷资讯领红包 */}
                <Route exact path="/activity/m/rc/springFestivalPackets/home" component={springFestivalHomeGuider} />
                <Route exact path="/activity/m/rc/springFestivalPackets/rule" component={springFestivalRule} />
                <Route exact path="/activity/m/rc/springFestivalPackets/update" component={springFestivalUpdate} />
                {/* 汽车签到 */}
                <Route exact path="/activity/m/rc/carSignIn" component={CarSignIn} />
                {/* pick爱豆-时尚频道 */}
                <CacheRoute exact path="/activity/m/rc/pickIdol/home" component={pickIdol} />
                <CacheRoute exact path="/activity/m/rc/pickIdol/pickList" component={pickList} />
                <CacheRoute exact path="/activity/m/rc/pickIdol/cardList" component={cardList} />
                <CacheRoute exact path="/activity/m/rc/pickIdol/information/:id" component={pickIdolInformation} />
                {/* 汽车频道全部栏目聚合页 */}
                <Route exact path="/activity/m/rc/CarAggregatePage" component={CarAggregatePage} />
                {/* 刷咨询赛龙舟 */}
                <Route exact path="/activity/m/rc/dragonBoatFestival/home" component={DragonBoatFestivalHome} />
                <Route exact path="/activity/m/rc/dragonBoatFestival/backflow" component={DragonBoatFestivalBackflow} />
                <Route exact path="/activity/m/rc/dragonBoatFestival/myteam" component={DragonBoatFestivalMyTeam} />
                <Route exact path="/activity/m/rc/dragonBoatFestival/update" component={DragonBoatFestivalUpdate} />
                {/* 刷咨询赛龙舟 */}
                <Route exact path="/activity/m/rc/dragonBoatRacing/home" component={DragonBoatFestivalHome} />
                {/* 童心时间-公益项目 */}
                <Route exact path="/activity/m/rc/childTime/home" component={childTimeHomeGuider} />
                <Route exact path="/activity/m/rc/childTime" component={childTime} />
                <CacheRoute exact path="/activity/m/rc/swanShare/cardaren" component={swanShareCarDaren} />
                <CacheRoute exact path="/activity/m/rc/others/carSharebackToFeed" component={carSharebackToFeed} />
                {/* 国风频道名家榜 */}
                <Route exact path="/activity/m/rc/nationalWind" component={nationalWind} />
                {/* 跳转频道中间页 */}
                <CacheRoute exact path="/activity/m/rc/others/goFeedTab" component={goFeedTab} />
                {/* 集卡活动定制化频道跳转中间页 */}
                <CacheRoute exact path="/activity/m/rc/others/jikaGoFeedTab" component={jikaGoFeedTab} />
                {/* 音你成名 */}
                <Route exact path="/activity/m/rc/yncmVote" component={yncmVote} />
                <Route exact path="/activity/m/rc/yncmVoteAgreement" component={yncmVoteAgreement} />
            </div>
        );
    }
}

const LayoutWithRouter = withRouter(Layout);

export default store => {
    return <LayoutWithRouter {...store} />;
};

export default name => {
    return [{
        "layout.jsx": {
            "tag": "// replace",
            "add_content": `<Route exact path="/activity/m/rc/${name}" component={${name}} />`
        }
    }]
}