'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Post = use('App/Models/Post')

class HomeController {
    async index({ request, response, view }) {
        var dataset = await Post.query().with('author').fetch()
        return view.render('home', { posts: dataset.rows })
    }
}

module.exports = HomeController
