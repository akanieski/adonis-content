'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('title', 255).notNullable().index()
      table.text('content').notNullable()

      // Setup foreign key column to User.Id with name author_id
      table.integer('author_id').references('id').inTable('users')

      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
