// src/redux/actions/filter.ts

// Define the shape of a Sort option
export interface SortOption {
  name: string;
  type: string;
  order: 'asc' | 'desc';
}

// Define action types
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_SORT_BY = 'SET_SORT_BY';

// Action creators
export const category = (index: number | null) => ({
  type: SET_CATEGORY,
  payload: index,
});

export const setSort = (sortOption: SortOption) => ({
  type: SET_SORT_BY,
  payload: sortOption,
});
