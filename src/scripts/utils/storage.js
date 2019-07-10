
let storageHandler = (method) => {
  let handler = method === 'local' ? localStorage : sessionStorage
  const PREFIX = 'wooky.'
  return {
    setItem (key, value) {
      if (!key) throw new Error('setItem缺少必要参数，key')
      if (!value) throw new Error('setItem缺少必要参数，value')

      let keyname = `${PREFIX}${key}`

      if (typeof value !== 'string') {
        value = JSON.stringify(value)
      }
      try {
        handler.setItem(keyname, value)
      } catch (error) {}
    },

    getItem (key, doParse, defaultVal) {
      if (!key) throw new Error('getItem缺少必要参数，key')
      let keyname = `${PREFIX}${key}`
      let value = handler.getItem(keyname)
      let getValue = () => {
        if (value) {
          if (doParse) {
            return JSON.parse(value)
          } else {
            return value || (typeof defaultVal !== 'undefined' ? defaultVal : '')
          }
        }
        return value || (typeof defaultVal !== 'undefined' ? defaultVal : '')
      }

      return getValue()
    },

    removeItem (key) {
      if (!key) throw new Error('getItem缺少必要参数，key')
      let keyname = `${PREFIX}${key}`
      handler.removeItem(keyname)
    },

    clean (clearAll = false) {
      try {
        if (clearAll) {
          handler.clear()
        } else {
          for (let i = 0, iLen = handler.length; i < iLen; i++) {
            let name = handler.key(i)
            if (name && name.split('.')[0] === PREFIX) {
              setTimeout(() => method.removeItem(name), 0)
            }
          }
        }
      } catch (error) {}
    }
  }
}
export default {
  localStorage: storageHandler('local'),
  sessionStorage: storageHandler('session')
}
