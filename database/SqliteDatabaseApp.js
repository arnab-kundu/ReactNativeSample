import { Text, View } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const DatabaseApp = () => {
    const db = SQLite.openDatabase({ name: 'mydatabase.db', location: 'default' });
    // Now you can use `db` to execute SQL queries. 

    // CREATE TABLE
    db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)',
            [],
            (_, results) => {
                console.log('Table created successfully');
            },
            (_, error) => {
                console.error('Error creating table:', error);
            });
    });

    // INSERT QUERY
    db.transaction((tx) => {
        tx.executeSql('INSERT INTO users (name, age) VALUES (?, ?)', ['John Doe', 25],
            (_, results) => {
                console.log('Insert successful');
            },
            (_, error) => {
                console.error('Error inserting data:', error);
            });
    });


    // SELECT QUERY
    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM users',
            [],
            (_, results) => {
                const len = results.rows.length;
                console.log('Query successful');
                for (let i = 0; i < len; i++) {
                    const row = results.rows.item(i);
                    console.log(`User ID: ${row.id}, Name: ${row.name}, Age: ${row.age}`);
                }
            },
            (_, error) => {
                console.error('Error selecting data:', error);
            });

    });

    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={{ fontStyle: 'italic', fontWeight: 'bold', alignSelf: 'center', verticalAlign: 'middle' }}>SqliteDatabase: Check logs for more</Text>
        </View>
    )
}

export default DatabaseApp;