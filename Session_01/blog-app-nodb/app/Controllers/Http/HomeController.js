'use strict'

class HomeController {
    async index({ request, response, view }) {
        var data = [
            {
                title: 'Backend Plus Javascript == NodeJS',
                content: 'Javascript is a language that has become ubiquitous in the world of the web. Websites use javascript to build elaborate user experiences and bring to life otherwise static content found on the web.',
                created_at: 'August 20th, 2019',
                author: {
                    name: 'Andrew Kanieski'
                }
            },
            {
                title: 'Package Management Done Right!',
                content: 'Proper package management is a vital element to a successful NodeJS application. Knowing when to use a package from NPM and when to “roll',
                created_at: 'July 12th, 2019',
                author: {
                    name: 'John Doe'
                }
            }
        ]
        return view.render('home', { posts: data })

    }
}

module.exports = HomeController
