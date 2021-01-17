import axios from 'axios';

// import deviceStorage from '../services/deviceStorage';
import { AsyncStorage } from 'react-native';

global.currentReactEnvironment = 'http://localhost:3003/api';

let api = axios.create({ baseURL: global.currentReactEnvironment });

api.interceptors.request.use(
	async function(config) {
		config.headers.Authorization = await AsyncStorage.getItem('jwt');
		return config;
	},
	function(err) {
		return Promise.reject(err);
	}
);

global.changeReactUserEnvironment = () => {
	api = axios.create({ baseURL: global.currentReactEnvironment });
	api.interceptors.request.use(
		async function(config) {
			config.headers.Authorization = await AsyncStorage.getItem('jwt');
			return config;
		},
		function(err) {
			return Promise.reject(err);
		}
	);
};

export function getPrimaryBuckets() {
	return api.get('/home');
}

export async function addBucket(payload) {
	return api.post('/bucket', payload);
}

export async function addDefaultBuckets(payload) {
	return api.post('/bucket/default', payload);
}

//edit bucket
export function editBucket(payload) {
	return api.put('/bucket', payload);
}

export function localSignup(payload) {
	return api.post('/local/signup', payload);
}

export function localLogin(payload) {
	return api.post('/local/login', payload);
}

//get secondary list of buckets
export function getSecondaryBuckets(bucket_id) {
	return api.get(`/bucket?id=${bucket_id}`);
}

//get total buckets
export function getAllBuckets() {
	return api.get('/home');
}

//get child buckets
export function getAllChildBuckets() {
	return api.get('/buckets/child');
}

export function getAllBucketsByType() {
	return api.get('/buckets/type');
}

//post with text
export function postWithText(payload, config) {
	return api.post('/post/add/text', payload, config);
}

//add post with image
export function postWithImage(payload, bucket_id, config) {
	return api.post(`/post/add/image?id=${bucket_id}`, payload, config, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	});
}

//add specific reminder
export function addSpecificReminder(payload) {
	return api.post('/reminder/specific', payload);
}

//add daily reminders
export function addDailyReminder(payload) {
	return api.post('/reminder/daily', payload);
}

//get all reminders
export function getAllReminders() {
	return api.get('/reminders');
}

// get post with text
export function getAllPosts(bucket_id) {
	return api.get(`/posts/bucket?id=${bucket_id}`);
}

//get user information
export function getUserInformation(payload) {
	return api.get(`/user`);
}

//edit post containing text
export function editPost(payload) {
	return api.put('/post', payload);
}

export function deletePost(payload) {
	return api.delete('/post', { data: payload });
}

export function deleteBucket(payload) {
	return api.delete('/bucket', { data: payload });
}

//delete reminder
export function deleteReminder(payload) {
	return api.delete('/reminders', { data: payload });
}

export function sendFeedback(payload) {
	return api.post('/feedback', payload);
}
export function sendCodeToChangePassword(payload) {
	return api.post('/password', payload);
}

export function verifyResetPasswordCode(payload) {
	return api.get(`/password?email=${payload.email}&code=${payload.code}`);
}

export function resetPassword(payload) {
	return api.put(`/password`, payload);
}

export function pinBuckets(payload) {
	return api.put('/buckets/pin', payload);
}

export function unpinBuckets(payload) {
	return api.put('/buckets/unpin', payload);
}

//edit reminder
export function editReminder(payload) {
	return api.put('/reminders', payload);
}

//get list of subscribed buckets
export function getSubscribedBuckets() {
	return api.get('/bucket/subscribe');
}

export function getPostsFromSubscribedBuckets(payload) {
	return api.get(`/bucket/subscribe/post?id=${payload.bucket_id}`);
}

export function listOfSubscribedSubBuckets(bucket_id) {
	return api.get(`/bucket/subscribe/child?id=${bucket_id}`);
}

//delete subscription
export function unsubscribeBucket(payload) {
	return api.delete('/bucket/unsubscribe', { data: payload });
}

//search bucket
export function searchBucket(payload, options) {
	return api.get(`/bucket/search?bucket_name=${payload.bucket_name}`, options);
}

//search child bucket
export function searchChildBucket(payload, options) {
	return api.get(`/bucket/child/search?bucket_name=${payload.bucket_name}`, options);
}

export function getChildBucketsForParent(bucket_id) {
	return api.get(`/bucket?id=${bucket_id}`);
}

export function getCancelToken() {
	return axios.CancelToken.source();
}

export function catchCancelThrown(thrown) {
	if (axios.isCancel(thrown)) {
		return;
	}
	throw thrown;
}

export function saveToS3(payload) {
	return api.post('/post/add/image', payload);
}
