import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function App() {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [randomItem, setRandomItem] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const BASE_URL = "http://192.168.0.129:5000";

  const fetchMenu = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${BASE_URL}/menu`);
      setMenuItems(response.data.data);
      setRandomItem(null);
    } catch (err: any) {
      setError("Failed to fetch menu.");
    } finally {
      setLoading(false);
    }
  };

  const fetchRandom = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${BASE_URL}/menu/random`);
      setRandomItem(response.data.data);
      setMenuItems([]);
    } catch (err: any) {
      setError("Failed to fetch random item.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>☕ Coffee Shop Menu</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={fetchMenu}>
          <Text style={styles.buttonText}>Full Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={fetchRandom}>
          <Text style={styles.buttonText}>Surprise Me</Text>
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator size="large" color="#6f4e37" />}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <ScrollView style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>Category: {item.category}</Text>
            <Text>Price: Rs. {item.price}</Text>
            <Text>In Stock: {item.inStock ? "✅" : "❌"}</Text>
          </View>
        ))}

        {randomItem && (
          <View style={styles.card}>
            <Text style={styles.itemName}>{randomItem.name}</Text>
            <Text>Category: {randomItem.category}</Text>
            <Text>Price: Rs. {randomItem.price}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6f4e37",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#8B4513",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  menuContainer: {
    marginTop: 10,
  },
  card: {
    backgroundColor: "#f5ebe0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4a2c2a",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
});
