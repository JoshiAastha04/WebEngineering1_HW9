// ============================================================
// Part 1: Date Display
// ============================================================

// Create a Date object for today's date
const today = new Date();

// Extract month (0-based in JS, so add 1), day, and full year
const month = today.getMonth() + 1;
const day = today.getDate();
const year = today.getFullYear();

// Pad month and day with a leading zero if they are single digits
const formattedMonth = month < 10 ? "0" + month : String(month);
const formattedDay = day < 10 ? "0" + day : String(day);

// Build the final date string in MM/DD/YYYY format
const dateMessage = "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

// Inject the date string into the DOM
document.getElementById("dateOutput").textContent = dateMessage;


// ============================================================
// Part 2: Number Conversion and Validation
// ============================================================

// Four starting string values (no arrays/loops — separate variables)
const strA = "84";
const strB = "3.14";
const strC = "vibes";
const strD = "250";

// --- Convert each value using Number() ---
const numA = Number(strA);
const numB = Number(strB);
const numC = Number(strC);
const numD = Number(strD);

// --- Check isNaN and isInteger for each ---
const nanA = Number.isNaN(numA);
const nanB = Number.isNaN(numB);
const nanC = Number.isNaN(numC);
const nanD = Number.isNaN(numD);

const intA = Number.isInteger(numA);
const intB = Number.isInteger(numB);
const intC = Number.isInteger(numC);
const intD = Number.isInteger(numD);

// --- Part 4: if/else conditional messages for each value ---

// Conditional 1: check if strC converted to NaN
let msgC;
if (nanC === true) {
    msgC = "⚠️ This value is not a valid number.";
} else {
    msgC = "✅ This value is a valid number.";
}

// Conditional 2: check if strA result is an integer
let msgA;
if (intA === true) {
    msgA = "✅ This value is an integer.";
} else {
    msgA = "This value is not an integer.";
}

// Build one HTML string combining all four results
const conversionHTML =
    "<p><strong>Original:</strong> '" + strA + "' → " +
    "<strong>Converted:</strong> " + numA + " → " +
    "<strong>isNaN:</strong> " + nanA + " → " +
    "<strong>isInteger:</strong> " + intA + "<br>" +
    "<em>" + msgA + "</em></p>" +

    "<p><strong>Original:</strong> '" + strB + "' → " +
    "<strong>Converted:</strong> " + numB + " → " +
    "<strong>isNaN:</strong> " + nanB + " → " +
    "<strong>isInteger:</strong> " + intB + "</p>" +

    "<p><strong>Original:</strong> '" + strC + "' → " +
    "<strong>Converted:</strong> " + numC + " → " +
    "<strong>isNaN:</strong> " + nanC + " → " +
    "<strong>isInteger:</strong> " + intC + "<br>" +
    "<em>" + msgC + "</em></p>" +

    "<p><strong>Original:</strong> '" + strD + "' → " +
    "<strong>Converted:</strong> " + numD + " → " +
    "<strong>isNaN:</strong> " + nanD + " → " +
    "<strong>isInteger:</strong> " + intD + "</p>";

// Display all conversion results in the DOM
document.getElementById("numberConversionOutput").innerHTML = conversionHTML;


// ============================================================
// Part 3: Math and Number Formatting  (Option A: price calculator)
// ============================================================

// Define item price, tax rate, and shipping cost
const itemPrice = 49.99;
const taxRate = 0.0875;     // 8.75% tax
const shippingCost = 5.95;

// Calculate subtotal (addition), tax amount (multiplication), and total (addition)
const subtotal = itemPrice + shippingCost;
const taxAmount = itemPrice * taxRate;
const totalCost = subtotal + taxAmount;

// Format the total with toFixed(2) to get a clean dollar amount
const formattedTotal = totalCost.toFixed(2);

// Also use toLocaleString to display itemPrice in a locale-friendly way
const formattedItemPrice = itemPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
});

// Part 4 conditional 3: check if total is over a threshold
let budgetMsg;
if (totalCost > 60) {
    budgetMsg = "⚠️ Total is over $60 — might want to look for a deal!";
} else {
    budgetMsg = "✅ Total is within budget!";
}

// Build the math output HTML
const mathHTML =
    "<p><strong>Item Price:</strong> " + formattedItemPrice + "</p>" +
    "<p><strong>Tax Rate:</strong> " + (taxRate * 100) + "%</p>" +
    "<p><strong>Shipping Cost:</strong> $" + shippingCost.toFixed(2) + "</p>" +
    "<hr>" +
    "<p><strong>Subtotal (item + shipping):</strong> $" + subtotal.toFixed(2) + "</p>" +
    "<p><strong>Tax Amount:</strong> $" + taxAmount.toFixed(2) + "</p>" +
    "<p><strong>Total Cost:</strong> $" + formattedTotal + "</p>" +
    "<p><em>" + budgetMsg + "</em></p>";

// Inject math results into the DOM
document.getElementById("mathOutput").innerHTML = mathHTML;


// ============================================================
// Extra Credit: typeof Inspector
// ============================================================

// Five values of different types
const val1 = 42;
const val2 = "hello";
const val3 = true;
const val4 = undefined;
const val5 = 3.14;

// Build typeof output HTML
const typeofHTML =
    "<p><code>42</code> → typeof: <strong>" + typeof val1 + "</strong></p>" +
    "<p><code>'hello'</code> → typeof: <strong>" + typeof val2 + "</strong></p>" +
    "<p><code>true</code> → typeof: <strong>" + typeof val3 + "</strong></p>" +
    "<p><code>undefined</code> → typeof: <strong>" + typeof val4 + "</strong></p>" +
    "<p><code>3.14</code> → typeof: <strong>" + typeof val5 + "</strong></p>";

// Display typeof results
document.getElementById("typeofOutput").innerHTML = typeofHTML;