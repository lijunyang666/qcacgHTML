<?php echo CHelper::registerCssFile(Yii::app()->params['assetsUrl'] . '/css/new-league.css'); ?>
<?php echo CHtml::hiddenField('season_id',$seasonId)?>
<div class="container">
    <div class="clearfix">
        <div class="league-side-left">
            <div class="league-user-panel hide" id="has-login">
                <div class="clearfix" id="user-message">

                </div>
                <div id="user-data" class="mt10">

                </div>
                <div id="user-team" class="mt10">

                </div>
            </div>
            <div class="league-user-panel hide" id="no-login">
                <div class="clearfix no-login-content">
                    <div class="new-league-user-img">
                        <img src="<?php echo Yii::app()->params['assetsUrl']; ?>/img/index/avatar-empty.png" width="65" height="65" alt=""/>
                    </div>
                    <div class="league-user-content">
                        <p class="no-login-hello"><?php echo Yii::t('dota2League', 'Hi,你好'); ?></p>
                        <p class="login-get"><i></i><?php echo Yii::t('dota2League', '登录签到领5P豆'); ?></p>
                    </div>
                </div>
                <div class="goto-login clearfix">
                    <a class="pull-left" href="<?php echo Yii::app()->params['sso_login'].Yii::app()->request->hostInfo.Yii::app()->request->url;?>"><div class="goto-login-btn login-btn"><?php echo Yii::t('dota2League', '登录'); ?></div></a>
                    <a class="pull-left" href="<?php echo Yii::app()->params['sso_register'].Yii::app()->request->hostInfo.Yii::app()->request->url;?>"><div class="goto-login-btn register-btn"><?php echo Yii::t('dota2League', '新用户注册'); ?></div></a>
                </div>
            </div>
        </div>
        <div class="league-side-right pull-left">
            <ul class="league-logo-list hide new-league-list" id="league-side-right">

            </ul>
            <ul id='no-login-league' class="league-logo-list hide new-league-list">

            </ul>
            <ul id='no-league-games' class="league-logo-list hide new-league-list">

            </ul>
        </div>
    </div>
    <div class="hot-league-list">
        <div class="recommend-league-head new-league-head">
            <i class="blue-ground"></i><?php echo Yii::t('dota2League', '推荐赛事'); ?>
        </div>
        <div class="hot-league-details clearfix" id="recommend-league-list">
            
        </div>
    </div>
    <div class="recent-games clearfix">
        <div class="recent-games-left pull-left">
            <div class="new-league-head">
                <ul class="recent-games-nav" role="tablist">
                    <li class="active" role="presentation"><a href="#last-league" aria-controls="last-league" role="tab" data-toggle="tab"><?php echo Yii::t('dota2League', '最近比赛'); ?></a></li>
                    <li role="presentation"><a href="#all-league" aria-controls="all-league" role="tab" data-toggle="tab"><?php echo Yii::t('dota2League', '全部联赛'); ?></a></li>
                    <li role="presentation"><a href="#all-tournament" aria-controls="all-tournament" role="tab" data-toggle="tab"><?php echo Yii::t('dota2League', '全部杯赛'); ?></a></li>
                </ul>
            </div>
            <div class="tab-content">
                <div class="recent-games-details tab-pane active" role="tabpanel" id="last-league">
                    <ul class="league-lastgame-list new-league-list" id="league-lastgame-list">
                        
                    </ul>
                </div>
                <div class="recent-games-details tab-pane" role="tabpanel" id="all-league">
                    <div id="all-league-list">
                        
                    </div>
                </div>
                
                <div class="recent-games-details tab-pane" role="tabpanel" id="all-tournament">
                    <div id="all-tournament-list">
                    </div>
                </div>
            </div>
        </div>
        <div class="recent-games-right pull-right">
            <div class="new-league-head">
                <i class="blue-ground"></i><?php echo Yii::t('dota2League', 'CDEC大师赛排名'); ?>
            </div>
            <ul class="recent-games-list" id="recent-games-list">
                
            </ul>
        </div>
    </div>
