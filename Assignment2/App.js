// // App.js
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Counter from './Counter';

// const App = () => {
//   return (
//     <View style={styles.appContainer}>
//       <Counter />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
// });
// export default App;

// App.js
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Modal, TextInput, SectionList } from 'react-native';

const App = () => {
  // Hardcoded list of 10 contacts
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', number: '1234567890', group: 'Friends' },
    { id: 2, name: 'Jane Smith', number: '0987654321', group: 'Family' },
    { id: 3, name: 'Mike Johnson', number: '5551234567', group: 'Work' },
    { id: 4, name: 'Sarah Williams', number: '4449876543', group: 'Friends' },
    { id: 5, name: 'David Brown', number: '7775551234', group: 'Family' },
    { id: 6, name: 'Emily Davis', number: '2223334444', group: 'Work' },
    { id: 7, name: 'Robert Wilson', number: '8889990000', group: 'Friends' },
    { id: 8, name: 'Lisa Taylor', number: '1112223333', group: 'Family' },
    { id: 9, name: 'Thomas Moore', number: '6667778888', group: 'Work' },
    { id: 10, name: 'Jennifer Lee', number: '9990001111', group: 'Friends' },
  ]);

  const [searchText, setSearchText] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Filter contacts based on search text (name or number)
  const filteredContacts = contacts
    .filter(contact => 
      contact.name.toLowerCase().includes(searchText.toLowerCase()) || 
      contact.number.includes(searchText)
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  // Group contacts by their group for SectionList
  const groupedContacts = filteredContacts.reduce((acc, contact) => {
    const group = contact.group;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(contact);
    return acc;
  }, {});

  const sectionData = Object.keys(groupedContacts).map(group => ({
    title: group,
    data: groupedContacts[group]
  }));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Food App Contacts</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or number"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      
      <SectionList
        sections={sectionData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => {
              setSelectedContact(item);
              setModalVisible(true);
            }}
          >
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactNumber}>{item.number}</Text>
            <Text style={[styles.contactGroup, { backgroundColor: getGroupColor(item.group) }]}>
              {item.group}
            </Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
          </View>
        )}
      />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedContact && (
              <>
                <Text style={styles.modalTitle}>Contact Details</Text>
                <Text style={styles.modalText}>Name: {selectedContact.name}</Text>
                <Text style={styles.modalText}>Number: {selectedContact.number}</Text>
                <Text style={styles.modalText}>Group: {selectedContact.group}</Text>
                
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// Helper function to get color based on group
const getGroupColor = (group) => {
  switch(group) {
    case 'Family': return '#FFC107';
    case 'Friends': return '#4CAF50';
    case 'Work': return '#2196F3';
    default: return '#9E9E9E';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#FF5722',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  sectionHeader: {
    backgroundColor: '#FF5722',
    padding: 10,
  },
  sectionHeaderText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contactItem: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  contactGroup: {
    alignSelf: 'flex-start',
    marginTop: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    fontSize: 12,
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;