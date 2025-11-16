🎨 HueShift

Interactive Color-Shifting Rectangle Using JavaScript

HueShift is a simple yet visually engaging JavaScript project where a rectangle changes color based on the mouse position. Moving the cursor to the left side gradually shifts the rectangle toward red, while moving to the right side shifts it toward blue. The intensity increases the farther your cursor moves from the center.

⸻

🚀 Features
	•	Real-time mouse tracking inside the rectangle
	•	Smooth color interpolation from red ↔ blue
	•	Color intensity based on distance from center
	•	Resets to white when the mouse leaves
	•	Uses only vanilla JavaScript

⸻

🧠 How It Works
	1.	Detect the exact mouse position inside the rectangle.
	2.	Calculate the rectangle’s midpoint.
	3.	Measure the distance between cursor position and the center.
	4.	Convert that distance into a value from 0 → 255.
	5.	Apply that value to the red or blue channel based on cursor side.

⸻

🔑 Key JS Methods Used

📌 getBoundingClientRect()

This method returns the size and position of an element relative to the viewport.
Here it’s used to figure out:
	•	the left boundary of the box
	•	the width of the box
	•	the center (width / 2)

This lets the script calculate exactly where the mouse is inside the rectangle.

⸻

📌 Math.abs()

Returns the absolute (positive) value of a number.
Used here to measure the distance between the mouse position and the box center without negative values.

Example:
If the cursor is left of center → distance might be -40
Math.abs(-40) → 40
This makes distance calculations accurate regardless of direction.