</div>
<script type="text/html" id="league-side-right-template">
    {{each data as value i}}
    <li class="{{value.season_join_mode}}">
        <div class="league-img"><a href="{{value.season_view_url}}">
            <img src="{{imgHasMatch(value.league_logo,'crop','180','95')}}" width="180" height="95">
            <div class="img-league-bg"></div>
            <p class="img-league-name">{{value.league_name}}</p>
        </a></div>
        <p class="season-name"><?php echo Yii::t('dota2League', '赛季：'); ?>{{value.season_name}}</p>
        <p class="league-all-bonus text-color-yellow ellipsis" title="{{value.season_bonus}}"><?php echo Yii::t('dota2League', '总奖金：'); ?>{{value.season_bonus}}</p>
        <div class="new-league-status">
            <span class="pull-left"><?php echo Yii::t('dota2League', '在线数：'); ?>{{value.online_user}}</span>
            <span class="pull-right season-end-time ellipsis" title="{{value.season_end_time}}">{{value.season_end_time}}</span>
        </div>
        <div class="league-status-btn league-status-open" data-college="{{value.is_must_college}}"  data-type="{{value.league_type}}">
            {{if value.season_join_mode == 'end'}}
            <button class="btn btn-end league-button disabled" data-loading-text="Loading..." disabled="disabled">{{value.season_join_mode_text}}</button>
            {{else if value.season_join_mode && value.season_joined}}
            <a class="btn btn-primary" href="{{value.lobby_url}}?start=1" >{{value.season_join_mode_text}}</a>
            {{else if value.season_join_mode != 'wait'}}
            <button class="btn btn-success join-btn league-button" data-loading-text="Loading..." id="btn-{{value.season_id}}" data-icon="{{value.season_join_mode}}" data-id="join-btn" data-type="{{value.season_join_mode}}" data-league-id="{{value.league_id}}" data-season-id="{{value.season_id}}">{{value.season_join_mode_text}}</button>
            {{else if value.season_join_mode == 'wait'}}
            <button class="btn btn-wait league-button" data-loading-text="Loading...">{{value.season_join_mode_text}}</button> 
            {{/if}}
        </div>
    </li>
    {{/each}}
</script>
<script type="text/html" id="no-login-league-template">
    {{each data as value i}}
    <li class="{{value.season_join_mode}}">
        <div class="league-img {{value.type === 'tournament' ? 'tournament-img' : ''}}">
            <a href="<?php echo Yii::app()->params['sso_login'].Yii::app()->request->hostInfo.Yii::app()->request->url;?>">
                {{if value.type === 'tournament'}}
                <i class="tournament-tag"></i>
                {{else if value.type === 'league'}}
                <i class="league-tag"></i>
                {{/if}}
                <img src="{{imgHasMatch(value.logo,'crop','180','95')}}" width="180" height="95" alt="{{value.name}}" />
                {{if value.type === 'league'}}
                <div class="img-league-bg"></div>
                <p class="img-league-name ellipsis">
                    <span title="{{value.name}}">{{value.name}}</span>
                </p>
                {{/if}}
            </a>
        </div>
        {{if value.type === 'league'}}
        <p class="season-name ellipsis">
            <span title="<?php echo Yii::t('dota2League', '赛季：'); ?>{{value.season_name}}"><?php echo Yii::t('dota2League', '赛季：'); ?>{{value.season_name}}</span>
        </p>
        {{else}}
        <p class="season-name ellipsis">
            <span title="{{value.name}}">{{value.name}}</span>
        </p>
        {{/if}}
        <p class="league-all-bonus text-color-yellow ellipsis" title="{{value.bonus}}"><?php echo Yii::t('dota2League', '总奖金：'); ?>{{value.bonus}}</p>
        <div class="new-league-status">
            {{if value.type === 'league'}}
            <span class="pull-left"><?php echo Yii::t('dota2League', '在线数：'); ?>{{value.online_users}}</span>
            {{else}}
            <span class="pull-left"><?php echo Yii::t('dota2League', '参赛战队：'); ?>{{value.all_users}}</span>
            {{/if}}
            <span class="pull-right season-end-time ellipsis" title="{{value.season_end_time}}">{{value.time}}</span>
        </div>
        <div class="league-status-btn league-status-open hide {{value.type === 'tournament' ? 'tournament-status-btn' : ''}}"  data-type="{{value.league_type}}" data-college="{{value.is_must_college}}">
            {{if value.season_join_mode == 'end'}}
            <button class="btn btn-end disabled league-button" data-loading-text="Loading..." disabled="disabled">{{value.season_join_mode_text}}</button>
            {{else if value.season_join_mode && value.season_joined}}
                {{if value.type === 'league'}}
                <a class="btn btn-primary" href="{{value.lobby_url}}?start=1" >{{value.season_join_mode_text}}</a>
                {{else}}
                <a class="btn hide" id="btn-joined-{{value.id}}" href="/tournament/lobby/{{value.id}}" ><?php echo Yii::t('dota2League', '匹配游戏'); ?></a>
                {{/if}}
            {{else if value.season_join_mode != 'wait'}}
            {{if value.type === 'league'}}
            <button class="btn btn-success join-btn league-button" data-loading-text="Loading..." id="btn-{{value.id}}" data-icon="{{value.season_join_mode}}" data-id="join-btn" data-type="{{value.season_join_mode}}" data-league-id="{{value.id}}" data-season-id="{{value.season_id}}">{{value.season_join_mode_text}}</button>
            {{else}}
            <button class="btn btn-success join-btn league-button" data-loading-text="Loading..." id="btn-tournament-{{value.id}}" data-icon="{{value.join_mode}}" data-id="tournament-join-btn" data-type="{{value.join_mode}}" data-league-id="{{value.id}}"></button>
            {{/if}}
            {{else if value.season_join_mode == 'wait'}}
            <button class="btn btn-wait league-button" data-loading-text="Loading...">{{value.season_join_mode_text}}</button> 
            {{/if}}
        </div>
        <div class="league-status-btn league-status-join nologin-status-btn hide">
            <a href="<?php echo Yii::app()->params['sso_login'].Yii::app()->request->hostInfo.Yii::app()->request->url;?>" data-icon="{{value.season_join_mode}}">{{value.season_join_mode_text}}</a>
        </div>
    </li>
    {{/each}}
