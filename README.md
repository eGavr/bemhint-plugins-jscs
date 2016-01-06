# bemhint-plugins-jscs

Интеграция линтера [jscs](http://jscs.info/) через [bemhint](https://github.com/bem/bemhint).

## Установка

```bash
$ npm install bemhint-plugins-jscs
```

## Использование

В конфигурационном файле `.bemhint.js` подключить плагин:

```js
module.exports = {
    // конфиг

    plugins: {
        'bemhint-plugins-jscs': {
            techs: {
                '*': {
                    // правила jscs для всех технологий
                },

                'js|bemhtml.js': {
                    // правила jscs для технологий `js` и `bemhtml.js`
                },

                'css': false // не проверять технологию `css`
            }
        }
    }

    // конфиг
};
```
