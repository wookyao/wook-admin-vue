/**
 * 医护人员选择
 */

export default {
  namespaced: true,
  state: {
    selected: [],
    doctorInfo: {},
    doctorId: 0
  },
  mutations: {
    setSelData (state, value) {
      state.selected = value
    },
    setDoctorInfo (state, value) {
      state.doctorInfo = value
    },
    removeDoctorInfo (state) {
      state.doctorInfo = {}
    }
  }
}
