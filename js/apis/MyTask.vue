<template>
  <section class="page">
    <div class="row">
      <div class="col-s12">
        <h5 class="box-title">
          <i class="md md-home"></i>&nbsp;我的任务
        </h5>
        <div class="box-header">
          <!-- Search -->
          <div name="searchfrm" >
            <div class="row">
              <div class="col-sm-2 col-md-2">
                <input type="text" class="form-control" placeholder="任务名称" v-model="valueList.name">
              </div>
              <div class="col-sm-2 col-md-2">
                  <select class="form-control select" v-model="valueList.team">
                    <option v-for="p in projectLists"  v-bind:value="p.id">{{ p.name }}</option>
                  </select>
              </div>
              <div class="col-sm-2 col-md-2" v-if="indexType === 3">
                <select class="form-control select" v-model="statisticeList.type">
                  <option value="-1">选择来源</option>
                  <option value="1">发布</option>
                  <option value="2">分派</option>
                  <option value="3">接受</option>
                </select>
              </div>
              <div class="col-sm-2 col-md-2">
                <input type="text" class="form-control" placeholder="执行人" v-model="valueList.executor">
              </div>
              <div class="col-sm-2 col-md-2" v-if="indexType === 3">
                <input type="text"  class="form-control inputText"  v-model="statisticeList.startTime" index="0" readonly="readonly" style="cursor: pointer;" @click="showDate"  placeholder="开始时间">
                <date-time :type.sync="Datetype" :show.sync="showA" :value.sync="statisticeList.startTime" :x="x" :y="y" :begin="begin" :end="end" :range="range"></date-time>
              </div>
              <div class="col-sm-2 col-md-2" v-if="indexType === 3">
                <input type="text"  class="form-control inputText"  v-model="statisticeList.endTime" index="1" readonly="readonly" style="cursor: pointer;" @click="showDate"  placeholder="结束时间">
                <date-time :type.sync="Datetype" :show.sync="showB" :value.sync="statisticeList.endTime" :x="x" :y="y" :begin="begin" :end="end" :range="range"></date-time>
              </div>
              <div class="col-sm-2 col-md-2">
                <button type="button" class="btn ink-reaction btn-raised btn-primary searchBtn" @click="searchValue">查询</button>
                <button type="button" class="btn ink-reaction btn-raised btn-default celarBtn" @click="cleanSearchValue">清空</button>
              </div>
              <div class="col-sm-3 col-md-3"  v-if="indexType === 1">
                <div class="pull-right">
                  <a v-link="{path: '/task/add'}" type="button">
                    <button class="btn btn-md btn-default storageBtn">
                      <i class="md md-add"></i>新建任务
                    </button>
                  </a>
                </div>
              </div>
              <div class="col-sm-10 col-md-10"  v-if="indexType === 3">
                <div class="pull-right">
                  <a type="button">
                    <button class="btn btn-md btn-default storageBtn">统计图表
                    </button>
                  </a>
                </div>
              </div>
          </div>
        <!-- Search end -->
        </div>
        <div class="card Workbench">
          <div class="card-head">
            <ul class="nav nav-tabs" >
              <li :class="indexType === 1?'active':''" v-on:click="setTaskType(1)">
                <a href="javascript:;">我分配的任务</a>
              </li>
              <li :class="indexType === 2?'active':''" v-on:click="setTaskType(2)">
                <a href="javascript:;">我接受的任务</a>
              </li>
              <li :class="indexType === 3?'active':''" v-on:click="setTaskType(3)">
                <a href="javascript:;">任务统计</a>
              </li>
            </ul>
          </div>
          <div class="card-body tab-content">
            <section class="panel panel-default table-dynamic">
              <table v-if="indexType === 1" class="table table-bordered table-striped table-responsive centerTab">
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>任务名称</th>
                    <th>项目名称</th>
                    <th>执行人</th>
                    <th>重要性</th>
                    <th>截止时间</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="valueOne.length==0">
                    <td colspan="8" style="color: red;">暂时没有数据！</td>
                  </tr>
                  <tr v-for="obj in valueOne">
                    <td>{{$index+1  + (currentPage-1) * countSize}}</td>
                    <td>{{ obj.name }}</td>
                    <td>{{ obj.team }}</td>
                    <td>{{ obj.executor }}</td>
                    <td>
                      <span v-if="obj.important === 1">P1紧急</span>
                      <span v-if="obj.important === 2">P2优先</span>
                      <span v-if="obj.important === 3">P3一般</span>
                      <span v-if="obj.important === 4">P4建议</span>
                    </td>
                    <td>{{ obj.endTime|toDate }}</td>
                    <td>
                      <span v-if="obj.status === 1">待领取</span>
                      <span v-if="obj.status === 2">撤回</span>
                      <span v-if="obj.status === 3">拒绝</span>
                      <span v-if="obj.status === 4">待确认</span>
                      <span v-if="obj.status === 5">运行</span>
                      <span v-if="obj.status === 6">已办结</span>
                      <span v-if="obj.status === 7">超期办结</span>
                    </td>
                    <td>
                      <a v-if="obj.status === 1" @click="withdrawFn"><button id="{{obj.id}}" name="{{obj.name}}" class="btn waves-effect waves-light btn-prima">撤回</button></a>
                      <a v-link="{path: '/task/myview/' + obj.id }" v-if="obj.status === 4 || obj.status === 5 || obj.status === 6 || obj.status === 7">
                        <button class="btn waves-effect waves-light btn-success">详情</button>
                      </a>
                      <a v-if="obj.status === 2" v-link="{path: '/task/edit/' + obj.id }" class="modify btn btn-warning" type="button">编辑</a>
                      <a v-if="obj.status === 3" v-link="{path: '/task/redo/' + obj.id }"><button class="btn waves-effect waves-light btn-infos">重派</button></a> 
                      <a v-if="obj.status === 2" @click="deleteFn"><button id="{{obj.id}}" name="{{obj.name}}" class="btn waves-effect waves-light btn-danger">删除</button></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <table v-if="indexType === 2" class="table table-bordered table-striped table-responsive centerTab">
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>任务名称</th>
                    <th>项目名称</th>
                    <th>创建人</th>
                    <th>重要性</th>
                    <th>截止时间</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="valueTwo.length==0">
                    <td colspan="8" style="color: red;">暂时没有数据！</td>
                  </tr>
                  <tr v-for="obj in valueTwo">
                    <td>{{$index+1  + (currentPage-1) * countSize}}</td>
                    <td>{{obj.name}}</td>
                    <td>{{obj.team}}</td>
                    <td>{{obj.account}}</td>
                    <td>
                      <span v-if="obj.important === 1">P1紧急</span>
                      <span v-if="obj.important === 2">P2优先</span>
                      <span v-if="obj.important === 3">P3一般</span>
                      <span v-if="obj.important === 4">P4建议</span>
                    </td>
                    <td>{{ obj.endTime|toDate }}</td>
                    <td>
                      <span v-if="obj.status === 1">待领取</span>
                      <span v-if="obj.status === 2">撤回</span>
                      <span v-if="obj.status === 3">拒绝</span>
                      <span v-if="obj.status === 4">待确认</span>
                      <span v-if="obj.status === 5">运行</span>
                      <span v-if="obj.status === 6">已办结</span>
                      <span v-if="obj.status === 7">超期办结</span>
                    </td>
                    <td> 
                      <a v-link="{path: '/task/myview/' + obj.id }" v-if="obj.status === 4 || obj.status === 5 || obj.status === 6 || obj.status === 7">
                        <button class="btn waves-effect waves-light btn-success">详情</button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <table v-if="indexType === 3" class="table table-bordered table-striped table-responsive centerTab">
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>任务名称</th>
                    <th>项目名称</th>
                    <th>来源</th>
                    <th>执行人</th>
                    <th>重要性</th>
                    <th>截止时间</th>
                    <th>状态</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="valueThree.length==0">
                    <td colspan="8" style="color: red;">暂时没有数据！</td>
                  </tr>
                  <tr v-for="obj in valueThree">
                    <td>{{$index+1  + (currentPage - 1) * countSize}}</td>
                    <td>{{obj.name}}</td>
                    <td>{{obj.team}}</td>
                    <td>
                      <span v-if="obj.type === 1">发布</span>
                      <span v-if="obj.type === 2">分派</span>
                      <span v-if="obj.type === 3">接受</span>
                    </td>
                    <td>{{obj.account}}</td>
                    <td>
                      <span v-if="obj.important === 1">P1紧急</span>
                      <span v-if="obj.important === 2">P2优先</span>
                      <span v-if="obj.important === 3">P3一般</span>
                      <span v-if="obj.important === 4">P4建议</span>
                    </td>
                    <td>{{ obj.endTime|toDate }}</td>
                    <td>
                      <span v-if="obj.status === 1">待领取</span>
                      <span v-if="obj.status === 2">撤回</span>
                      <span v-if="obj.status === 3">拒绝</span>
                      <span v-if="obj.status === 4">待确认</span>
                      <span v-if="obj.status === 5">运行</span>
                      <span v-if="obj.status === 6">已办结</span>
                      <span v-if="obj.status === 7">超期办结</span>
                    </td>
                  </tr>
                </tbody>
              </table>
             <page v-ref:page
            :current-page.sync="currentPage"
            :count-size.sync="countSize"
            ></page> 
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
  <tack-status v-ref:tack-status :deleteflag.sync="tackStatusFlag"></tack-status>
  <alert :message.sync="message"></alert>
  <delete v-ref:deleteObj :deleteflag.sync="flag"></delete>
