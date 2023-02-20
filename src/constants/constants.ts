import valueImg1 from "../../src/assets/images/value-1.jfif";
import valueImg2 from "../../src/assets/images/value-2.jfif";
import valueImg3 from "../../src/assets/images/value-3.jfif";
import zadovolniKlienti from "../../src/assets/images/zadovolni-klienti-icon.png";
import srekjniGotvaci from "../../src/assets/images/srekjni-gotvaci-icon.png";
import podgotveniJadenja from "../../src/assets/images/gotveni-jadenja-icon.png";
import step1 from "../../src/assets/images/step1.png";
import step2 from "../../src/assets/images/step2.png";
import step3 from "../../src/assets/images/step3.png";
import step4 from "../../src/assets/images/step4.png";
import purposeChef1 from "../../src/assets/images/purposeChef1.jpg";
import purposeChef2 from "../../src/assets/images/purposeChef2.jpg";
import purposeChef3 from "../../src/assets/images/purposeChef3.jpg";
import purposeVisitor1 from "../../src/assets/images/purposeVisitor1.jpg";
import purposeVisitor2 from "../../src/assets/images/purposeVisitor2.jpg";
import purposeVisitor3 from "../../src/assets/images/purposeVisitor3.jpg";
import criteria1 from "../../src/assets/images/criteria1.jpg";
import criteria2 from "../../src/assets/images/criteria2.jpg";
import criteria3 from "../../src/assets/images/criteria3.jpg";
import criteria4 from "../../src/assets/images/criteria4.jpg";
import criteria5 from "../../src/assets/images/criteria5.jpg";
import criteria6 from "../../src/assets/images/criteria6.jpg";
import criteria7 from "../../src/assets/images/criteria7.jpg";
import howToBecomeChef1 from "../../src/assets/images/howTo1.jpg";
import howToBecomeChef2 from "../../src/assets/images/howTo2.jpg";
import howToBecomeChef3 from "../../src/assets/images/howTo3.jpg";
import howToBecomeChef4 from "../../src/assets/images/howTo4.jpg";
import howToBecomeChef5 from "../../src/assets/images/howTo5.jpg";
import meat from "../../src/assets/images/meat.png";
import taco from "../../src/assets/images/taco.png";
import pasta from "../../src/assets/images/pasta.png";
import burrito from "../../src/assets/images/burrito.png";
import pizza from "../../src/assets/images/pizza.png";
import cupcake from "../../src/assets/images/cupcake.png";
import hotsoup from "../../src/assets/images/hot-soup.png";

import {
    accordionQuestionsInterface,
    criterionInterface,
    foodMenuInterface,
    howToBecomeInterface,
    joiningStepsInterface,
    ourValuesInterface,
    purposeInterface,
    statisticsDataInterface,
} from "../interfaces/interfaces";

export const ourValues: ourValuesInterface[] = [
    {
        img: valueImg1,
        title: "Поврзување!",
        info: "Вистински луѓе. Автентична љубов.",
    },
    {
        img: valueImg2,
        title: "Споделување на радост!",
        info: "Уживајте во заедницата преку храна.",
    },
    {
        img: valueImg3,
        title: "Кулинарски можности!",
        info: "Зајакнување на домашните готвачи.",
    },
];

export const statisticsData: statisticsDataInterface[] = [
    {
        class: "satisfiedCustomers",
        img: zadovolniKlienti,
        alt: "satisfiedCustomers-icon",
        num: "10 900+",
        info: "задоволни клиенти",
    },
    {
        class: "cookedMeals",
        img: podgotveniJadenja,
        alt: "cookedMeals-icon",
        num: "13 765+",
        info: "подготвени јадења",
    },
    {
        class: "happyChefs",
        img: srekjniGotvaci,
        alt: "happyChefs-icon",
        num: "864+",
        info: "среќни готвачи",
    },
];

