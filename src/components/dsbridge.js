// var dsBridge = require("dsBridge");
import dsBridge from 'dsbridge';
export default {
  callmethod(name, data, callback) {
    callback(dsBridge.call(name, data, callback));
  },
  registermethod(tag, callback) {
    dsBridge.register(tag, callback);
  },
};
