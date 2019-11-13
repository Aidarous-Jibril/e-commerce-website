import { createSelector} from 'reselect';

//Input selector which gives back a piece of state
const selectDirectory = state => state.directory;

//Output selector takes in input selector and createSelector to build them together
export  const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)