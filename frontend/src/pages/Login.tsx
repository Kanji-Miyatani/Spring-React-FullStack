import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { teal } from "@mui/material/colors";
import axios from "axios";
import { ChangeEvent,MouseEvent, useState } from "react";
export const Login = () => {
  const [loginModel,setLoginModel] = useState<LoginModel>({password:"",userName:""});
  const onPasswordChange= (e: ChangeEvent<HTMLInputElement>)=>{
    setLoginModel({
       ...loginModel,
       password : e.target.value,
    });
  }
  const onUsernameChange= (e: ChangeEvent<HTMLInputElement>)=>{
    setLoginModel({
       ...loginModel,
       userName : e.target.value,
    });
  }

  const onLoginButtonClick = (e: MouseEvent<HTMLElement>)=>{
    axios.post('/api/login',loginModel)
          .then();
  }

  return (
    <Grid>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          height: "70vh",
          width: "280px",
          m: "20px auto"
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start" //多分、デフォルトflex-startなので省略できる。
          alignItems="center"
        >
          <Avatar sx={{ bgcolor: teal[400] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant={"h5"} sx={{ m: "30px" }}>
            Sign In
          </Typography>
        </Grid>
        <TextField 
          onChange={onUsernameChange}
          label="Username" 
          variant="standard" 
          fullWidth required />
        <TextField
         onChange={onPasswordChange}
          type="password"
          label="Password"
          variant="standard"
          fullWidth
          required
        />
        {/* ラベルとチェックボックス */}
        <FormControlLabel
          labelPlacement="end"
          label="パスワードを忘れました"
          control={<Checkbox name="checkboxA" size="small" color="primary" />}
        />
        <Box mt={3}>
          <Button 
            onClick={}
            type="submit" 
            color="primary" 
            variant="contained" 
            fullWidth>
            サインイン
          </Button>

          <Typography variant="caption">
            <Link href="#">パスワードを忘れましたか？</Link>
          </Typography>
          <Typography variant="caption" display="block">
            アカウントを持っていますか？
            <Link href="#">アカウントを作成</Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};
export default Login