</script>
<script type="text/html" id="no-league-games-template">
    {{each data as value i}}
    <li class="{{value.season_join_mode}}">
        <div class="league-img"><a href="{{value.lobby_url}}">
            <img src="{{imgHasMatch(value.league_logo,'crop','180','95')}}" width="180" height="95">
            <div class="img-league-bg"></div>
            <p class="img-league-name">{{value.league_name}}</p>
        </a></div>
        <p class="season-name"><?php echo Yii::t('dota2League', '赛季：'); ?>{{value.season_name}}</p>
        <p class="league-all-bonus text-color-yellow ellipsis" title="{{value.season_bonus}}"><?php echo Yii::t('dota2League', '总奖金：'); ?>{{value.season_bonus}}</p>
        <div class="new-league-status">
            <span class="pull-left"><?php echo Yii::t('dota2League', '在线数：'); ?>{{value.online_user}}</span>
            <span class="pull-right season-end-time ellipsis" title="{{value.season_end_time}}">{{value.season_end_time}}</span>
        </div>
        <div class="league-status-btn league-status-open"  data-type="{{value.league_type}}" data-college="{{value.is_must_college}}">
            {{if value.season_join_mode == 'end'}}
            <button class="btn btn-end disabled league-button" data-loading-text="Loading..." disabled="disabled">{{value.season_join_mode_text}}</button>
            {{else if value.season_join_mode && value.season_joined}}
            <a class="btn btn-primary" href="{{value.lobby_url}}?start=1" >{{value.season_join_mode_text}}</a>
            {{else if value.season_join_mode != 'wait'}}
            <button class="btn btn-success join-btn league-button" data-loading-text="Loading..." id="btn-{{value.season_id}}" data-icon="{{value.season_join_mode}}" data-id="join-btn" data-type="{{value.season_join_mode}}" data-league-id="{{value.league_id}}" data-season-id="{{value.season_id}}">{{value.season_join_mode_text}}</button>
            {{else if value.season_join_mode == 'wait'}}
            <button class="btn btn-wait league-button" data-loading-text="Loading...">{{value.season_join_mode_text}}</button> 
            {{/if}}
        </div>
    </li>
    {{/each}}
</script>
<script type="text/html" id="recent-games-list-template">
    {{each data as value i}}
    <li class="guess-rank-media {{if (i+1) % 2 == 0}}even{{/if}} {{value.season_join_mode}}" data-id="694" data-list="{{i+1}}"><a href="{{value.url}}" target="_blank">
        <div class="media-left media-middle">
            <span class="guess-rank-list">{{i+1}}</span>
        </div>
        <div class="media-left media-middle cdec-rank-img {{if value.tags!=''}}vip{{/if}}" data-container="body" data-popover="user-card" data-id="{{value.id}}">
            <img class="guess-rank-avatar" src="{{imgHasMatch(value.avatar,'crop','36','36')}}" width="36" height="36" alt="{{value.nickname}}">
        </div>
        <div class="media-body media-middle ellipsis">
            <div class="cdec-rank-content">
                <span class="pull-right">{{value.league.score}}</span>
                <h4 class="cdec-rank-name ellipsis"><span title="{{value.nickname}}">{{value.nickname}}</span></h4>
            </div>
        </div>
    </a></li>
    {{/each}}
