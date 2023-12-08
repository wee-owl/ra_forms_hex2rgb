[Конвертер цветов из HEX в RGB](https://wee-owl.github.io/ra_forms_hex2rgb/)
===
[![Build status](https://ci.appveyor.com/api/projects/status/7ia1dsqjlhcvxb6f?svg=true)](https://ci.appveyor.com/project/wee-owl/ra-forms-hex2rgb)

Необходимо разработать конвертер цветов из HEX в RGB.

![Конвертер цветов](./src/assets/preview.png)

## Интерфейс конвертера

При правильном вводе цвета он показывает его представление в формате RGB и меняет цвет фона на заданный:
![Цвет](./src/assets/color.png)

Конвертер при вводе неправильного цвета в формате HEX должен сообщать об ошибке:
![Ошибка](./src/assets/error.png)

Необходимо дожидаться ввода всех семи символов, включая решётку, чтобы принимать решение о том, показывать ошибку или менять цвет фона.
