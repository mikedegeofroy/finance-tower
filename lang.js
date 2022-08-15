var language = window.navigator.userLanguage || window.navigator.language;

if (language == 'ru'){
    location.href = 'ru.html'
} else {
    location.href = 'en.html'
}
