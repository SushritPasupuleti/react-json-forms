import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	media: {
		height: 140,
	},
}));

export default function FormCard() {
	const classes = useStyles();

	const [formData, setformData] = useState({
		name: 'batman',
		skills: [
			{
				name: 'ninjutsu',
				profeciency: 'expert',
			},
			{
				name: 'jujutsu',
				profeciency: 'expert',
			},
		],
	});

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					React JSON Form
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Editing the form contents generates JSON
				</Typography>
				<br />
				{/* <TextField id="outlined-basic" label="Outlined" variant="outlined" value={formData?.name} onChange={(e) => setformData({formData.name: })}/> */}
				<TextField
					id="outlined-name"
					label="Name"
					InputLabelProps={{
						shrink: true,
					}}
					variant="outlined"
					value={formData?.name}
				/>
				<br />
				<Divider style={{ marginTop: '1rem', marginRight: '1rem' }} />
				<br />
				{formData?.skills.map(({ name, profeciency }) => 
					<TextField
                        style={{ marginTop: '1rem' }}
                        key={name}
						id="outlined-name"
						label="Name"
						InputLabelProps={{
							shrink: true,
						}}
						variant="outlined"
						value={name}
					/>
				)}
			</CardContent>
			<CardActions></CardActions>
		</Card>
	);
}