export const clientUserSteps: joiningStepsInterface[] = [
    {
        img: step1,
        alt: "step1",
        info: "Регистрирај се на платформата како клиент!",
    },
    {
        img: step2,
        alt: "step2",
        info: "Одбери дали сакаш веќе подготвена храна или одбери датум на кој сакаш да ти биде подготвена.",
    },
    {
        img: step3,
        alt: "step3",
        info: "Нарачај брзо и лесно преку нашата платформа!",
    },
    {
        img: step4,
        alt: "step4",
        info: "Подигни ја нарачката и уживај во вкусот на храната.",
    },
];

export const chefUserSteps: joiningStepsInterface[] = [
    {
        img: step1,
        alt: "step1",
        info: "Регистрирај се на платформата како готвач!",
    },
    {
        img: step2,
        alt: "step2",
        info: "Пополни го целосно твојот профил.",
        readMore:
            " Прочитај повеќе информации за средување на твојот профил тука.",
    },
    {
        img: step3,
        alt: "step3",
        info: "Примај нарачки и готви вкусни јадења!",
    },
    {
        img: step4,
        alt: "step4",
        info: "Испорачувај ги твоите нарачки и заработи.",
    },
];

export const chefPurposes: purposeInterface[] = [
    {
        img: purposeChef1,
        title: "Заработи чесно",
        info: "Сосема е бесплатна за аплицирање. Многу шефови заработуваат околу 5000 денари неделно.",
    },
    {
        img: purposeChef2,
        title: "Биди свој готвач",
        info: "Дизајнирајте сопствено мени, поставете свои цени и работете кога сакате. Ќе ви помогнеме со плаќања, логистика и поддршка на клиентите.",
    },
    {
        img: purposeChef3,
        title: "Послужи среќни клиенти",
        info: "Добијте можност да ги зготвите вашите омилени рецепти и со тоа да усреќите гурмани кои секогаш сакаат да пробаат нешто ново.",
    },
];

export const visitorPurposes: purposeInterface[] = [
    {
        img: purposeVisitor1,
        title: "Поврзување!",
        info: "Вистински луѓе. Автентична љубов.",
    },
    {
        img: purposeVisitor2,
        title: "Споделување на радост!",
        info: "Уживајте во заедницата преку храна.",
    },
    {
        img: purposeVisitor3,
        title: "Кулинарски можности!",
        info: "Зајакнување на домашните готвачи.",
    },
];

export const criteria: criterionInterface[] = [
    {
        img: criteria1,
        step: "Вашата кујна треба да биде чиста и уредна!",
    },
    {
        img: criteria2,
        step: "Намирниците со кои ја готвите храната треба да се истите што се наведени во вашето мени!",
    },
    {
        img: criteria3,
        step: "Секогаш треба да ги измиете рацете темелно, пред да започнете со подготвување оброци!",
    },
    {
        img: criteria4,
        step: "Намирниците треба да се чуваат во соодветни услови! Проверувајте го редовно рокот пред да почнете да готвите.",
    },
    {
        img: criteria5,
        step: "Нека вашите миленичиња ве почекаат надвор од кујната. Некои клиенти не сакаат кога се готви во присуство на домашно милениче!",
    },
    {
        img: criteria6,
        step: "Бидете секогаш професионални и пријателски насочени кон клиентите кон нарачуваат храна од вас!",
    },
    {
        img: criteria7,
        step: "Ние сме едно големо семејство! Секогаш обидете се несогласувањата да ги решите директно со вашите клиенти. Сослушајте ги нивните критики - тоа ќе ве направи подобар готвач!",
    },
];

