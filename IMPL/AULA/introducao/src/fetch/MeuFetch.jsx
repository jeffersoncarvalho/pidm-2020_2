import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class MeuFetch extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        fetch('https://reactnative.dev/movies.json')
            .then(
                (response) => {
                   return response.json()
                }
            )
            .then(
                (responseJson) => {

                    this.setState({
                        isLoading: false,
                        dataSource: responseJson.movies,
                    });
                }
            )
            .catch(
                (error) => console.log(error)
            )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({ id }, index) => id + index}
                />
            </View>
        );


    }

}