</script>
<script type="text/html" id="league-lastgame-list-template">
    {{each data}}
    <li>
        <div class="league-lastgame-hd">
            <a href="{{$value.season_url}}"><span class="recent-league-name">{{$value.league_name}}</span></a>
            <div class="pull-right">
                <i class="recent-games-icon recent-games-icon1 hide" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
                <i class="recent-games-icon recent-games-icon2 hide"></i>
                <i class="recent-games-icon recent-games-icon3 hide"></i>
                <a href="{{$value.match_url}}">
                {{if $value.win_team}}
                    <span class="text-color text-empty text-{{$value.win_team_camp}}">{{$value.result}}</span>
                {{else}}
                    <span class="text-color text-empty">{{$value.status_name}}</span>
                {{/if}}
                </a>
                ：{{$value.create_time}}
            </div>
        </div>
        <div class="league-lastgame-content">
            <div class="league-lastgame-row">
                <ul class="league-lastgame-user pull-right">
                    {{each lastGameUser($value.players.dire)}}
                        {{if $value.empty}}
                        <li class="league-lastgame-user-empty">
                            <div class="league-lastgame-user-img radius-hack">
                                <img src="<?php echo Yii::app()->params['assetsUrl']; ?>/img/index/avatar-empty.png" width="40" height="40" alt="">
                            </div>
                        </li>
                        {{else}}
                        <li class="{{if $value.tags!=''}}vip{{/if}}">
                            <div class="league-lastgame-user-img radius-hack" data-container="body" data-popover="user-card" data-id="{{$value.id}}">
                                <a href="{{$value.url}}" target="_blank">
                                    <img src="{{imgHasMatch($value.avatar,'crop','40','40')}}" width="40" height="40" alt="{{$value.nickname}}" />
                                </a>
                            </div>
                            <p class="league-lastgame-name ellipsis">
                                <a href="{{$value.url}}" target="_blank" title="{{$value.nickname}}">
                                    {{$value.nickname}}
                                </a>
                            </p>
                        </li>
                        {{/if}}
                    {{/each}}
                </ul>
                <ul class="league-lastgame-user pull-left">
                    {{each lastGameUser($value.players.radiant)}}
                        {{if $value.empty}}
                        <li class="league-lastgame-user-empty">
                            <div class="league-lastgame-user-img radius-hack">
                                <img src="<?php echo Yii::app()->params['assetsUrl']; ?>/img/index/avatar-empty.png" width="40" height="40" alt="">
                            </div>
                        </li>
                        {{else}}
                        <li class="{{if $value.tags!=''}}vip{{/if}}">
                            <div class="league-lastgame-user-img radius-hack" data-container="body" data-popover="user-card" data-id="{{$value.id}}">
                                <a href="{{$value.url}}" target="_blank">
                                    <img src="{{imgHasMatch($value.avatar,'crop','40','40')}}" width="40" height="40" alt="{{$value.nickname}}" />
                                </a>
                            </div>
                            <p class="league-lastgame-name ellipsis">
                                <a href="{{$value.url}}" target="_blank" title="{{$value.nickname}}">
                                    {{$value.nickname}}
                                </a>
                            </p>
                        </li>
                        {{/if}}
                    {{/each}}
                </ul>
                <div class="league-lastgame-vs">
                    <a href="{{$value.match_url}}"><p>
                        <span class="text-radiant text-middle"><?php echo Yii::t('dota2League', '天辉'); ?></span>
                        <strong class="text-radiant f20 text-middle ml5">{{$value.radiant_kills || '0'}}</strong>
                        <strong class="text-middle text-speach f14">:</strong>
                        <strong class="text-dire f20 text-middle">{{$value.dire_kills || '0'}}</strong>
                        <span class="text-dire text-middle ml5"><?php echo Yii::t('dota2League', '夜魇'); ?></span>
                    </p></a>
                </div>
            </div>
        </div>
    </li>
    {{/each}}
