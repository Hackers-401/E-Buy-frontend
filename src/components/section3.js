import React from 'react'
import '../style/section3.css'






export default function Section3() {
    return (
        <div>
            <html>
	<head>
		<meta charset="UTF-8" />
		<title>Advice</title>
		<link rel="stylesheet" href="advice.css" type="text/css" />
	</head>
	<body>
		<div class="app">
			<p id="advice">Advice will appear here.</p>
			<button onclick="displayAdvice()">Advise Me!</button>
			<div class="mode-select">
				<label for="modes">Choose a mode: </label>

				<select id="modes" onchange="showMode()">
					<option value="plain">Plain</option>
					<option value="clouds">Clouds</option>
					<option value="stars">Stars</option>
				</select>
			</div>
		</div>
		<script src="src/components/advice.js"></script>
	</body>
</html>
            
            
        </div>
    )
}