/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ToolsState = {
    toolName?: string;
};

const initialState: ToolsState = {
    toolName: undefined,
};

export const toolsSlice = createSlice({
    name: 'TOOLS',
    initialState,
    reducers: {
        setToolName(state, { payload }: PayloadAction<{ toolName: string }>) {
            state.toolName = payload.toolName;
        },
    },
});

export const toolsReducer = toolsSlice.reducer;
export const { setToolName } = toolsSlice.actions;
