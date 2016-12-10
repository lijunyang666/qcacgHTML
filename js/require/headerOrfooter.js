Vue.component('myheader', header);
Vue.component('myfooter', footer);
if (VueAlert) {
  Vue.component('alert', VueAlert);
}
if (VueConfirm) {
  Vue.component('confirm', VueConfirm);
}
if (editor) {
  Vue.component('editor', editor);
}