</template>

<script>
import { PathList } from '../../config/conf.js';
import SZXJ from '../../apis/vueHttp.js';
import Alert from '../Common/Alert.vue';
import Page from '../Common/page.vue';
import Delete from '../Common/Delete.vue';
import TackStatus from '../Common/Tack/TackStatus.vue';
import dateTime from '../Common/Date.vue';
export default {
  data() {
    return {
      valueList: {
        name: '',
        team: '-1',
        executor: '',
      },
      statisticeList: {
        startTime: '',
        endTime: '',
        type: '-1',
      },
      // 时间控件
      showA: false,
      showB: false,
      Datetype: 'datetime', // date datetime datetime24
      begin: '',
      end: '',
      x: 0,
      y: 0,
      range: false,
      // 时间控件结束
      message: '', // 弹出框消息
      indexType: 1,
      countSize: 10,
      currentPage: 0,
      searchData: {},
      myDistributionTaskList: [1, 2], // 我分配的任务
      myAcceptTaskList: [1, 2], // 我接受的任务
      statisticsTaskList: [1, 2], // 统计图
      valueOne: [],
      valueTwo: [],
      valueThree: [],
      projectLists: [], // 下拉列表
      typeLists: [], // 下拉列表
      flag: false, // 删除控制显示标志
      tackStatusFlag: false, // 撤回控制显示标志
    };
  },
  route: {
    data() {
      SZXJ.http('get', PathList.taskProjectOption,
        {}, (data) => {
          this.projectLists = data.data.data.taskProject;
        }, (err) => {
          this.$set('message', err.data.msg);
        });
      this.pageValue();
    },
  },
  watch: {
    flag: 'deleteFn',
    withdrawFlag: 'withdrawFn',
  },
  methods: {
    withdrawFn(e) {
      if (this.tackStatusFlag) {
        this.pageValue();
        this.tackStatusFlag = false;
      } else {
        if (e) {
          const name = e.target.getAttribute('name');
          const message = '是否撤回此 '.concat(name).concat(' 的任务信息');
          const id = e.target.id;
          this.$refs.tackStatus.showMsg(message, id, PathList.mytaskWithdraw);
        }
      }
    },
    deleteFn(e) {
      if (this.flag) {
        this.pageValue();
        this.flag = false;
      } else {
        if (e) {
          const name = e.target.getAttribute('name');
          const message = '是否删除此 '.concat(name).concat(' 的任务信息');
          const id = e.target.id;
          this.$refs.deleteobj.showMsg(message, id, PathList.mytaskDelete);
        }
      }
    },
    searchValue() {
      this.searchData = {};
      if (this.valueList.name !== '') {
        this.searchData.name = this.valueList.name;
      } else {
        delete this.searchData.name;
      }
      if (this.valueList.team !== '-1' && this.valueList.team !== -1) {
        this.searchData.team = this.valueList.team;
      } else {
        delete this.searchData.team;
      }
      if (this.valueList.executor !== '') {
        this.searchData.executor = this.valueList.executor;
      } else {
        delete this.searchData.executor;
      }
      if (this.indexType === 3) {
        if (this.statisticeList.startTime !== '') {
          this.searchData.startTime = this.statisticeList.startTime;
        } else {
          delete this.searchData.startTime;
        }
        if (this.statisticeList.type !== '-1' && this.statisticeList.type !== -1) {
          this.searchData.type = this.statisticeList.type;
        } else {
          delete this.searchData.type;
        }
        if (this.statisticeList.endTime !== '') {
          this.searchData.endTime = this.statisticeList.endTime;
        } else {
          delete this.searchData.endTime;
        }
      }
      this.pageValue();
    },
    cleanSearchValue() {
      this.valueList = {
        name: '',
        team: '-1',
        executor: '',
      };
      this.statisticeList = {
        startTime: '',
        endTime: '',
        type: -1,
      };
      this.searchData = {};
      this.pageValue();
    },
    pageValue() {
      if (this.indexType === 1) {
        this.getTabOneFn();
      }
      if (this.indexType === 2) {
        this.getTabTwoFn();
      }
      if (this.indexType === 3) {
        this.getTabThreeFn();
      }
    },
    setTaskType(v) {
      this.$set('indexType', v);
      this.cleanSearchValue();
      const href = window.location.href;
      const length = href.lastIndexOf('?') === -1 ? href.length : href.lastIndexOf('?');
      window.location.href = href.substring(0, length);
      if (v === 1) {
        this.getTabOneFn();
      }
      if (v === 2) {
        this.getTabTwoFn();
      }
      if (v === 3) {
        this.getTabThreeFn();
      }
    },
    setPageFn() {
      let page = 0;
      let pageN = 0;
      page = SZXJ.getQueryString('p');
      pageN = SZXJ.getQueryString('n');
      if (!SZXJ.flagInt(page)) {
        page = 1;
      }
      if (!SZXJ.flagInt(pageN)) {
        pageN = 10;
      }
      this.countSize = parseInt(pageN, 10);
      this.searchData.n = pageN;
      this.searchData.p = page;
    },
    getTabOneFn() { // 我分配的任务
      this.setPageFn();
      SZXJ.http('get', PathList.mytaskDistributionList,
        this.searchData, (data) => {
          this.valueOne = data.data.data;
          console.log(data);
          this.$refs.page.setPage(this.searchData.p, data.data.msg);
        }, (err) => {
          this.$set('message', err.data.msg);
        });
    },
    getTabTwoFn() { // 我领取的任务
      this.setPageFn();
      SZXJ.http('get', PathList.mytaskReceiveList,
        this.searchData, (data) => {
          this.valueTwo = data.data.data;
          console.log(this.valueTwo);
          this.$refs.page.setPage(this.searchData.p, data.data.msg);
        }, (err) => {
          this.$set('message', err.data.msg);
        });
    },
    getTabThreeFn() { // 统计列表
      this.setPageFn();
      SZXJ.http('get', PathList.mytaskStatistics,
        this.searchData, (data) => {
          this.valueThree = data.data.data;
          console.log(this.valueThree);
          this.$refs.page.setPage(this.searchData.p, data.data.msg);
        }, (err) => {
          this.$set('message', err.data.msg);
        });
    },
    showDate(e) {
      e.stopPropagation();
      const that = this;
      that.showA = false;
      that.showB = false;
      if (e.target.getAttribute('index') === '0') {
        that.showA = true;
      } else if (e.target.getAttribute('index') === '1') {
        that.showB = true;
      }
      that.x = e.target.offsetLeft;
      that.y = e.target.offsetTop + e.target.offsetHeight + 8;
      const bindHide = (_event) => {
        _event.stopPropagation();
        if (e.target.getAttribute('index') === '0') {
          that.showA = false;
        } else if (e.target.getAttribute('index') === '1') {
          that.showB = false;
        }
        document.removeEventListener('click', bindHide, false);
      };
      setTimeout(() => {
        document.addEventListener('click', bindHide, false);
      }, 500);
      return false;
    },
  },
  components: {
    Alert,
    Page,
    Delete,
    TackStatus,
    dateTime,
  },
};
</script>

