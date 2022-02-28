'use strict';

/**
 * forest service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::forest.forest');
