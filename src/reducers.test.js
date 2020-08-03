import {CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from "./constants";

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
        }
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
    })
    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({searchField: 'abc'})
    })
})

describe('requestRobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }
    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    })
    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots,
            {type: REQUEST_ROBOTS_PENDING}).isPending)
            .toEqual(true);
    })
    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots,
            {type: REQUEST_ROBOTS_SUCCESS, payload: [
                    {id: 123, name: 'test', email: 'test@gmail.com'}
                ]}).isPending)
            .toEqual(false);
    })
    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots,
            {type: REQUEST_ROBOTS_FAILED, payload: 'Error Message'}))
            .toEqual({isPending: false, error: 'Error Message', robots: []});
    })

})