<style lang="scss" scoped>
.Workbench {
  box-shadow: none;
}
div[name=searchfrm] .row>div,.celarBtn {
  margin-bottom: 5px;
}
.searchBtn {
  margin: 0 20px 5px 0;
}
.card-body {
  padding: 24px 0;
}
section.panel {
  padding: 0;
}
section.panel table{
  border-bottom: 1px solid #ddd;
}
section.panel table th{
  padding: 8px;
}

.modal-body.content{
  text-align: center;
}
.canfa{
  position: relative;
  text-align: center;
}
.canfa .fa-exclamation:before {
  display: inline-block;
  height: 42px;
  width: 15px;
  font-size: 40px;
  color: red;
  position: absolute;
  top: -20px;
  left: 10px;
}
.canfa .control-label{
  font-size: 14px;
  color: red;
  padding-left: 50px;
}

@media (min-width: 768px) and (max-width:1365px) {
  section.page{
    width: 1250px;
  }
  .box-header>div {
    width: 1225px;
  }
}
@media (max-width: 767px) {
  .modal-dialog.delTask,
  .modal-dialog.completeTask,
  .modal-dialog.cancelTask{
    max-width: 400px;
    margin: 0 auto;
 }
}
.modal-dialog {
  width: 482px;
}
.modal-header {
  position: relative;
  padding: 15px 0; 
  margin: 0 30px;
  border-bottom: 1px solid #e5e5e5;
  min-height: 16.846153846px;
}
.modal-header .close {
  position: absolute;
  right: -15px;
  top: 22px;
}
.modal-body {
  text-align: center;
  color: #f00;
  font-size: 16px;
  height: 143px;
  line-height: 113px;
  padding: 15px 0; 
  margin: 0 30px;
}
.modal-footer{
  padding: 15px 0; 
  margin: 0 30px;
}
</style>
