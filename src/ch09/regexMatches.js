var regexMatchers = {
  toMatchAll: function(){
    return {
      compare: function(regex) {
        var unmatched = Array.prototype.slice.call(arguments, 1);

        if(regex)
          unmatched = unmatched.filter(function(s) { return !regex.test(s); });

        if(unmatched.length == 0) return { pass: true };

        return {
          pass: false,
          message: 'Failed to match: `' + unmatched.join("`, `") + '`'
        };
      }
    };
  },
  toMatchNone: function() {
    return {
      compare: function(regex) {
        var matched = Array.prototype.slice.call(arguments, 1);

        if(regex)
          matched = matched.filter(function(s) { return regex.test(s); });

        if(matched.length == 0) return { pass: true };

        return {
          pass: false,
          message: 'Incorrectly matched: `' + matched.join("`, `") + '`'
        };
      }
    };
  }
};
beforeEach(function() {
  jasmine.addMatchers(regexMatchers);
});
