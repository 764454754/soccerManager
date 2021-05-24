function show() {
  window.document.getElementById('app').innerText = '潘浩博真帅';
}

const say = () => {
  alert('你真帅');
};

module.exports = {
  show,
  say
};