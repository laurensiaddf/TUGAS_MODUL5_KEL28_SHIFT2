import React, { useState, useContext } from 'react';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';

const themes = { 
    light:{ 
        id: 1,
        foreground: '#000000',
        background: "#eeeeee",
    },
    dark:{
        id: 2,
        foreground: "#ffffff",
        background: "#222222",
    },
};

const ThemeContext = React.createContext(themes.light);

export default function ContextUse(){
    const [theme, setTheme] = useState(themes.dark);
    const changeTheme = () =>{
        if (theme.id === themes.light.id){
            setTheme(themes.dark);
        }
        else{
            setTheme(themes.light);
        }
    };
    return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div style={{ background: theme.background, color: theme.foreground, textAlign:'center', fontFamily:'Roboto', fontSize:'24px', height:'83vh'}}>
            <Card style={{display:'inline-block', margin:'30px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
                <img style={{maxWidth:'200px', border:'solid #696969', borderRadius:'100%', margin:'2px', boxShadow:'1px 1px 1px'}} src='https://i.ibb.co/Gskw0Dn/Laurensia.jpg'></img>
                <p style={{margin:'2px'}}>Laurensia Divina Dewi Fortuna</p>
                <p style={{margin:'2px'}}>21120117120010</p>
            </Card>
            <Card style={{display:'inline-block', margin:'30px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
                <img style={{maxWidth:'200px', border:'solid #696969', borderRadius:'100%', margin:'2px', boxShadow:'1px 1px 1px'}} src='https://i.ibb.co/KWnJPm2/Mahani.jpg'></img>
                <p style={{margin:'2px'}}>Mahani Halwa</p>
                <p style={{margin:'2px'}}>21120117140016</p>
            </Card>
        <div>
            <ThemedButton />
        </div>
        </div>
    </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const { theme, changeTheme } = useContext(ThemeContext);
    return (
    <Button style={{ background: theme.background,
        color:theme.foreground }}
        onClick={changeTheme}>
            CHANGE THEME
    </Button>
    );
}