export const howToBecomeChef: howToBecomeInterface[] = [
    {
        img: howToBecomeChef1,
        title: "Добијте одобрение за готвење",
        explanation:
            "Регистрирајте се. Прочитајте и пополнете регулативи за безбедност на храната и изберете го вашето мени со јадења.",
    },
    {
        img: howToBecomeChef2,
        title: "Изберете го вашиот распоред",
        explanation:
            "Изберете ги деновите што сакате да ги готвите. Малку или колку што сакате.",
    },
    {
        img: howToBecomeChef3,
        title: "Подгответе ги вашите нарачки",
        explanation:
            "Клиентите можат да почнат да нарачуваат од вас на платформата. Освен за нарачки спремни веднаш за во текот на денот, тие ќе нарачаат барем еден ден однапред за да имате доволно време да ги набавите состојките и да ги подготвите нивните јадења.",
    },
    {
        img: howToBecomeChef4,
        title: "Подгответе ги за испорака",
        explanation:
            "Откако ќе ја подготвите нарачката, известете го клиентот дека истата е спремна за достава.",
    },
    {
        img: howToBecomeChef5,
        title: "Услужете ги вашите клиенти",
        explanation:
            "Ќе ви помогнеме да го идентификувате најдобриот достапен метод за испорака за вашите клиенти да можат безбедно и навреме да ја добијат храната.",
    },
];

export const howToJoinUs: howToBecomeInterface[] = [
    {
        img: howToBecomeChef1,
        title: "Регистрирај се на платформата како гурман!",
        explanation:
            "Регистрирајте се! Со ова веќе станувате дел од нашето семејство и имате профил на гурман ",
    },
    {
        img: howToBecomeChef2,
        title: "Нарачајте брзо и лесно!",
        explanation:
            "Разгледајте ги нашите готвачи, менито коешто го нудат и одберете храна по ваш вкус.",
    },
    {
        img: howToBecomeChef5,
        title: "Јадете домашно!",
        explanation:
            "Со достава или подигнување - ваш избор! Уживајте во вкусот на домашно приготвена храна од нашите незаменливи готвачи.",
    },
];

export const mostAskedQuestions: accordionQuestionsInterface[] = [
    {
        title: "Kако да се регистрирам?",
        content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, natus placeat facilis repellat vel consequuntur quaerat tempore corporis velit fugiat culpa, maxime magni architecto!",
    },
    {
        title: "Kако да променам коментар?",
        content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, natus placeat facilis repellat vel consequuntur quaerat tempore corporis velit fugiat culpa, maxime magni architecto!",
    },
    {
        title: "Kако да променам цена на рецепт?",
        content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, natus placeat facilis repellat vel consequuntur quaerat tempore corporis velit fugiat culpa, maxime magni architecto!",
    },
    {
        title: "Kако да променам веќе објавена слика на рецепт?",
        content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, natus placeat facilis repellat vel consequuntur quaerat tempore corporis velit fugiat culpa, maxime magni architecto!",
    },
    {
        title: "Kако да го избришам рецептот?",
        content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, natus placeat facilis repellat vel consequuntur quaerat tempore corporis velit fugiat culpa, maxime magni architecto!",
    },
];

export const menuFoodIcons: foodMenuInterface[] = [
    {
        img: hotsoup,
        alt: "hotsoup-icon",
        meal: "чорба",
    },
    {
        img: taco,
        alt: "taco-icon",
        meal: "такос",
    },
    {
        img: burrito,
        alt: "burrito-icon",
        meal: "тортиљи",
    },
    {
        img: pasta,
        alt: "pasta-icon",
        meal: "паста",
    },
    {
        img: meat,
        alt: "meat-icon",
        meal: "месо",
    },
    {
        img: pizza,
        alt: "pizza-icon",
        meal: "пица",
    },
    {
        img: cupcake,
        alt: "cupcake-icon",
        meal: "десерт",
    },
];

export const orderTime = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
];

export const month = [
    "ЈАН",
    "ФЕВ",
    "МАР",
    "АПР",
    "МАЈ",
    "ЈУН",
    "ЈУЛ",
    "АВГ",
    "СЕП",
    "ОКТ",
    "НОЕ",
    "ДЕК",
];
export const weekDay = ["НЕД", "ПОН", "ВТО", "СРЕ", "ЧЕТ", "ПЕТ", "САБ"];
export const extendedWeekDay = [
    "НЕДЕЛА",
    "ПОНЕДЕЛНИК",
    "ВТОРНИК",
    "СРЕДА",
    "ЧЕТВРТОК",
    "ПЕТОК",
    "САБОТА",
];
