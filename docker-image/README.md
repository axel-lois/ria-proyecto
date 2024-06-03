## Para correr la app: 
```bash
./up.sh
```

## Para detener la app: 
```
./shut-down.sh
```

## Endpoints

La url base es: localhost:8080/api/v1.

Luego, a eso podemos agregarle los siguientes parametros:

- GET /civilizations
- GET /civilization/<id: string>

Example call: `/api/v1/civilization/bizantines`


- GET /units
- GET /unit/<id: string>

Example call: `/api/v1/unit/berserk`


- GET /structures
- GET /structure/<id: string>

Example call: `/api/v1/structure/29`


- GET /technologies
- GET /technology/<id: string>

Example call: `/api/v1/technology/gold_mining`

---

## Entidades

Las entidades que podemos usar

### Civilization
---
Model describing a civilization in AOE2.
Parameters:

- **_id**: Integer denoting the unique ID for that civilization
- **name**: Name of the civilization (e.g Britons)
- **expansion**: Expansion the civilization was introduced
- **army_type**: Predominant army type of the civilization (e.g Archers, or Infantry)
- **unique_unit**: Unique unit of the civilization
- **unique_tech**: Unique Technology of the Civilization
- **team_bonus**: Bonuses for the Team the civilization belongs to
- **civilization_bonus**: Bonuses of the civilization

### Technology
---
Model describing a Technology in AOE2.
Parameters:

- **_id**: Integer denoting the unique ID for that technology
- **name**: Name of the technology
- **expansion**: Expansion the technology was introduced
- **age**: Age in which the technology can be developed
- **develops_in**: structure in which the technology is developed
- **cost**: Cost of the technology (JSON object)
- **build_time**: Build time in seconds
- **applies_to**: Units or civilizations the technology applies to
- **description**: Description of the technology

### Unit
---
Model describing a Unit in AOE2.
Parameters:

- **_id**: Integer denoting the unique ID for that unit
- **name**: Name of the unit
- **description**: Description of the unit
- **expansion**: Expansion the unit was introduced
- **age**: Age in which the unit can be produced
- **created_in**: Structure the unit is created in
- **cost**: Cost of the unit (JSON object)
- **build_time**: Build time in seconds
- **reload_time**: Reload time (Float)
- **attack_delay**: Attack delay when you give the order to attack (Float)
- **movement_rate**: Movement Rate
- **line_of_sight**: Line of sight of the unit
- **hit_points**: Hit points (health) of the unit
- **range**: Range of the unit. There can be a minimum and maximum range in the format (min-max)
- **attack**: Attack of the unit
- **armor**: Armor of the unit divided into melee/pierce
- **attack_bonus**: Attack bonuses of the unit
- **armor_bonus**: Armor bonuses of the unit
- **search_radius**: Search Radius of the unit
- **accuracy**: Attack accuracy (percentage) of the unit
- **blast_radius**: Attack blast radius

### Structure
---
Model describing a Structure in AOE2.
Parameters:

- **_id**: Integer denoting the unique ID for that structure
- **name**: Name of the structure
- **expansion**: Expansion the structure was introduced
- **age**: Age in which the structure can be created
- **cost**: Cost of the structure (JSON object)
- **build_time**: Build time in seconds
- **hit_points**:  Hit points (health) of the structure
- **line_of_sight**: Line of sight of the structure
- **armor**:  Armor of the structure divided into melee/pierce
- **range**: Range of the structure. There can be a minimum and maximum range in the format (min-max)
- **reload_time**: Reload time in seconds between projectiles
- **attack**: Attack of the structure
- **special**: Some other properties of the structure / garrison
