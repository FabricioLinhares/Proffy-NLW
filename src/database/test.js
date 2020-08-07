const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Insert Data
    proffyValue = {
        name: 'Fabricio Linhares',
        avatar: 'https://avatars0.githubusercontent.com/u/68481995?s=460&u=5ca5d348d8c2957c85f598cfd0597469d9d28731&v=4',
        whatsapp: '79981140035',
        bio: 'Sou um iniciante no mundo da programação, estudando Ciência da Computação na Universidade Federal de Sergipe. Porém, apaixonado pela física.<br><br>Espero poder te ajudar no seu caminho ao sucesso acadêmico.',
    }

    classValue = {
        subject: 1,
        cost: '12',
    }

    classScheduleValues = [
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 2,
            time_from: 780,
            time_to: 880
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consult Data

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1250"
        AND class_schedule.time_to > "1250"
    `)

    console.log(selectClassesSchedules)

})