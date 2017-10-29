import React from 'react';
import Card from 'material-ui/Card/Card';
import CardMedia from 'material-ui/Card/CardMedia';
import CardText from 'material-ui/Card/CardContent';

class Home extends React.Component{
    render() {
        return(
            <Card>
            <CardMedia>
              <img src="http://lorempixel.com/600/337/nature/" />
            </CardMedia>
            <CardText>
            Welcome to Kartik Chem
            </CardText>
            </Card>
        )
    }
}

export default Home;