# Features
- [ ] Export a building list
- [ ] Show input/output quantities
- [ ] Round up building quantities to 2 digits
- [ ] Support byproducts
- [ ] Allow other forms of optimization (e.g. power, buildings, etc)
- [ ] Allow selection of miner and logistic tech level
- [ ] Power analysis
- [ ] Building diagram
- [ ] User preferences (remember my tech level, buildings, alt recipes, etc) based on profile

# Bugs
- [ ] calculate, then change qty, then recalculate: sometimes base buildings get weird sum

# UX
- [ ] Improve it

# Clean Code
- [ ] fill out README more
- [ ] wrap each part in a class to ensure Number() on getter, etc
	- [ ] or just process them on input
- [ ] Clean up data (e.g. capital letters, weird field names)
- [ ] model is just...messy
	- [x] no function should be default
	- [x] add helpers like getAlternateRecipes
	- [ ] digest data into clean property names, use those in all code
- [ ] Use cleaner cache for getAllParts?
- [ ] Tests?
