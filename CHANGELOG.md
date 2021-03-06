# 0.7.0
- Added output qty / min (except for target buildings)

# 0.6.0
- BuildingList is now a table
- Cleaned out debug text
- It is now possible to remove a part from PartList

# 0.5.2
- [x] Fixed a very dumb error

# 0.5.1
- [x] Fixed merge conflict

# 0.5.0
- [x] Added building type to UI (needs some UX love)

# 0.4.0
- [x] Added CSS and SASS loaders
- [x] Moved component styles to their own scss files
- [x] Removed debug textarea
- [x] Inverted CHANGELOG.md
- [x] Added basic README info
- [x] replaced non-standed variable "Recipe" with "recipe" across the board

# 0.3.0
- [x] Allow selection of alternate recipes
- [x] Optimize for base resource usage, based on alternate recipes
- [x] Implemented alt recipe ranking based on <https://www.reddit.com/r/SatisfactoryGame/comments/mnwugx/update_4_alternate_recipe_indepth_analysis/>
- [x] Reformatted TODO.md

# 0.2.0 - Reactification
- [x] Replaced vanilla components with React
- [x] Added global store using zustand and immer
- [x] Top-level quantities are now changeable
- [x] getPart() now uses a cached map, not a find() every time
- [x] switched to semver to make npm happy

# 0.1.1a - added LICENSE.md

# 0.1.0a - basic functionality, proof-of-concept
- [x] do the actual math for quantities
- [x] flatten the tree and merge same recipes
- [x] show output
- [x] bug fixes:
  - [x] invalid results if you calculate, then change part, then calculate again

