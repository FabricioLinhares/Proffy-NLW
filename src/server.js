const proffys = [
    { 
        name: 'Fabricio Linhares',
        avatar: 'https://avatars0.githubusercontent.com/u/68481995?s=460&u=5ca5d348d8c2957c85f598cfd0597469d9d28731&v=4',
        whatsapp: '79981140035',
        bio: 'Sou um iniciante no mundo da programação, estudando Ciência da Computação na Universidade Federal de Sergipe. Porém, apaixonado pela física.<br><br>Espero poder te ajudar no seu caminho ao sucesso acadêmico.',
        subject: 'Física',
        cost: '12,00',
        weekday: [0, 2],
        time_from: [720, 780],
        time_to: [1220, 880]
    },
    { 
        name: 'Diego Fernandes',
        avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
        whatsapp: '89921156625',
        bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
        subject: 'Química',
        cost: '20,00',
        weekday: [0, 4],
        time_from: [730, 800],
        time_to: [1290, 880]
    }
]

const subjects = [
    'Artes',
    'Biologia',
    'Ciências',
    'Educação física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Português',
    'Química',
]

const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
]

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(require, response){
    return response.render('index.html')
}

function pageStudy(require, response){
    const filters = require.query
    return response.render('study.html', { proffys, filters, subjects, weekdays})
}

function pageGiveClasses(require, response){
    const data = require.query
    const isNotEmpty = Object.keys(data).length !== 0
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return response.redirect('/study')
    }
    return response.render('give-classes.html', { subjects, weekdays })
}

const express = require('express')
const server = express()

// nunjucks config (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.static('public'))
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.listen(5500)