<script>
import Utils from './common/js/util.js'
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    utils: Utils,
  },
}
</script>

<style>
/*每个页面公共css */
@import url('./app.css');
</style>
