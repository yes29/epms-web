import {required} from '../../common/validator'
export default {
  data () {
    return {
      required,
      params: {
        userName: 'admin',
        pwd: 'admin'
      },
      loading: false,
      typePwd: 'password'
    }
  },
  mounted () {
    this.util.removeLocal('td_userInfo')
  },
  methods: {
    handleLogin (params) {
      this.$refs.params.validate(valid => {
        if (valid) {
          this.post('api/login', params).then(() => {
            this.$router.push({ path: '/take-charge' })
          })
        }
      })
    }
  }
}
