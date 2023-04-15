import MessageComponent from './message.vue';

const Message = {};

Message.install = function(Vue) {
  const MessageConstructor = Vue.extend(MessageComponent);
  const instance = new MessageConstructor();

  instance.$mount(document.createElement('div'));
  document.body.appendChild(instance.$el);

  let timer;

  const MsgMain = {
    show_message(txt, type) {
      clearInterval(timer);
      timer = setTimeout(() => {
        instance.visible = false;
      }, 1500);
      instance.txt = txt;
      instance.type = type;
      instance.visible = true;
    },
    success(txt, type = 'success') {
      this.show_message(txt, type);
    },
    fail(txt, type = 'fail') {
      this.show_message(txt, type);
    },
    warning(txt, type = 'warning') {
      this.show_message(txt, type);
    },
  };

  Vue.prototype.$message = MsgMain;
};

export default Message;
