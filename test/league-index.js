/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require.config({
    urlArgs: 'v=' + WORKSPACE.VERSION,
    paths: {
        spin: assetsUrl + '/js/spin.min',
        template: assetsUrl + '/js/template',
        templateNs: assetsUrl + '/js/template-native',
        leagueView: assetsUrl + '/js/league-view',
        card: assetsUrl + '/js/league/layout/card',
        chart: assetsUrl + '/js/Chart.min',
        excanvas: assetsUrl + '/js/excanvas',
        select: assetsUrl + '/js/bootstrap-select.min'
    }
});
require(['template', 'templateNs', 'leagueView', 'card', 'chart', 'excanvas', 'spin', 'select'], function(template, templateNs, leagueView, card, chart, excanvas, Spinner) {
    var opts = {
        lines: 13,
        length: 28,
        width: 14,
        radius: 42,
        scale: 0.2,
        corners: 1,
        color: '#fff',
        opacity: 0.25,
        rotate: 0,
        direction: 1,
        speed: 1,
        trail: 60,
        fps: 20,
        zIndex: 2e9,
        className: 'spinner',
        top: '50%',
        left: '50%',
        shadow: false,
        hwaccel: false,
        position: 'absolute'
    };
    var season_id = $('#season_id').val();
    var uid = CONFIG.user_id;
    template.helper('imgHasMatch', function(src, type, width, height) {
        var http = 'http://thumb.vpgcdn.com/';
        if (src == null || src == "") {
            return src || "";
        } else {
            if (src.indexOf('http') == -1) {
                return http + type + '/' + width + 'x' + height + '/' + src;
            } else {
                return src;
            }
        };
    });
    template.helper('lastGameUser', function(data) {
        for (var i = data.length; i < 5; i++) {
            data.push({
                empty: true
            });
        }
        return data;
    });
    template.helper('description', function(str) {
        var length = str.length;
        if (length > 104) {
            var des = str.substr(0, 98) + '...';
            return des;
        } else {
            return str;
        }
    });
    template.helper('setContent', function(str) {
        str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
        str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
        //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
        str = str.replace(/ /ig, ''); //去掉 
        return str;
    });
    template.helper('dateFormat', function(date, format) {
        var paddNum = function(num) {
            num += "";
            return num.replace(/^(\d)$/, "0$1");
        }
        date = new Date(date * 1000);
        //指定格式字符
        var cfg = {
            yyyy: date.getFullYear() //年 : 4位
                ,
            yy: date.getFullYear().toString().substring(2) //年 : 2位
                ,
            M: date.getMonth() + 1 //月 : 如果1位的时候不补0
                ,
            MM: paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
                ,
            d: date.getDate() //日 : 如果1位的时候不补0
                ,
            dd: paddNum(date.getDate()) //日 : 如果1位的时候补0
                ,
            hh: paddNum(date.getHours()) //时
                ,
            mm: paddNum(date.getMinutes()) //分
                ,
            ss: paddNum(date.getSeconds()) //秒
        }
        format || (format = "yyyy-MM-dd hh:mm");
        return format.replace(/([a-z])(\1)*/ig, function(m) {
            return cfg[m];
        });
    });
    template.helper('dateCompare', function(time) {
        var now = new Date().getTime() / 1000;
        if (time == '' || time == null) {
            return 4;
        }
        return now > time ? 0 : now < time ? 2 : 1;
    });
    $('.public-modal-bg1').on('shown.bs.modal', function() {
        $('.selectpicker').selectpicker();
    });
    var league_home = {
        detail_list: function(body) {
            if (body && body.status == 200) {
                var html = template('league-lastgame-list-template', body);
                $('#league-lastgame-list').html(html);
            }
        },
        rank: function(body) {
            if (body && body.status == 200) {
                var html = template('recent-games-list-template', body);
                $('#recent-games-list').html(html);
            }
        },
        list: function(body) {
            if (body && body.status == 200) {
                var html = template('recommend-league-list-template', body);
                var bHtml = template('no-league-games-template', body);
                $('#recommend-league-list').html(html);
                $('#no-league-games').html(bHtml);
            }
            if (uid) {
                $('.login-status-btn').removeClass('hide');
            } else {
                $('.league-status-open').addClass('hide');
                $('.nologin-status-btn').removeClass('hide');
            }
        },
        my_list: function(body) {
            if (body && body.status == 200) {
                var aHtml = template('no-login-league-template', body);
                $('#no-login-league').html(aHtml);
            }
            if (uid) {
                $('.login-status-btn').removeClass('hide');
            } else {
                $('.league-status-open').addClass('hide');
                $('.nologin-status-btn').removeClass('hide');
            }
        }
    };
    var user = {
        card: function(body) {
            if (body && body.status == 200) {
                var html = template('user-message-template', body);
                $('#user-message').html(html);
            }
        },
        statistics: function(body) {
            if (body && body.status == 200) {
                var games = body.data.games;
                var winrate = body.data.win_rate;
                var html = template('user-data-template', body);
                $('#user-data').html(html);
                if (games > 300) {
                    games = 300;
                }
                // var obj=$('#allnum-chart').get(0);
                // getCharts(obj,games,winrate);
            }
        },
        teams: function(body) {
            if (body && body.status == 200) {
                var html = template('user-team-template', body);
                $('#user-team').html(html);
            }
        },
        leagues: function(body) {
            if (body && body.status == 200 && body.data.length > 0) {
                var html = template('league-side-right-template', body);
                $('#league-side-right').html(html);
            } else {
                $('#league-side-right').addClass('hide');
                $('#no-league-games').removeClass('hide');
            }
        }
    };
    var leagueList = {
        get: function() {
            var api = this.api;
            var set = this.set;
            $.ajax({
                url: '/api/dota2League/list',
                dataType: 'json',
                data: {
                    showType: 'page',
                    show_player: 1,
                    pageSize: 6,
                    userId: uid
                },
                beforeSend: function() {
                    var recommend = document.getElementById('all-league-list');
                    var recommends = new Spinner(opts).spin(recommend);
                },
                success: function(response) {
                    if (response.status == 200) {
                        set(response);
                    }
                }
            });
        },
        set: function(response) {
            var html = template('all-league-list-template', response);
            $('#all-league-list').html(html);
            if (uid) {
                $('.login-status-btn').removeClass('hide');
            } else {
                $('.nologin-status-btn').removeClass('hide');
            }
            moduleView.pager({
                data: response.page,
                container: '#all-league-list .pager',
                pageAjax: {
                    ft: function(data) {
                        leagueList.set(data);
                    }
                }
            });
        }
    };
    var tournamentList = null;

    function getTournamentList(i) {
        $.ajax({
            url: CONFIG.yii_webapi_domain + '/v2/tournament/list',
            dataType: 'jsonp',
            type: "GET",
            data: {
                lang: CONFIG.lang,
                page: i,
                page_size: 6,
                session: CONFIG.session_id
            },
            success: function(response) {
                if (response.status == 200 && response.success == true) {
                    var html = template('all-tournament-list-template', response);
                    $('#all-tournament-list').html(html);
                    tournamentList = response.body.lists;
                    if (uid) {
                        $('.login-status-btn').removeClass('hide');
                    } else {
                        $('.nologin-status-btn').removeClass('hide');
                    }
                    var totalPages = Math.ceil(response.body.count / 6);
                    if (totalPages > 1) {
                        $('#pager').remove();
                        $('#tournament-page').show().append('<ul id="pager" class="pagination circle-pagination"></ul>');
                        $('#tournament-page .pagination').twbsPagination({
                            totalPages: totalPages,
                            initiateStartPageClick: false,
                            first: '|&lt;',
                            last: '&gt;|',
                            startPage: i,
                            next: '&gt;',
                            prev: '&lt;',
                            visiblePages: totalPages > 5 ? 5 : totalPages,
                            onPageClick: function(event, page) {
                                getTournamentList(page);
                            }
                        });
                    } else {
                        $('.pagination').hide();
                    }
                } else {
                    $('#all-tournament-list').html('<div class="empty">' + response.message + '</div>');
                }

            },
            error: function() {}
        });
    };

    function getCharts(obj, gameNum, winNum) {
        var allData = [{
            value: gameNum,
            color: "#dc7109"
        }, {
            value: 300 - gameNum,
            color: "#3f424c"
        }];
        var winData = [{
            value: winNum,
            color: "#909194"
        }, {
            value: 100 - winNum,
            color: "#3f424c"
        }];
        var winningData = [{
            value: winNum,
            color: "#8caf28"
        }, {
            value: 100 - winNum,
            color: "#3f424c"
        }];
        var allnum = document.getElementById("allnum-chart").getContext("2d");
        var winnum = document.getElementById("winnum-chart").getContext("2d");
        var winning = document.getElementById("winning-chart").getContext("2d");
        var chartMode = {
            segmentShowStroke: false,
            percentageInnerCutout: 90,
            animation: true,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: true,
            animateScale: false
        };
        window.myDoughnut = new Chart(allnum).Doughnut(allData, chartMode);
        window.myDoughnut = new Chart(winnum).Doughnut(winData, chartMode);
        window.myDoughnut = new Chart(winning).Doughnut(winningData, chartMode);
        if (/msie/.test(navigator.userAgent.toLowerCase()) && document.documentMode == 8) {
            require(['excanvas'], function() {
                obj = window.G_vmlCanvasManager.initElement(obj);
            });
        };
    };
    $('.recent-games-nav li a[aria-controls="all-league"]').on('shown.bs.tab', function(e) {
        leagueList.get();
    });
    $('.recent-games-nav li a[aria-controls="all-tournament"]').on('shown.bs.tab', function(e) {
        getTournamentList(1);
    });

    function getSpin(id) {
        var spin = new Spinner(opts).spin(id);
    };
    $.ajax({
        url: '/api/dota2League/home',
        type: 'get',
        dataType: 'json',
        data: {
            season_id: season_id,
            user_id: uid
        },
        beforeSend: function() {
            var recommend = document.getElementById('recommend-league-list');
            var recent = document.getElementById('recent-games-list');
            var league = document.getElementById('league-lastgame-list');
            getSpin(recommend);
            getSpin(recent);
            getSpin(league);
        },
        success: function(response) {
            league_home.detail_list(response.detail_list);
            league_home.rank(response.rank);
            league_home.list(response.recommend_league_list);
            league_home.my_list(response.recommend_league_list);
        }
    });

    if (uid) {
        $('#has-login.league-user-panel,#league-side-right').removeClass('hide');
        $.ajax({
            url: '/api/dota2League/user',
            type: 'get',
            dataType: 'json',
            data: {
                user_id: uid
            },
            beforeSend: function() {
                var message = document.getElementById('user-message');
                var data = document.getElementById('user-data');
                var league = document.getElementById('league-side-right');
                getSpin(message);
                getSpin(data);
                getSpin(league);
            },
            success: function(response) {
                user.card(response.card);
                user.statistics(response.statistics);
                user.leagues(response.leagues);
                getTeamList();
            }
        });
    } else {
        $('#no-login.league-user-panel,#no-login-league').removeClass('hide');
    }

    function getTeamList() {
        $.ajax({
            url: CONFIG.yii_webapi_domain + '/v2/team/myList',
            type: 'get',
            dataType: 'json',
            data: {
                session: CONFIG.session_id,
                lang: CONFIG.lang,
                game_type: "dota",
                show_players: "no",
                is_manager: "no"
            },
            success: function(response) {
                user.teams(response);
            }
        })
    }

    //报名杯赛
    var tournament_info;
    $('body').on('click', '.tournament-apply-btn', function() {
        var btnobj = $(this);
        var index = $(this).attr('data-index');
        tournament_info = tournamentList[index];
        if (tournament_info != null) {
            btnobj.setText('loading');
            getManageTeamList(tournament_info.id, tournament_info.join_mode);
        }
        return;
    })

    function getManageTeamList(tournament_id, join_mode) {
        $.ajax({
            url: CONFIG.yii_webapi_domain + '/v2/team/myList',
            dataType: 'jsonp',
            type: 'GET',
            data: {
                session: CONFIG.session_id,
                lang: CONFIG.lang,
                show_players: "no",
                is_manager: tournament_info.join_cost > 0 ? "yes" : "no",
                status: "normal",
                game_type: "dota"
            },
            success: function(response) {
                if (response.status == 200) {
                    if (response.body != null && response.body.teams != null && response.body.teams.length > 0) {
                        $("#modal-chose-team").modal("show");
                        $('#team-err-tip').remove();
                        var teamData = {
                            teams: response.body.teams
                        };
                        var html = templateNs('team-list-template-native', teamData);
                        $('#all-team-list').html(html);
                    } else {
                        $(".join-btn").setText('reset');
                        var teamPlayer = 5;
                        $.popModal({
                            options: {
                                title: "VPGAME提示",
                                id: 'join_alert',
                                content: "<div class='empty' style='padding: 50px 115px;'><span style='font-size:14px;color:#afb0b2'>您暂时没有满足报名资格的战队，请调整后再来参加</span><div style='font-size:12px;margin-top:20px;text-align:left;'><span>杯赛战队报名资格：</span><span>1.报名人必须为战队经理</span><br/><span style='margin-left:108px;'>2.战队报名成员（正式队员+替补）数量不少于" + teamPlayer + "人</span></div></div>",
                                html: true,
                                width: 613,
                                type: 'confirm'
                            },
                            btnType: {
                                btn1: {
                                    name: "关闭",
                                    Class: "btn-normal",
                                    dismiss: true
                                },
                                btn2: {
                                    name: "前往我的战队",
                                    Class: "btn-normal",
                                    events: function() {
                                        window.location.href = "/user/team.html"
                                    }
                                }
                            }
                        });
                    }
                } else {
                    $(".join-btn").setText('reset');
                    $.popModal({
                        options: {
                            title: "VPGAME提示",
                            id: 'join_alert',
                            content: response.message,
                            html: false,
                            width: 613,
                            times: -1
                        },
                        btnType: {
                            btn1: {
                                name: "知道了",
                                Class: "btn-normal"
                            }
                        }
                    });
                }
            }
        });
    }
    $('body').on('click', ".btn-team-choose", function() { //选择战队
        var team_id;
        team_id = $(this).attr('team-id');
        $("#modal-chose-team").modal("hide");
        if (tournament_info.team_contact.length > 0 || tournament_info.join_mode == "password" || tournament_info.join_mode == "code") { //需要填写信息
            if (tournament_info.team_contact.length > 0) {
                $.ajax({
                    url: CONFIG.yii_webapi_domain + "/v2/tournament/manage/getContact",
                    type: "get",
                    data: {
                        tournament_id: tournament_info.id
                    },
                    dataType: 'jsonp',
                    success: function(data) {
                        if (data.body && data.status === 200) {
                            var tmpData = data.body;
                            tmpData.join_mode = tournament_info.join_mode;
                            tmpData.team_id = team_id;
                            var contactHtml = templateNs('contact-info-template', tmpData);
                            $('#contact-moda-body').html(contactHtml);
                            $('#contact-info-modal').modal("show");

                            if ($('#mobile_input').val() != '') {
                                $('#mobile_input').next().removeClass("hide");
                            }
                            if ($('#qq_input').val() != '') {
                                $('#qq_input').next().removeClass("hide");
                            }
                            if ($('#weixin_input').val() != '') {
                                $('#weixin_input').next().removeClass("hide");
                            }

                            $('#mobile_input,#qq_input').keyup(function(evt) {
                                $(evt.target).val($(evt.target).val().replace(/[^0-9\.]/g, ''));
                                if ($(evt.target).val().length > 0) {
                                    $(evt.target).next().removeClass("hide");
                                } else {
                                    $(evt.target).next().addClass("hide");
                                }
                            });
                            $('#weixin_input').on('input', function(evt) {
                                if ($(evt.target).val().length > 0) {
                                    $(evt.target).next().removeClass("hide");
                                } else {
                                    $(evt.target).next().addClass("hide");
                                }
                            })
                            $('.icon-circleclose').on('click', function(evt) {
                                $(evt.target).prev().val('');
                                $(evt.target).addClass("hide");
                            })
                        }

                    },
                    error: function() {}
                });
            } else {
                var tmpData = {
                    join_mode: tournament_info.join_mode,
                    team_id: team_id
                };
                var contactHtml = templateNs('contact-info-template', tmpData);
                $('#contact-moda-body').html(contactHtml);
                $('#contact-info-modal').modal("show");
            }
        } else { //不需要填写 直接报名加入
            submitApplyTournament({
                tournament_id: tournament_info.id,
                team_id: team_id,
                session: CONFIG.session_id
            });
        }
    })
    $('body').on('click', ".tournament-join-btn", function() { //加入杯赛
        var team_id = $('#tournament_team_id').val();
        var data = {
            tournament_id: tournament_info.id,
            team_id: team_id,
            session: CONFIG.session_id,
            mobile: $('#mobile_input').val(),
            weixin: $('#weixin_input').val(),
            qq: $('#qq_input').val(),
            code: $('#code_input').val(),
            password: $('#pw_input').val(),
        };
        submitApplyTournament(data);
    })

    function submitApplyTournament(postdata) {
        $.ajax({
            url: CONFIG.yii_webapi_domain + '/v2/tournament/default/join',
            type: 'POST',
            dataType: 'json',
            data: postdata,
            success: function(json) {
                var id = tournament_info.id;
                var join_mode = tournament_info.join_mode;
                var team_id = postdata.team_id;
                if (json.status === 200) {
                    $('#btn-tournament-join-' + id).remove();
                    if (join_mode == "apply") {
                        $('#btn-wait-' + id).removeClass('hide');
                    } else {
                        $('#btn-joined-' + id).removeClass('hide');
                        $('#btn-joined-' + id).attr('href', "/tournament/lobby?tournament_id=" + id + "&team_id=" + team_id);
                    }
                    $('#contact-info-modal').modal("hide");
                }

                if (join_mode == "code") {
                    $('#tournament-code').val('');
                    $("#modal-input-tournament-code").modal("hide");
                } else if (join_mode == "password") {
                    $('#tournament-password').val('');
                    $("#modal-input-tournament-password").modal("hide");
                }
                $.popModal({
                    options: {
                        title: "VPGAME提示",
                        id: 'join_alert',
                        content: "<div class='empty' style='padding: 50px 65px;'><span style='font-size:14px;'>" + json.message + "</span></div>",
                        html: true,
                        width: 496,
                        times: -1
                    },
                    btnType: {
                        btn1: {
                            name: "知道了",
                            Class: "btn-normal"
                        }
                    }
                });
            },
            cache: false
        });
    }
});