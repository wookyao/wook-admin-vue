<template>
  <div class="page-view">
    <form-table
      :formvisible='formvisible'
      @toggleForm='handlerToggleForm'
      @pageChange='pageChange'
    >
      <div slot="dataview">
        Display data here.
      </div>
      <div slot="dataedit">
        Display or modify data here.
      </div>
    </form-table>
  </div>
</template>

<script>
import FormTable from 'components/FormTable'

export default {
  name: 'ViewHome',

  components: {
    FormTable
  },

  data () {
    return {
      formvisible: false,
      list: []
    }
  },
  methods: {
    handlerToggleForm () {
      this.formvisible = !this.formvisible
    },
    pageChange (size) {
      console.log(size)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>

