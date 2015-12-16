var Checker = require('jscs'),
    checker = new Checker();

checker.registerDefaultRules();

///
exports.forEntityTech = function(tech, techConfig, entity) {
    checker.configure(techConfig);

    var results = checker.checkString(tech.content);

    results.getErrorList().forEach(function(error) {
        entity.addError({
            msg: error.message,
            tech: tech.name,
            value: results.explainError(error, true).replace(/^.*?\n/, '')
        });
    });
};
