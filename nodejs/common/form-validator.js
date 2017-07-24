var utils = require('./utils');
var validators = {
  maxLength: {
    message: '%label%最大长度为%maxLength%',
    validator: function(value, size) {
      return utils.stringLength(value) <= size;
    }
  },
  maxLength: {
    message: '%label%最小长度为%maxLength%',
    validator: function(value, size) {
      return utils.stringLength(value) >= size;
    }
  },
  maxWord: {
    message: '%label%最多只能有%maxWord%个',
    validator: function(value, size) {
      return utils.filter(utils.distinct(utils.split(value, ',', '，', '、', '\\s')), x => !!x).length <= size;
    }
  },
  required: {
    message: '%label%不能为空',
    validator: function(value) {
      return !!utils.trim(value).length;
    }
  },
  phone: {
    message: '%label%格式不对',
    validator: function(value) {
      return !!/1[3|5|7|8|]\d{9}/.test(value);
    }
  }
};



function validate(data, rules) {
  var errors = {
    messages: [],
    keys:[]
  };

  return new Promise((resolve, reject) => {
    utils.each(rules, (rule, name) => {
      let value = data[name];
      utils.each(rule, (param, validatorName) => {
        let validator = validators[validatorName];

        if (!validator) {
          return;
        }

        let isValid = validator.validator(value, param);
        if (!isValid) {
          var message = validator.message.replace(/%(\S+?)%/g, function(src, param) {
            return rule[param];
          })

          errors[name] = {};
          errors[name].invalid = true;
          errors[name][validatorName] = {};
          errors[name][validatorName].invalid = true;
          errors[name][validatorName].message = message;
          errors.messages.push(message);
          errors.keys.push(name);
        }
      });
    });

    return errors.messages.length ? reject(errors) : resolve(true);
  });

}


module.exports = {
  validators,
  validate
}