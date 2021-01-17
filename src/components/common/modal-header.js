import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AppText, HeaderText, BackArrowIcon, CancelIcon } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { createBucket } from '../../store/bucket';

export default function ModalHeader(props) {
	const { titleStyle } = props;

	const dispatch = useDispatch();
	const bucketState = useSelector((state) => state.bucket);

	// const handleSubmitPress = () => {
	// 	dispatch(createBucket({ bucket_name: 'Bucket Name', cover_image: 'hello' }));
	// };

	return (
		<View style={{ flexDirection: 'row', marginTop: 50 }}>
			<TouchableOpacity
				onPress={props.handleBackPress}
				style={{ flex: 1, height: '100%', justifyContent: 'flex-start' }}
			>
				{props.iconCancel === 'back' ? (
					<TouchableOpacity style={{ backgroundColor: 'red', marginLeft: 10 }} onPress={props.handleBackPress}>
						<BackArrowIcon tintColor="black" onButtonClick={props.handleBackPress} />
					</TouchableOpacity>
				) : (
					<TouchableOpacity style={{ marginLeft: 10 }} onPress={props.handleBackPress}>
						<CancelIcon onPress={props.handleBackPress} />
					</TouchableOpacity>
				)}
			</TouchableOpacity>

			<View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
				<AppText
				// bold={titleStyle.isBold ? true : null}
				// font={titleStyle.font ? titleStyle.font : 'NotoSans'}
				// size={titleStyle.size ? titleStyle.size : '16'}
				>
					{props.title}
				</AppText>
			</View>

			<TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end' }} onPress={props.handleSubmitPress}>
				{props.noRight ? null : <HeaderText bold>{props.rightTitle ? props.rightTitle : 'SAVE'}</HeaderText>}
			</TouchableOpacity>
		</View>
	);
}
