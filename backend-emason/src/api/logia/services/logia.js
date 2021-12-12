'use strict';

/**
 * logia service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::logia.logia');
