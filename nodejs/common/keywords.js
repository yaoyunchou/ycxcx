var utils = require('./utils');
var getPoints = function getPoints() {

};

var getKeys = function getKeys(arg) {
  let keys = utils.split(arg, ',', '，', '\\s', '、');
  return utils.distinct(utils.filter(keys, x => !!x));
}
var keywords = [];

function joinKeywords(groupKeys, keywordStr, isMain, dept, size) {
  if (!groupKeys.length) {
    return keywordStr;
  }

  if (isMain) {
    dept = 0;
    size = groupKeys.length;
  }
  var currentGroup = groupKeys[dept];
  dept++;
  for (let key of getKeys(currentGroup)) {
    keywordStr = isMain ? '' : keywordStr;
    if (dept < size) {
      joinKeywords(groupKeys, keywordStr + key, false, dept, size);
    } else {
      keywords.push({
        name: keywordStr + key,
        baidu: 'xxxxx',
        wx: 'xxxxx',
        isSelected: true
      });
    }
  }
};

var generageGroup = function generageGroup() {
  var args = Array.prototype.slice.call(arguments);
  var name = args.shift();
  let group = {
    name: name,
    isOpen: true
  };
  keywords = [];
  joinKeywords(args, '', true);
  group.keywords = keywords;
  return group;
};

var currentReuslt = null;

module.exports.generate = function generate(options) {
  var result = {
    groups: []
  };

  result.groups.push(generageGroup('品牌', options.brand));
  result.groups.push(generageGroup('产品', options.product));
  result.groups.push(generageGroup('用途+产品', options.usage, options.product));
  result.groups.push(generageGroup('地区+产品+盈利模式', options.area, options.product, options.model));
  result.groups.push(generageGroup('特性+产品', options.attrs, options.product));
  result.groups.push(generageGroup('产品+盈利模式', options.product, options.model));
  result.groups.push(generageGroup('品牌+产品', options.brand, options.product));
  result.groups[0].isOpen = true;
  currentReuslt = result;
  return result;
};


module.exports.getCurrent = function getCurrent() {
  return currentReuslt;
};

module.exports.setCurrent = function getCurrent(keywords) {
  currentReuslt = keywords;
};