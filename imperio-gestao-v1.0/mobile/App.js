import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, TextInput, Alert} from 'react-native';

const styles = {
  container: {flex:1, backgroundColor: '#000', padding:16},
  header: {fontFamily: 'monospace', color:'#fff', fontSize:22, marginBottom:12},
  tableGrid: {flexDirection:'row', flexWrap:'wrap'},
  tableCard: {width:'30%', margin:6, padding:12, backgroundColor:'#111', borderRadius:6},
  tableNumber: {fontFamily:'monospace', color:'#fff', fontSize:20},
  tableTotal: {fontFamily:'monospace', color:'#ccc', marginTop:8}
};

const sampleTables = Array.from({length:12}).map((_,i)=>({id:i+1, number:i+1, status: 'Livre', total:0}));

export default function App(){
  const [tables, setTables] = useState(sampleTables);
  const [selected, setSelected] = useState(null);

  useEffect(()=>{},[]);

  const openTable = (t)=>{
    const updated = tables.map(x=> x.id===t.id ? {...x, status:'Ocupada', total: 1200} : x);
    setTables(updated);
    setSelected(t.id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>IMPÉRIO GESTÃO</Text>
      <View style={styles.tableGrid}>
        {tables.map(t=> (
          <TouchableOpacity key={t.id} style={styles.tableCard} onPress={()=>openTable(t)}>
            <Text style={styles.tableNumber}>Mesa {t.number}</Text>
            <Text style={styles.tableTotal}>{t.status}</Text>
            <Text style={styles.tableTotal}>{t.total.toLocaleString()} CVE</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