</script>
<script type="text/html" id="user-message-template">
    <div class="new-league-user-img league-user-{{if body.tags!=''}}vip{{/if}}">
        <img src="{{imgHasMatch(body.avatar,'crop','65','65')}}" width="65" height="65" alt=""/>
    </div>
    <div class="league-user-content">
        <p class="league-user-base">
            <span class="league-user-name ellipsis" title="{{body.nickname}}">{{body.nickname}}</span><span class="level-{{body.level}}"></span><span class="taps taps-dota2-pro"></span>
        </p>
        <ul class="league-user-assets">
            {{if body.tags!=''}}
            {{if body.tags[0].note}}
            <li>
                <span class="user-title">{{body.tags[0].note}}</span>
            </li>
            {{/if}}
            {{/if}}
            <li>
                <div class="base-pd"><p><span>{{body.gold}}</span></p></div>
                <a href="<?php echo Yii::app()->createUrl('/user/currency/convert')?>" class="text-success"><?php echo Yii::t('dota2League', '兑换'); ?></a>
            </li>
        </ul>
    </div>
</script>
<script type="text/html" id="user-data-template">
    <span>我的战绩</span>
    <ul class="league-user-data">
        <li>
            <p><?php echo Yii::t('dota2League', 'KDA'); ?></p>
            <span>{{data.kda || 0}}</span>
        </li>
        <li>
            <p><?php echo Yii::t('dota2League', 'GPM'); ?></p>
            <span>{{data.gpm || 0}}</span>
        </li>
        <li>
            <p><?php echo Yii::t('dota2League', 'XPM'); ?></p>
            <span>{{data.xpm || 0}}</span>
        </li>
        <li>
            <p><?php echo Yii::t('dota2League', '胜率'); ?></p>
            <span>{{data.win_rate || 0}}%</span>
        </li>
    </ul>
</script>
<script type="text/html" id="user-team-template">
    <span>我的战队</span>
    {{if body.teams.length > 0}}
    <ul class="league-user-team text-center">
        {{each body.teams as value i}}
        {{if i < 3}}
        <li>
            <a href="/team/{{value.id}}"><img src="{{value.logo+'/c/64x38'}}" alt="{{value.name}}" title="{{value.name}}"/></a>
        </li>
        {{/if}}
        {{/each}}
    </ul>
    {{else }}
    <div class="text-center">
        <a href="/user/team/create.html" class="user-team-create-btn">创建战队</a>
    </div>
    {{/if}}
</script>
<script type="text/html" id="all-league-list-template">
    <ul class="all-league-list new-league-list">
    {{each data as value i}}
    <li class="{{value.season_join_mode}}">
        <div class="all-league-logo pull-left"><a href="{{value.season_view_url}}"><img src="{{imgHasMatch(value.league_logo,'crop','175','92')}}" width="175" height="92"></a></div>
        <div class="all-league-content clearfix">
            <div class="pull-left all-league-message">
                <p class="league-list-name ellipsis"><a href="{{value.season_view_url}}"><span class="all-league-name">{{value.league_name}}-{{value.season_name}}</span></a></p>
                <p class="league-list-mode"><span class="league-once-money"><?php echo Yii::t('dota2League', '联赛时间：'); ?>{{value.season_end_time}}</span></p>
                <p class="league-list-mode"><span class="league-once-money"><?php echo Yii::t('dota2League', '单局赏金：'); ?>{{value.season_gold}} P</span><span class="league-once-money"><?php echo Yii::t('dota2League', '报名人数：'); ?>{{value.season_user}}</span><span class="all-league-mode">{{value.season_game_mode}}</span></p>
                <p class="text-color-yellow"><?php echo Yii::t('dota2League', '总奖金：'); ?>{{value.season_bonus}}</p>
            </div>
            <div class="pull-right goto-join">
                <div class="league-status-btn league-status-join login-status-btn hide" data-type="{{value.league_type}}" data-college="{{value.is_must_college}}">
                    {{if value.season_join_mode == 'end'}}
                    <button class="btn btn-end disabled league-button" data-loading-text="Loading..." disabled="disabled">{{value.season_join_mode_text}}</button>
                    {{else if value.season_join_mode && value.season_joined}}
                    <a class="btn btn-primary" href="{{value.lobby_url}}?start=1" >{{value.season_join_mode_text}}</a>
                    {{else if value.season_join_mode != 'wait'}}
                    <button class="btn btn-success join-btn league-button" data-loading-text="Loading..." id="btn-{{value.season_id}}" data-icon="{{value.season_join_mode}}" data-id="join-btn" data-type="{{value.season_join_mode}}" data-league-id="{{value.league_id}}" data-season-id="{{value.season_id}}">{{value.season_join_mode_text}}</button>
                    {{else if value.season_join_mode == 'wait'}}
                    <button class="btn btn-wait league-button" data-loading-text="Loading...">{{value.season_join_mode_text}}</button> 
                    {{/if}}
                </div>
                <div class="league-status-btn league-status-join nologin-status-btn hide">
                    <a href="<?php echo Yii::app()->params['sso_login'].Yii::app()->request->hostInfo.Yii::app()->request->url;?>" data-icon="{{value.season_join_mode}}">{{value.season_join_mode_text}}</a>
                </div>
            </div>
        </div>
    </li>
    {{/each}}
    </ul>
    {{if page && page.totalPage>1}}
    <div class="text-center pager"></div>
    {{/if}}
