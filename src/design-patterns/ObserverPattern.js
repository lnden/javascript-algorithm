/**
 * @description Observer Pattern 观察者模式
 *
 */

function Hunter(name, level) {
  this.name = name;
  this.level = level;
  this.list = [];
}

Hunter.prototype.publish = function (money) {
  console.log(`[${this.level}]猎人${this.name} => 寻求帮助`);
  this.list.forEach((item) => {
    item(money);
  });
};

Hunter.prototype.subscribe = function (target, fn) {
  console.log(`[${this.level}]猎人${this.name} 订阅了 => ${target.name}`);
  target.list.push(fn);
};

const hunterMing = new Hunter('小明', '铂金');
const hunterJin = new Hunter('小金', '黄金');
const hunterZhang = new Hunter('小张', '白银');
const hunterPeter = new Hunter('Peter', '青铜');

hunterMing.subscribe(hunterPeter, (money) => {
  console.log(`小明表示：${money > 200 ? '' : '暂时很忙，不能'}给予帮助`);
});
hunterJin.subscribe(hunterPeter, () => {
  console.log('小金表示：给予帮助');
});
hunterZhang.subscribe(hunterPeter, () => {
  console.log('小张表示：给予帮助');
});

hunterPeter.publish(250);
