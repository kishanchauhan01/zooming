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
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

export default function LoginCard() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Login data:', formData);
		// Add your login API call here
	};

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
				<form onSubmit={handleSubmit}>
					<CardContent>
						<Typography variant="h6" sx={{ mb: 2 }}>
							Login
						</Typography>

						<TextField
							label="Username or Email"
							variant="outlined"
							fullWidth
							margin="normal"
							name="username"
							autoComplete="username"
							value={formData.username}
							onChange={handleChange}
							required
						/>

						<FormControl sx={{ mb: 1 }} fullWidth variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								Password
							</InputLabel>
							<OutlinedInput
							onChange={handleChange}
							name='password'
								id="outlined-adornment-password"
								type={showPassword ? 'text' : 'password'}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label={
												showPassword
													? 'hide the password'
													: 'display the password'
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
					</CardContent>

					<CardActions sx={{ justifyContent: 'center', mb: 1 }}>
						<Button variant="contained" color="primary" type="submit" fullWidth>
							Login
						</Button>
					</CardActions>
				</form>
			</Card>
		</Box>
	);
}
