import { createApiRequest } from './base';

/**
 * "name":"",
 * "email":"a@a.com",
 * "number":"1122",
 * "information": "1122"
 */
export const createResident = (data) => createApiRequest('/residents', 'POST', data);

export const getAllResidents = () => createApiRequest('/residents', 'GET');
