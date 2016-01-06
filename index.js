var Checker = require('jscs'),
    checker = new Checker();

checker.registerDefaultRules();

///
exports.forEachTech = function(tech, entity, config) {
    if(!tech.content) {
        return;
    }

    checker.configure(config.getTechConfig(tech.name));

    var results = checker.checkString(tech.content);

    results.getErrorList().forEach(function(error) {
        entity.addError({
            msg: error.message,
            tech: tech.name,
            value: 'line ' + error.line + ', character ' + error.column
        });
    });
};
