=== Bible References ===
Contributors: bibleonline
Donate link: https://donate.bible.ru/
Tags: bible, scripture, references, reftagger, reftagging, crossref, syn, rbo, kjv, verse, verses, jesus christ, holy bible, holy spirit
Requires at least: 3.0.1
Tested up to: 4.9.1
Stable tag: 2.7.12
License: GPLv2
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Automatically replace Bible references to a hyperlink with Bible text. Website https://bibleonline.ru/tools/ref/

== Description ==

Description only in Russian.

Данный плагин является инструментом по подсветки ссылок из Библии на вашем сайте.
Установив данный плагин, вы позволите посетителям вашего сайта сразу прочесть, то или иное место из Библии, просто наведя на стих курсор мыши.

На пример вы упомянули у себя "Первое послание к Тимофею 3:16", текст данного места появляется,  как только посетитель наведет курсор мыши на данный стих.  

Более того, ваш читатель может прочитать это место в контексте данной главы, просто нажав на данный стих.

== Installation ==

1. Upload `bible-references` directory to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress.

== Frequently Asked Questions ==

F.A.Q. only in Russian.

= Как я узнаю, что скрипт работает? =

Любые ссылки на Библейские стихи на вашей странице, будут заменены на гиперссылки.

= Почему у меня не работает скрипт? =

* Убедитесь, что JavaScript код присутствует на странице и находится непосредственно перед закрывающимся тегом <body>.
* Убедитесь, что ваш браузер поддерживает JavaScript, и JavaScript включен в настройках браузера.
* Убедитесь, что ваша ссылка на Библейский текст не находится в теге (или классе), который вы запретили для использования в поиске.

= На каких языках работает подстветка стихов? =

* Поиск Библейских книг сегодня происходит на Русском, Украинском и Английском языке. В качестве подсветки книг, можно использовать любой из переводов присутствующих на сайте.

== Screenshots ==

1. Configuration of plugin
2. An example work of the plugin - gotquestion.org
3. An example work of the plugin - slovo.org
4. An example work of the plugin - bogoblog.ru
5. An example work of the plugin - metachurch.ru
6. An example work of the plugin - blog.bibleonline.ru

== Changelog ==

= 2.7.12 -
* Решена проблема, когда полученный отрывок имел слишком большой размер, как результат окно выходило за границы окна клиента.

= 2.7.3 =
* Решен вопрос, когда на вашем сайте используется z-index с большим значением (наше окно оставалось снизу)
* Автоматическое увеличение окна с текстом, если вы ссылаетесь на слишком большую часть Писания
* Добавлен POD файл. Если вы хотите помочь, нам с переводом на другие языки, пишите!

= 2.7.2 =
* Исправлена ошибка (не подсвечивалась 4 книга царств )

= 2.7.1 =
* Исправлены ошибки с работой HTTPS, все скрипты подгружаются по умолчанию по шифрованному каналу
* Дополнительная поодержка Украинских и Английских названий
* Исправлены ошибки со стилями

= 1.1.3 =
* Исправлена ошибка с сбросом настроек
* Исправлен скрипт разбора ссылок, решены проблемы с посланиями Иоанна и книгой Деяний

= 1.1.2 = 
* Исправлена ошибка с определением 4 книги царств и ряд других книг
* Устранена ошибка при входе в панель администрирования без прав администратора

= 1.1.1 =
* Default option fix. If you use previous version of plugin, please replace in `Separators verse from verses` field: "." (dot) to "," (commaa).
* Если вы используете предыдущию версию плагина, измените `Разделители стихов от стихов` c "." (точки) на "," (запятую).

= 1.1 = 
* Stable release
* Now you can configure plugin
* Plugin supported multi languages

= 1.0 =
* Plugin in beta testing mode

== Upgrade Notice ==

= 2.7.1 =
Если ваш сайт использует HTTPS, вам необходимо зайти на страницу настройки плагина и нажать на кнопку "Сохранить изменения"

== License ==

GNU General Public License v2

