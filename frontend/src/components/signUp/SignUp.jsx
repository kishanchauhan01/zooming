import {
	Box,
	Card,
	CardActions,
	CardContent,
	Button,
	TextField,
	FormControl,
	IconButton,
	InputAdornment,
	Typography,
	InputLabel,
	OutlinedInput,
	Avatar,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SignUpCard() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		fullname: '',
		email: '',
		username: '',
		password: '',
	});
	const [profilePic, setProfilePic] = useState(null); // new state for image
	const [previewUrl, setPreviewUrl] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (e) => {
		const fileList = e.target?.files;
		if (!fileList || fileList.length === 0) {
			console.warn('No file selected.');
			return;
		}

		const file = fileList[0];
		setProfilePic(file);
		setPreviewUrl(URL.createObjectURL(file));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = new FormData();
		data.append('fullname', formData.fullname);
		data.append('email', formData.email);
		data.append('username', formData.username);
		data.append('password', formData.password);

		if (profilePic) {
			const cleanName = profilePic.name.replace(/[^\w.]/gi, '_');
			const safeFile = new File([profilePic], cleanName, {
				type: profilePic.type,
			});
			data.append('profilePic', safeFile); // name must match backend key
		}

		try {
			const response = await axios.post(
				'http://localhost:8080/api/v1/user/register',
				data,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);
			console.log('Server response:', response.data);
		} catch (error) {
			console.error(
				'Error submitting form:',
				error.response?.data || error.message
			);
		}
	};

	useEffect(() => {
		return () => {
			if (previewUrl) {
				URL.revokeObjectURL(previewUrl);
			}
		};
	}, [previewUrl]);

	return (
		<Box
			sx={{
				width: 350,
				margin: 'auto',
				marginTop: 10,
				boxShadow: 3,
				borderRadius: 2,
			}}
		>
			<Card variant="outlined">
				<form onSubmit={handleSubmit} encType="multipart/form-data">
					<CardContent>
						<Typography variant="h6" sx={{ mb: 2 }}>
							SignUp
						</Typography>

						<TextField
							label="Fullname"
							variant="outlined"
							fullWidth
							margin="normal"
							name="fullname"
							autoComplete="fullname"
							value={formData.fullname}
							onChange={handleChange}
							required
						/>
						<TextField
							label="Email"
							variant="outlined"
							fullWidth
							margin="normal"
							name="email"
							autoComplete="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<TextField
							label="Username"
							variant="outlined"
							fullWidth
							margin="normal"
							name="username"
							autoComplete="username"
							value={formData.username}
							onChange={handleChange}
							required
						/>

						<FormControl sx={{ mb: 2 }} fullWidth variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								Password
							</InputLabel>
							<OutlinedInput
								onChange={handleChange}
								name="password"
								id="outlined-adornment-password"
								type={showPassword ? 'text' : 'password'}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label={
												showPassword ? 'hide password' : 'show password'
											}
											onClick={() => setShowPassword((show) => !show)}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>

						{/* Profile Picture Upload Field */}
						<Button
							variant="outlined"
							component="label"
							fullWidth
							sx={{ mb: 1 }}
						>
							Upload Profile Picture
							<input
								type="file"
								accept="image/*"
								hidden
								onChange={handleFileChange}
							/>
						</Button>
						{profilePic && (
							<>
								<Typography variant="body2" sx={{ mb: 1 }}>
									Selected: {profilePic.name}
								</Typography>
								<Avatar
									alt="Preview"
									src={previewUrl}
									sx={{ width: 64, height: 64, mb: 2 }}
								/>
							</>
						)}
					</CardContent>

					<CardActions sx={{ justifyContent: 'center', mb: 1 }}>
						<Button variant="contained" color="primary" type="submit" fullWidth>
							SignUp
						</Button>
					</CardActions>
				</form>
			</Card>
		</Box>
	);
}