</script>
<script type="text/html" id="all-tournament-list-template">
    <ul class="all-league-list new-league-list">
    {{each body.lists as value i}}
        <li class="{{value.status}}">
        <div class="all-league-logo pull-left"><a href="/tournament/{{value.id}}.html"><img src="{{value.logo}}/c/175x92" width="175" height="92"></a></div>
        <div class="all-league-content clearfix">
            <div class="pull-left all-league-message">
                <p class="league-list-name ellipsis"><a href="/tournament/{{value.id}}.html"><span class="all-league-name" title={{value.name}}>{{value.name}}</span></a></p>
                <p class="league-list-mode"><span class="league-once-money"><?php echo Yii::t('dota2League', '杯赛时间：'); ?>{{dateFormat(value.start_time)}} ~ {{dateFormat(value.end_time)}}</span></p>
                <p class="league-list-mode"><span class="league-once-money"><?php echo Yii::t('dota2League', '报名费用：'); ?>{{value.join_cost}} P</span><span class="league-once-money"><?php echo Yii::t('dota2League', '报名战队数：'); ?>{{value.teams}}</span><span class="all-league-mode">{{value.game_mode_name}}</span></p>
                <p class="text-color-yellow ellipsis"><?php echo Yii::t('dota2League', '总奖金：'); ?>{{value.bonus}}</p>
            </div>
            <div class="pull-right goto-join">
            <div class="tournament-status-btn league-status-btn league-status-join login-status-btn hide" data-type="{{value.game_type}}">
            {{if value.status == 'end'}}
            <button class="btn btn-end disabled league-button" data-loading-text="Loading..." disabled="disabled">{{value.status_name}}</button>
            {{else if value.join_status == 'observe'}}<!-- 裁判或OB -->
            <a class="btn btn-info league-button btn-manage-join" style="padding: 0;font-size: 14px" href="/tournament/lobby/{{value.id}}.html" ><?php echo Yii::t('tournament', '裁判/OB进入'); ?></a>
            {{else if value.join_status=="joined"}}
            <a class="btn btn-info league-button" href="/tournament/lobby/{{value.id}}.html"  style="padding: 0;"><?php echo Yii::t('tournament', '进入比赛'); ?></a>
            {{else if value.join_status == 'pending'}}
            <button class="btn btn-wait league-button" data-loading-text="Loading..."><?php echo Yii::t('tournament', '等待审核'); ?></button>
            {{else if dateCompare(value.join_start_time) == 2}}
            <button class="btn btn-end disabled league-button" data-loading-text="Loading..." disabled="disabled"><?php echo Yii::t('tournament', '报名未开始'); ?></button>
            {{else if dateCompare(value.join_end_time) == 0}}
            <button class="btn btn-end disabled league-button" data-loading-text="Loading..." disabled="disabled"><?php echo Yii::t('tournament', '报名已结束'); ?></button>
            {{else if value.join_status=="unjoin" || value.join_status=='reject'}}
            <a class="btn hide btn-info league-button" id="btn-joined-{{value.id}}" href="/tournament/lobby/{{value.id}}.html" style="padding: 0;"><?php echo Yii::t('tournament', '进入比赛'); ?></a>
            <button class="btn btn-wait league-button hide" id="btn-wait-{{value.id}}"  data-loading-text="Loading..."><?php echo Yii::t('dota2League', '等待审核'); ?></button>
            <button class="btn btn-success tournament-apply-btn join-btn league-button" style="padding:0" data-loading-text="Loading..." id="btn-tournament-join-{{value.id}}" data-index="{{i}}">
                <?php echo Yii::t('dota2League', '报名参赛'); ?>
            </button>
            {{/if}}
                </div>
                <div class="league-status-btn league-status-join nologin-status-btn hide">
                    {{if value.status == 'end'}}
                    <button class="btn-end disabled league-button" data-loading-text="Loading..." disabled="disabled">{{value.status_name}}</button>
                    {{else}}
                    <a href="<?php echo Yii::app()->params['sso_login'].Yii::app()->request->hostInfo.Yii::app()->request->url;?>" data-icon="{{value.season_join_mode}}"><?php echo Yii::t('dota2League', '报名参赛'); ?></a>
                    {{/if}}
                </div>
            </div>
        </div>
    </li>
    {{/each}}
    </ul>
    <div id="tournament-page" class="text-center">
    </div>
