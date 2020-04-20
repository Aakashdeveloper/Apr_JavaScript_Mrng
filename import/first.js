let articles = {}

articles.latest=[
    {
        name:'About JavaScript',
        price:879
    },
    {
        name:'About React',
        price:334
    }
]

articles.find = (table) => { return `Select * from ${table}`}

module.exports = articles;