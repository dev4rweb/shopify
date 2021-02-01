const StateData = {
    lang: [],
    products: [],
    header: {
        cabinet: {
            ru: 'Личный кабинет', en: 'Personal Area'
        },
        navbar: {
            product: {ru: 'Продукция', en: 'Products'},
            guarantee: {ru: 'Гарантия', en: 'Guarantee'},
            payment: {ru: 'Оплата и доставка', en: 'Payment and delivery'},
            refund: {ru: 'Обмен и возврат', en: 'Exchange and return'},
            about: {ru: 'О компании', en: 'About company'},
            contacts: {ru: 'Контакты', en: 'Contacts'},
        },
    },
    aside: {
        title: {ru: 'Каталог', en: 'Catalog'},
    },
    infoCard: {
        support: {ru: 'Тех Поддержка', en: 'Products'},
        online: {ru: 'Онлайн', en: 'Online'},
        automatic: {ru: 'Автоматическая', en: 'Automatic'},
        send: {ru: 'отправка ключей', en: 'sending keys'},
        pay: {ru: 'Все виды оплаты', en: 'All types of sales'},
    },
    promo: {
        date: `December 31, 2021 00:00:25`,
        content: {
            ru: 'Купить лицензионные ключи с огромной скидкой',
            en: 'Buy license keys at a huge discount'
        },
    },
    breadcrumbs: {
        mainPage: {
            ru: 'Ключи Windows 10 PRO',
            en: 'Keys Windows 10 OC'
        },
        guaranteePage: {
            ru: 'Гарантии SoftKey',
            en: 'Softkey guarantees'
        },
        paymentPage:{
            ru: 'Оплата и доставка на SoftKey',
            en: 'Payment and delivery on SoftKey'
        },
        refundPage:{
            ru: 'Обмен и возврат',
            en: 'Exchange and return'
        }
    },
    guaranteePage: {
        webmoney: {
            title: {ru: 'Аттестат webmoney', en: 'Webmoney passport'},
            content: {
                ru: 'Мы прошли аттестацию в платежной системе Webmoney и получили' +
                    'персональный аттестат. Это Обеспечивает Вам безопасность покупок',
                en: 'We passed certification in the webmoney payment system and received' +
                    'a personal certificate. This ensures your shopping safety'
            }
        },
        payment: {
            title: {
                ru: 'Множество способов оплаты',
                en: 'Lots of ways payment'
            },
            content: {
                ru: 'Вы можете выбрать тот вариант оплаты, который считаете максимально ' +
                    'удобным и надежным. ',
                en: 'You can choose the payment option that you think is the most convenient' +
                    'and reliable'
            }
        },
        delivery: {
            title: {
                ru: 'Моментальная доставка',
                en: 'Instant delivery'
            },
            content: {
                ru: 'После совершения оплаты вы моментально получите свой товар.',
                en: 'After making the payment, you will instantly receive your item'
            }
        }
    },
    paymentPage:{
        paymentMain:{
            ru: 'В течение 1-й минуты после получения оплаты, система автоматически отправляет ' +
                'ключ на е-меил, который был указан в платежной форме. Если письма нет в ' +
                'папке "Входящие", тогда проверьте папку «Спам».',
            en: 'Within 1 minute after receiving the payment, the system automatically' +
                'sends the key to the e-mail that was specified in the payment form. If' +
                'the message is not in your Inbox, then check you Spam folder'
        },
        title:{
            ru: 'В письме Вы получаете:',
            en:'In the letter you receive'
        },
        paymentCards: {
            instruction: {
                ru: 'Инструкцию по активации',
                en: 'Instructions for activation'
            },
            key: {
                ru: 'Лицензионный ключ активации',
                en: 'Licensed activation key'
            },
            link: {
                ru: 'ссылку на официальный дистрибутив',
                en: 'Link to official distribution kitz'
            }
        }
    },
    refundPage: {
        firstBlock: {
            ru: 'Все лицензии проходят валидацию онлайн на сервере Microsoft,' +
                ' поэтому ключи активируются в 100% случаев. Если активация по каким-то' +
                ' причинам не происходит, Вам необходимо сделать фотографию  экрана ' +
                'Вашего ПК, где виден номер ключа, версия ПО и сообщение об ошибке,' +
                ' и отправить нам на е-меил, который указан в письме с ключом активации' +
                ' или в онлайн чат техподдержки. Техническая поддержка в рабочее время' +
                ' реагирует на обращение в течение 10-15 минут и всегда успешно решает' +
                ' любые вопросым',
            en: 'All licenses are validated online on the Microsoft server, so the keys' +
                ' are activated in 100% of cases. If activation for some reason does' +
                ' not occur, you need to take a photo of your PC screen, where you' +
                ' can see the key number, software version and error message, and ' +
                'send us to the e-mail that is indicated in the letter with the' +
                ' activation key or in the online technical support chat ...' +
                ' Technical support during working hours responds to requests ' +
                'within 10-15 minutes and always successfully resolves any issues'
        },
        secondBlock:{
            ru: 'В случае если Вы приобрели ключ, и хотите его вернуть - данная' +
                ' процедура невозможна, согласно постановления Кабинета Министров ' +
                'Украины от 19 марта 1994 № 172, поскольку интернет-магазин не может' +
                ' проверить ключ на предмет его активации.',
            en: 'If you purchased a key and want to return it, this procedure is' +
                ' impossible, according to the resolution of the Cabinet of Ministers' +
                ' of Ukraine dated March 19, 1994 No. 172, since the online store cannot' +
                ' verify the key for its activation.'
        },
        formTitle: {
            ru: 'Подать заявление на возврат товара',
            en: 'Apply for a return'
        },
        formContent: {
            email:{
                ru: 'Ваш email',
                en: 'Your email'
            },
            purchase:{
                ru: 'Номер покупки',
                en: 'Purchase number'
            },
            btnText:{
                ru: 'Подать заявление',
                en: 'Apply'
            }
        }
    }
};

export default StateData;