</script>
<script type="text/html" id="recommend-league-list-template">
    {{each data as value i}}
    <a href="{{value.type === 'league' ?  '/league/season/'+value.season_id+'.html' : '/tournament/' + value.id+'.html'}}" class="hot-league-item">
        <div class="pull-left hot-league-pic flip-container">
            <div class="flipper">
                <div class="league-details-mess front">
                    {{if value.type === 'tournament'}}
                    <i class="tournament-tag"></i>
                    {{else if value.type === 'league'}}
                    <i class="league-tag"></i>
                    {{/if}}
                    <img src="{{imgHasMatch(value.logo,'crop','250','132')}}" width="250" height="132" alt="{{value.name}}">
                    <p class="league-details-name ellipsis">{{value.name}}</p>
                    <p class="league-bonus ellipsis" title="{{value.bonus}}">
                        <i></i><?php echo Yii::t('dota2League', '总奖金'); ?>：{{value.bonus}}
                    </p>
                </div>
                <div class="league-details-mess back">
                    <div class="league-back-top">
                        <p class="league-back-name ellipsis" title="{{value.name}}">{{value.name}}</p>
                        <p class="league-back-details">
                            <span class="description">{{description(setContent(value.description))}}</span></p>
                        <p class="league-details-time">{{value.time}}</p>
                    </div>
                    <div class="league-back-bottom">
                        <ul>
                            <li>
                                <p><?php echo Yii::t('dota2League', '游戏模式'); ?></p>
                                <span class="league-back-type ellipsis" title="{{value.game_mode}}">{{value.game_mode}}</span>
                            </li>
                            <li>
                                <p>{{value.type === 'league' ? "<?php echo Yii::t('dota2League', '赏金额度'); ?>" : "<?php echo Yii::t('dota2League', '报名费用'); ?>"}}</p>
                                <span class="text-radiant">{{value.gold}}P</span>
                            </li>
                            <li>
                                {{if value.type === 'league'}}
                                <p><?php echo Yii::t('dota2League', '在线 / 总人数'); ?></p>
                                <span class="online-num">{{value.online_users}}</span> / <span>{{value.all_users}}</span>
                                {{else}}
                                <p><?php echo Yii::t('dota2League', '参赛战队'); ?></p>
                                <span>{{value.all_users}}</span>
                                {{/if}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </a>
    {{/each}}
    
</script>
<!-- 用户名片模版s -->
<?php $this->renderPartial('/layouts/league_card'); ?>
<!-- 用户名片模版e -->
<!-- 联赛加入方法s -->
<?php $this->renderPartial('/layouts/_league_join'); ?>
<!-- 联赛加入方法e -->

<!--[if lt IE 10]>
<script src="<?php echo Yii::app()->params['assetsUrl'].'/js/jquery.xdomainrequest.min.js' ?>"></script>
<![endif]-->
<?php
    echo CHelper::registerScriptFile(Yii::app()->params['assetsUrl'] . '/js/template.js', 2);
    echo CHelper::registerScriptFile(Yii::app()->params['assetsUrl'] . '/js/jquery.twbsPagination.min.js', 2);
    echo CHelper::registerScriptFile(Yii::app()->params['assetsUrl'] . '/js/require.js', 2);
    echo CHelper::registerScriptFile(Yii::app()->params['assetsUrl'] . '/js/league/league-index.js', 2);
?>
<script type="text/javascript">
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>
<!-- 杯赛加入方法s -->
<?php $this->renderPartial('/layouts/_tournament_join'); ?>
