// source: https://unpkg.com/dayjs@v1.10.4/locale/mk.js
// see: https://github.com/iamkun/dayjs/blob/v1.10.4/src/locale/mk.js

!function(_,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("dayjs")):"function"==typeof define&&define.amd?define(["dayjs"],e):_.dayjs_locale_mk=e(_.dayjs)}(this,function(_){"use strict";_=_&&_.hasOwnProperty("default")?_.default:_;var e={name:"mk",weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),weekStart:1,weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),ordinal:function(_){return _},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"}};return _.locale(e,null,!0),e});

dayjs.locale('mk');
