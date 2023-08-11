function getBotResponse(input) {
  //rock paper scissors
  if (input == "I want to buy meat") {
    return "We have various types and sizes of meat products including beef, goat meat, chicken, lamb and fish such as Nile perch and Tilapia. Whatkind of meat would you like to purchase?";
  } else if (input == "Goat meat") {
    return "We have readily available Goat meat including full goat, ribs, goat leg, goat shanks andmany more please visit our home page to view more details including purchase methods. Thankyou for choosing polite Meat Suppliers.";
  } else if (input == "Chicken") {
    return "We have readily available Chicken meat including full chicken, drumsticks, wings, chicken and many more please visit our home page to view more details including purchase methods. Thankyou for choosing polite Meat Suppliers";
  }
else if (input == "Beef") {
  return "We have readily available Beef meat including Steak, ribs, liver and many more please visit our home page to view more details including purchase methods. Thankyou for choosing polite Meat Suppliers";
}
else if (input == "Fish") {
  return "We have readily availableFish including Tilapia Nile perch also known locally as mbuta and many more please visit our home page to view more details including purchase methods. Thankyou for choosing polite Meat Suppliers";
}
else if (input == "Lamb") {
  return "We have readily available Lamb meat including full lamb, lamb chops and many more please visit our home page to view more details including purchase methods. Thankyou for choosing polite Meat Suppliers";
}
  // Simple responses
  if (input == "Hello") {
    return "Hello there! Thank you for contacting Polite Suppliers. How may I assist you?";
  } 
  if (input == "Hello ") {
    return "Hello there! Thank you for contacting Polite Suppliers. How may I assist you?";
  }
if (input == "Hello?") {
    return "Hello there! Thank you for contacting Polite Suppliers. How may I assist you?";
  }
if (input == "hello?") {
    return "Hello there! Thank you for contacting Polite Suppliers. How may I assist you?";
  }
if (input == "hello") {
    return "Hello there! Thank you for contacting Polite Suppliers. How may I assist you?";
  }
  else if (input == "goodbye") {
    return " Thank you for contacting Polite Suppliers. For more details on inquiries please contact our live support team on 0707079702 or visit any of our social media platforms. Thank you for choosing Polite Meat Suppliers, your number one trusted suppliers of quality halal meat.";
  } else {
    return "Thank you for contacting Polite Meat Suppliers. For more details on inquiries please contact our live support team on 0707079702 or visit any of our social media platforms. Thank you for choosing Polite Meat Suppliers, your number one trusted suppliers of quality halal meat.";
  }
}