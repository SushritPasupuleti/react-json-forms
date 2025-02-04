import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import InputAdornment from "@material-ui/core/InputAdornment";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  media: {
    height: 140,
  },
}));

export default function FormCard() {
  const classes = useStyles();

  const [formData, setformData] = useState({
    name: "batman",
    skills: [
      {
        id: 123123,
        name: "ninjutsu",
        profeciency: "expert",
      },
      {
        id: 245456456,
        name: "jujutsu",
        profeciency: "expert",
      },
    ],
  });

  const setSkillName = (e, i) => {
    console.log(e.target.value, i);

    let _formData = formData;
    console.log("current: ", formData);
    // console.log(_formData.skills[i].name, e.target.value);
    // _formData.skills[i].name = e.target.value;
    _formData = {
      ..._formData,
      skills: _formData.skills.map((obj) =>
        obj.id === i ? { ...obj, name: e.target.value } : obj
      ),
    };

    console.log("updated: ", _formData);
    setformData(_formData);
  };

  const addSkill = () => {
    const _formData = formData;
    console.log("current: ", formData);
    _formData.skills.push({ name: "", profeciency: "", id: Date.now() });

    console.log("updated: ", _formData);
    setformData({ ..._formData });
  };

  const removeSkill = (e, i) => {
    let _formData = formData;
    console.log("current: ", formData, i);
    // _formData.skills.splice(i, 1)
    _formData = {
      ..._formData,
      skills: _formData.skills.filter((obj) => obj.id !== i),
    };

    console.log("updated: ", _formData);
    setformData({ ..._formData });
  };

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
        <Divider
          style={{
            marginTop: "1rem",
            marginRight: "1rem",
            marginBottom: "1rem",
          }}
        />
        <Typography variant="body2" color="textSecondary" component="p">
          Skills
        </Typography>
        {formData.skills.map(({ name, profeciency, id }, i) => (
          <TextField
            style={{ marginTop: "1rem" }}
            key={id}
            id="outlined-name"
            label="Name"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            defaultValue={name}
            onChange={(e) => setSkillName(e, id)}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={(e) => removeSkill(e, id)}
                >
                  <CloseIcon></CloseIcon>
                </InputAdornment>
              ),
            }}
          />
        ))}
        <br />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={() => addSkill()}
        >
          Add Skill
        </Button>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
