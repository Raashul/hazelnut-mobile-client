import { createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

// Slice
const slice = createSlice({
	name: 'bucket',
	initialState: {
		isCreateBucketModalVisible: false,
		isImageGalleryModalVisible: false,
		loading: false,
		selectedBucketCoverImage: {
			URI: ''
		},
		primaryBuckets: []
	},
	reducers: {
		setLoading: (state, action) => {
			const { isLoading } = action;
			if (typeof isLoading === undefined) {
				return { ...state, isLoading: isLoading };
			} else {
				return { ...state, isLoading: !state.isLoading };
			}
		},
		openCreateBucketModal: (state, action) => {
			if (typeof action.payload !== 'undefined') {
				return { ...state, isCreateBucketModalVisible: action.payload };
			} else {
				return { ...state, isCreateBucketModalVisible: !state.isCreateBucketModalVisible };
			}
		},
		toggleImageGalleryModal: (state, action) => {
			if (typeof action.payload !== 'undefined') {
				return { ...state, isImageGalleryModalVisible: action.payload.toggle };
			} else {
				return { ...state, isImageGalleryModalVisible: !state.isImageGalleryModalVisible };
			}
		},
		setPrimaryBucketList: (state, action) => {
			return { ...state, primaryBuckets: action.payload.buckets };
		},
		saveBucketToBucketList: (state, action) => {
			console.log('ac', action);
			// const bucketList = state.primaryBuckets;
			// bucketList.push(action.payload.bucketList)
		},
		setBucketCoverImage: (state, action) => {
			return {
				...state,
				selectedBucketCoverImage: action.payload,
				isImageGalleryModalVisible: false,
				isCreateBucketModalVisible: true
			};
		}
	}
});
export default slice.reducer;

// Actions
const {
	openCreateBucketModal,
	setPrimaryBucketList,
	saveBucketToBucketList,
	toggleImageGalleryModal,
	setBucketCoverImage
} = slice.actions;

export const handleOpenBucketModal = (payload) => async (dispatch) => {
	try {
		dispatch(openCreateBucketModal(payload));
	} catch (e) {
		return console.error(e.message);
	}
};

export const toggleGalleryModal = (payload) => async (dispatch) => {
	try {
		dispatch(toggleImageGalleryModal({ toggle: payload }));
	} catch (e) {
		return console.error(e.message);
	}
};

export const handleSaveBucket = (payload) => {
	return async (dispatch) => {
		// dispatch(setLoading());

		try {
			const response = await api.addBucket(payload);

			dispatch(openCreateBucketModal(false));
			dispatch(saveBucketToBucketList(payload));
		} catch (error) {
			console.log('err', error);
			// dispatch(getRecipesFailure());
		}
	};
};

export const getParentBuckets = (payload) => {
	return async (dispatch) => {
		// dispatch(setLoading());

		try {
			const response = await api.getPrimaryBuckets();
			dispatch(setPrimaryBucketList(response.data));
		} catch (error) {
			console.log('err', error);
			// dispatch(getRecipesFailure());
		}
	};
};

export const handleBucketCoverImageSelect = (payload) => {
	return async (dispatch) => {
		try {
			dispatch(setBucketCoverImage(payload));
		} catch (error) {
			console.log('err', error);
			// dispatch(getRecipesFailure());
		}
	};
};
