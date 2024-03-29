function TadeEmmiter() {
  this.events = {};
}

TadeEmmiter.prototype.on = function (type: string, listener: Function) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

TadeEmmiter.prototype.emmit = function (type: string) {
  if (!this.events[type]) return;
  this.events[type].forEach((func: Function) => func());
};

module.exports = TadeEmmiter;
