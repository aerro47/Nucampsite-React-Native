import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { ScrollView, Text } from 'react-native';


class ContactComponent extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return(
            <ScrollView>
                <Card
                    title= 'Contact Information'
                    wrapperStyle={{margin: 20}}
                >
                    <Text style={{marginBottom: 10}}>
                        1 Nucamp Way {"\n"}
                        Seattle, WA 98001 {"\n"}
                        U.S.A.
                    </Text>
                    <Text>
                        Phone: 1-206-555-1234 {"\n"}
                        Email: campsites@nucamp.co
                    </Text>
                </Card>
            </ScrollView>
        )
    }
}

export default ContactComponent;