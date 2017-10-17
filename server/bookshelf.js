/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import knex from 'knex';
import bookshelf from 'bookshelf';
import knexConfig from '../knexfile';
export default bookshelf(knex(knexConfig.development));

