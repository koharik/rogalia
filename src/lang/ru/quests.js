/* global Quest */

"use strict";

Quest.quests =  {
    "tutorial-start": {
        name: "Начало обучения",
        desc: [
            "Здравствуй, поселенец.",
            "Всякий, кто прибывает в эти земли, сначала попадает сюда, в мою Академию. Здесь я обучу тебя основам выживания.",
        ],
        final: "Отлично, приступим. Запоминай: <i>до 10 уровня на тебя не нападут дикие животные, а при смерти ты останешься со своей сумкой.</i>",
    },
    "craft-1": {
        name: "Сбор ресурсов" ,
        desc: "Для выживания в этих диких землях тебе необходимы инструменты, а чтобы их создать, нужны ресурсы. Собери четыре камня, два сучка и веточку.",
        tip: "По дереву: <rmb>Сорвать сук</rmb> и <rmb>Сорвать ветку</rmb>.<br>Собрать камни с земли <lmb></lmb>.",
    },
    "craft-1-2": {
        name: "Делаем рукоятку для ножа" ,
        desc: "Теперь сделай из суков палки, а из веток - прутики. Из них сделаем рукоятку для ножа.",
        tip: "<rmb>Сломать</rmb> по суку даст палку, а из ветки выйдет прутик.",
    },
    "craft-2": {
        name: "Делаем лезвие для ножа" ,
        desc: "У ножа должно быть острое лезвие, попробуй сделать его из острых камней.",
        tip: "<lmb></lmb> по иконке острого камня.<br>Перенесите камни в рецепт и нажмите <hl>Создать</hl>.",
    },
    "craft-2-1": {
        name: "Делаем нож" ,
        desc: "Отлично, все необходимое собрано. Осталось сделать сам нож.",
        tip: "Для того чтобы не переносить каждый ингридиент, кликните по кнопке <hl>Авто</hl>, а затем <hl>Создать</hl>",
    },
    "craft-3": {
        name: "Делаем оружие" ,
        desc: "Хорошо, теперь будем крафтить острую палку — твое первое оружие. Оно тебе понадобится позже.",
    },
    "stat-1": {
        name: "Жажда" ,
        desc: "Теперь я научу тебя, как добывать еду и воду.<br>Сорви кору с дерева и сделай кружку, затем наполни ее водой из источника. Не волнуйся, вода здесь чистая.",
        tip: "Встаньте в воду и <rmb>Заполнить</rmb>.<br><rmb>Пить</rmb> по кружке увеличит вашу выносливость.",
    },
    "stat-2": {
        name: "Голод" ,
        desc: "Самое время добыть еды и поесть. Нарви яблок с дерева.<br> Будь внимателен, <i>не переедай, иначе еда не принесет тебе витаминов, и ты станешь очень медленным</i>.<br>Если ты вдруг переел, туалет тут рядом, воспользуйся им.",
    },
    "fight": {
        name: "Бой и боевые комбинации" ,
        desc: "Вот ты и готов к своему первому бою.<br><hl>Возьми в руку острую палку и ударь манекен.</hl>",
        tip: "Удар выполняется в сторону указателя мыши.<br>Кнопки и хоткеи боевых умений находятся на нижней панели.",
    },
    "finish": {
        name: "Конец обучения" ,
        desc: "Ну вот я и обучил тебя основам выживания в этих землях.",
        final: "Пора отправляться в город.",
    },
    "tp-return-home": {
        name: "Телепортация: возвращение домой" ,
        desc: "Тебя интересуют порталы? Я тебе расскажу о способах перемещения по миру.<br> Пока ты находишься на поверхности мира и на тебя действует защита Синода, ты можешь вернуться домой. То есть на свой репаун, если он есть, или в  город. Попробуй.",
        "tip": "<rmb>Вернуться домой</rmb> по аватарке в левом верхнем углу.",
    },
    "tp-respawn": {
        name: "Телепортация: респаун",
        desc: "Городские респауны связанны с твоим респауном и наоборот.<br> Ты можешь перемещаться через респаун, но главная его задача - это возрождать тебя после смерти. Когда ты построишь свой респаун, ты заметишь, что он отличается от остальных.",
        tip: "<lmb></lmb> по ближайшему респауну."
    },
    "tp-scrolls": {
        name: "Телепортация: свитки",
        desc: "Свитки телепортации позволяют вернуться домой даже из самых опасных уголков мира. Они очень тебе пригодятся на нижних уровнях подземелий.<br> Я тебе дам парочку, но ты и сам можешь создать их или купить.",
    },
    "faction-daily-1": {
        name: "Помощь фракции (ежедневный)" ,
        desc: "Повысить статус внутри фракции",
    },
    "garland-daily": {
        name: "Гирлянда (ежедневный)" ,
        desc: [
            "Я тебе не сказал – но праздник в этом году может не состояться… Как-как? А вот так.",
            "Не переживай - у Деда всё схвачено. Я знаю, как всё исправить. Волшебство тут не действует – знаешь, наверное - так что я не могу просто взять, стукнуть посохом о землю и открыть тоннель отсюда. Но мы можем сделать это с помощью вашей алхимической трансформации.",
            "Я немного изучал здешнюю науку и знаю что делаю - не переживай. Вот что мне понадобится.",
        ],
        final: [
            "Принёс всё что нужно? Вот и отлично. У меня тоже всё готово.",
            "Так-с… Отойди-ка подальше. Я, конечно, знаю, что делаю - но может и рвануть. Слышал о городе, что исчез за одну ночь? Культисты делали похожий опыт. Правда, компонентов у них было больше нашего.",
            "Ага, готово! Ну вот! Ну вот же!",
            "Кхм, да. Это не совсем то, на что я рассчитывал.",
            "Всё равно – спасибо тебе, коротышка. Вот тебе награда. Это очень мощный энергетический проводник. Можно взорвать город или создать симпатичного гомункула. Ну… или на ёлку повесить. Как украшение.",
        ],
    },
    "chrismas-flags-daily": {
        name: "Флажки (ежедневный)",
        desc: [
            "Мне срочно нужна твоя помощь!",
            "Снегурочка доложила мне, что в лесу неподалёку шастают агенты Империи. Они хотят похитить меня, понимаешь? Меня и мою внучку! А без нас не будет никакого Нового Года!",
            "Мы должны спасти праздник!",
            "За нами следят даже сейчас. Не оборачивайся! Не делай резких движений! Слушай. Как только ты возьмёшь это письмо ты тут же станешь мишенью для наёмных убийц Империи. Даже если тебе каким-то чудом удастся донести письмо до леса - тебя убьют. Чтобы не оставлять свидетелей…",
            "Стой, ты куда?",
            "Я пошутил! Это слишком опасно - я бы никогда не отправил тебя на верную смерть. Вот, смотри - мне нужны эти ингредиенты. Справишься? Нет, в этот раз тебя никто убивать не будет. Наверное.",
        ],
        final: [
            "Справился? Великолепно!",
            "Теперь, всё, что мне нужно, это склеить их вот так. И ещё вот так. А теперь - немного консервированной снежной магии. И-и-и…",
            "…И это совсем не то, что мне было нужно. Эх, ты точно собирал те ингредиенты, которые я заказывал?",
            "Эх, столько магии потрачено впустую! Ладно, можешь оставить себе эти флажки - мне они совсем без надобности",
        ],
    },
    "chrismas-decoration-daily-2": {
        name: "Бумажные украшения (ежедневный)" ,
        desc: [
            "Дед задумал всем вам чудо",
            "Новогоднее дарить,",
            "Да забыл он, что имперцев",
            "Сложно нам уговорить.",
            "Раз решили негодяи ",
            "Нас похитить в Новый Год",
            "Их ничто не остановит - ",
            "Будут здесь они вот-вот.",
            "Принеси ингредиентов,",
            "Собери всё, что я скажу.",
            "Сделаю я обереги",
            "Заклинанье наложу. ",
            "Сильное, могучее,",
            "Для врагов колючее.",
        ].join("<br>"),
        final: [
            "Всё принёс? Ну, молодчина!",
            "Что ещё тебе сказать.",
            "Вот - возьми себе немного,",
            "Будешь ёлку украшать.",
        ].join("<br>")
    },
    "chrismas-decoration-daily-1": {
        name: "Стеклянные украшения (ежедневный)" ,
        desc: [
            "Эй, дружок, поди сюда",
            "У меня опять нужда. ",
            "Дед к вам быстро собирался ",
            "И забыл с собою взять ",
            "Свои зелья - машу ж вать. ",
            "Есть какие-то остатки,",
            "Эту вымой, это взвесь. ",
            "Остальное же придётся",
            "Нам готовить прямо здесь.",
            "Вот, нужны ингредиенты,",
            "Принеси, пока варю.",
            "Я ж тебе в уплату долга",
            "Зелье Силы подарю.",
        ].join("<br>"),
        final: [
            "Ну, готово? Наконец.",
            "Сварим всё, как холодец",
            "А тебе, как обещала -",
            "Зелья Силы образец. ",
            "Пей, не бойся, посмелей",
            "Станешь ловче и быстрей.",
            "Будешь самым сильным в этом",
            "Мире слабеньких людей. ",
            "Ну, как чувствуешь? А сила? ",
            "По рецепту же варила!",
            "Что ж попытка всё не пытка",
            "И Огонь Зимы сейчас,",
            "Видно, даже в жидком виде",
            "Не работает на вас. ",
            "Но родился ты в рубашке - ",
            "Прошлый выпил - ну и в рай. ",
            "Ладно, колбы из под зелий,",
            "Если хочешь - забирай.",
        ].join("<br>"),
    },
    "buy-small-indulgence": {
        name: "Малая индульгенция",
        customReward: "+100 кармы",
        desc: [
            "Ты всегда можешь исповедаться. Истинное покаяние, несомненно, поможет направить душу на путь истинный.",
            "Задача церкви поддерживать баланс добра и зла. Если хочешь остаться под крылом церкви, я знаю как тебе помочь.",
            "Тяжесть греха бывает столь велика, что становится непосильна для одной души. Но даже сбившиеся с пути заслуживают второго шанса. Мы работаем с подобными случаями, но ритуал не из простых."
        ],
    },
    "buy-average-indulgence": {
        name: "Средняя индульгенция",
        customReward: "+1000 кармы",
        desc: [
            "Ты всегда можешь исповедаться. Истинное покаяние, несомненно, поможет направить душу на путь истинный.",
            "Задача церкви поддерживать баланс добра и зла. Если хочешь остаться под крылом церкви, я знаю как тебе помочь.",
            "Тяжесть греха бывает столь велика, что становится непосильна для одной души. Но даже сбившиеся с пути заслуживают второго шанса. Мы работаем с подобными случаями, но ритуал не из простых."
        ]

    },
    "buy-big-indulgence": {
        name: "Великая индульгенция",
        customReward: "+10000 кармы",
        desc: [
            "Ты всегда можешь исповедаться. Истинное покаяние, несомненно, поможет направить душу на путь истинный.",
            "Задача церкви поддерживать баланс добра и зла. Если хочешь остаться под крылом церкви, я знаю как тебе помочь.",
            "Тяжесть греха бывает столь велика, что становится непосильна для одной души. Но даже сбившиеся с пути заслуживают второго шанса. Мы работаем с подобными случаями, но ритуал не из простых."
        ]
    }
};
