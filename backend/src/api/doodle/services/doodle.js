'use strict';

/**
 * doodle service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doodle.doodle');
