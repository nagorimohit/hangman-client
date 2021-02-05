export const actionIds = {
    // START GAME
    START_GAME: 'START_GAME',
    START_GAME_SUCCESS: 'START_GAME_SUCCESS',

    // USER INTERACTION
    LETTER_PRESSED: 'LETTER_PRESSED',

    // SAVE GAME
    SAVE_GAME: 'SAVE_GAME',
    SAVE_GAME_SUCCESS: 'SAVE_GAME_SUCCESS',
    SAVE_GAME_FAILURE: 'SAVE_GAME_FAILURE',

    // TIMER
    TIMER_RESTART: 'TIMER_RESTART',
    TIMER_UPDATED: 'TIMER_UPDATED',

    // APP LEVEL
    TOGGLE_THEME: 'TOGGLE_THEME'
};

export interface BaseAction {
    type: string;
    payload?: any;
}