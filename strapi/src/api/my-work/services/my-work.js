'use strict';

/**
 * my-work service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-work.my-work');
