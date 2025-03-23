import {type IQuestion} from "../types/IQuestion.ts";

export const questions: IQuestion[] = [
    {
        question: "Что выведет console.log(typeof null)?",
        answers: ["null", "object", "undefined", "number"],
        correctAnswer: 1,
    },
    {
        question: "Какой результат будет у выражения '2' + 2?",
        answers: ["4", "'22'", "NaN", "Ошибка"],
        correctAnswer: 1,
    },
    {
        question: "Что делает метод `map()` в JavaScript?",
        answers: [
            "Фильтрует элементы массива",
            "Создаёт новый массив с изменёнными элементами",
            "Изменяет текущий массив",
            "Ничего не делает",
        ],
        correctAnswer: 1,
    },
    {
        question: "Как объявить асинхронную функцию?",
        answers: ["async function myFunc() {}", "function myFunc async() {}", "function async myFunc() {}", "async: function myFunc() {}"],
        correctAnswer: 0,
    },
    {
        question: "Чему равно `0 == false`?",
        answers: ["true", "false", "Ошибка", "undefined"],
        correctAnswer: 0,
    },
    {
        question: "Какой хук используется для управления состоянием в React?",
        answers: ["useEffect", "useState", "useRef", "useReducer"],
        correctAnswer: 1,
    },
    {
        question: "Какой метод жизненного цикла в классовых компонентах вызывается после первого рендера?",
        answers: ["componentDidMount", "componentWillUnmount", "componentDidUpdate", "constructor"],
        correctAnswer: 0,
    },
    {
        question: "Как передать пропсы в функциональный компонент?",
        answers: [
            "this.props",
            "props => <Component props={props} />",
            "function Component(props) {}",
            "useProps()",
        ],
        correctAnswer: 2,
    },
    {
        question: "Что делает `useEffect()` без второго аргумента?",
        answers: [
            "Вызывается один раз при монтировании",
            "Вызывается при каждом рендере",
            "Никогда не вызывается",
            "Вызывается только при размонтировании",
        ],
        correctAnswer: 1,
    },
    {
        question: "Какой хук используется для работы с рефами в React?",
        answers: ["useState", "useMemo", "useRef", "useEffect"],
        correctAnswer: 2,
    },
    {
        question: "Что такое алгоритм?",
        answers: [
            "Последовательность команд для решения задачи",
            "Программа на JavaScript",
            "Функция в коде",
            "Список переменных",
        ],
        correctAnswer: 0,
    },
    {
        question: "Что такое рекурсия?",
        answers: [
            "Функция, вызывающая саму себя",
            "Использование циклов",
            "Сортировка массива",
            "Объявление переменной внутри функции",
        ],
        correctAnswer: 0,
    },
    {
        question: "Какой из следующих типов данных является неизменяемым (immutable)?",
        answers: ["Array", "Object", "String", "Function"],
        correctAnswer: 2,
    },
    {
        question: "Что делает оператор `===`?",
        answers: [
            "Сравнивает значения с приведением типов",
            "Сравнивает только типы",
            "Сравнивает значения без приведения типов",
            "Используется для присваивания",
        ],
        correctAnswer: 2,
    },
    {
        question: "Что такое замыкание (closure) в JavaScript?",
        answers: [
            "Функция, которая вызывает саму себя",
            "Функция, имеющая доступ к переменным из своей внешней области видимости",
            "Функция, которая работает только внутри объекта",
            "Способ хранения данных в браузере",
        ],
        correctAnswer: 1,
    },
    {
        question: "Какое из утверждений о стеке вызовов (call stack) верно?",
        answers: [
            "Используется для хранения объектов",
            "Это структура данных LIFO (Last In, First Out)",
            "Это асинхронная очередь задач",
            "Используется только в асинхронном коде",
        ],
        correctAnswer: 1,
    },
    {
        question: "Какая сложность у бинарного поиска?",
        answers: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        correctAnswer: 1,
    },
    {
        question: "Какой принцип программирования относится к `DRY`?",
        answers: [
            "Не повторяйся",
            "Используй как можно больше кода",
            "Простая и понятная кодовая база",
            "Объектно-ориентированное программирование",
        ],
        correctAnswer: 0,
    },
    {
        question: "Какой принцип `SOLID` отвечает за то, что класс должен иметь только одну ответственность?",
        answers: [
            "Single Responsibility Principle",
            "Open/Closed Principle",
            "Liskov Substitution Principle",
            "Interface Segregation Principle",
        ],
        correctAnswer: 0,
    },
];