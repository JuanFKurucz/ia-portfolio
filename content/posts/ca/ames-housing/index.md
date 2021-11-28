---
pathPrefix: '/'
path: "/ca/ames-housing"
cover: "./header.png"
date: "2021-11-28"
title: "Caso de estudio: Ames Housing"
published: true
tags: ['Caso de estudio','Random Forest','Boosting','PCA','Outliers']
---

En este caso de estudio se analizará el conjunto de datos Ames, Iowa, el cual se presenta como alternativa al conjunto de datos de Boston Housing Data. En este conjunto de datos vamos a poder obtener información sobre ventas de propiedades residenciales.

# 1. Entendimiento de los datos

## 1.1 Investigación de datos

Para trabajar en este caso de estudio se obtuvo el conjunto de datos de [Kaggle - House Prices - Advanced Regression Techniques](https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data).

Este conjunto de datos esta dividido en [train.csv](https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data?select=train.csv) y [test.csv](https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data?select=test.csv). A su vez se nos proporciona una descripción de los datos.

En esta descripción podemos ver que contamos con 81 columnas, las cuales son:

 - Id: identificador de la casa vendida
 - SalesPrice: 
    - Descripción: valor de venta de la casa en dolares, esta es nuestra variable objetivo a predecir.
    - Tipo: real
    - Rango: 
        - Minimo: 34900
        - Maximo: 755000
        - Promedio: 180921.195890
 - MSSubClass: 
    - Descripción: identifica el tipo de construction
    - Tipo: categorico
    - Rango: 
        - 20: 1-STORY 1946 & NEWER ALL STYLES
        - 30: 1-STORY 1945 & OLDER
        - 40: 1-STORY W/FINISHED ATTIC ALL AGES
        - 45: 1-1/2 STORY - UNFINISHED ALL AGES
        - 50: 1-1/2 STORY FINISHED ALL AGES
        - 60: 2-STORY 1946 & NEWER
        - 70: 2-STORY 1945 & OLDER
        - 75: 2-1/2 STORY ALL AGES
        - 80: SPLIT OR MULTI-LEVEL
        - 85: SPLIT FOYER
        - 90: DUPLEX - ALL STYLES AND AGES
        - 120: 1-STORY PUD (Planned Unit Development) - 1946 & NEWER
        - 150: 1-1/2 STORY PUD - ALL AGES
        - 160: 2-STORY PUD - 1946 & NEWER
        - 180: PUD - MULTILEVEL - INCL SPLIT LEV/FOYER
        - 190: 2 FAMILY CONVERSION - ALL STYLES AND AGES
 - MSZoning: 
    - Descripción: identifica la categoría de la zona
    - Tipo: categorico
    - Rango:
        - A: Agriculture
        - C: Commercial
        - FV: Floating Village Residential
        - I: Industrial
        - RH: Residential High Density
        - RL: Residential Low Density
        - RP: Residential Low Density Park 
        - RM: Residential Medium Density
 - LotFrontage: 
    - Descripción: Distancia de calle en pies que está conectada con la propiedad.
    - Tipo: real
    - Rango: 
        - Minimo: 21
        - Maximo: 313
        - Promedio: 70.049958
 - LotArea: 
    - Descripción: Tamaño del lote en pies cuadrados
    - Tipo: entero
    - Rango: 
        - Minimo: 1300
        - Maximo: 215245
        - Promedio: 10516.828082
 - Street: 
    - Descripción: identifica el tipo de calle que se tiene para acceder a la propiedad.
    - Tipo: categorico
    - Rango:
        - Grvl: Gravel
        - Pave: Paved
 - Alley:
    - Descripción: identifica el tipo de callejón que se tiene para acceder a la propiedad.
    - Tipo: categorico
    - Rango:
        - Grvl: Gravel
        - Pave: Paved
        - NA: No alley access
 - LotShape:
    - Descripción: identifica el tipo estructura del lote
    - Tipo: categorico
    - Rango:
        - Reg: Regular
        - IR1: Slightly irregular
        - IR2: Moderately Irregular
        - IR3: Irregular
 - LandContour: Flatness of the property
    - Descripción: identifica el relieve del lote
    - Tipo: categorico
    - Rango:
        - Lvl: Near Flat/Level
        - Bnk: Banked - Quick and significant rise from street grade to building
        - HLS: Hillside - Significant slope from side to side
        - Low: Depression
 - Utilities: Type of utilities available
    - Descripción: identifica que tipo de utilidades están disponibles
    - Tipo: categorico
    - Rango:
        - AllPub: All public Utilities (E,G,W,& S)
        - NoSewr: Electricity, Gas, and Water (Septic Tank)
        - NoSeWa: Electricity and Gas Only
        - ELO: Electricity only
 - LotConfig: Lot configuration
    - Descripción: identifica la configuración del lote
    - Tipo: categorico
    - Rango:
        - Inside: Inside lot
        - Corner: Corner lot
        - CulDSac: Cul-de-sac
        - FR2: Frontage on 2 sides of property
        - FR3: Frontage on 3 sides of property
 - LandSlope: Slope of property
    - Descripción: identifica la pendiente del lote
    - Tipo: categorico
    - Rango:
        - Gtl: Gentle slope
        - Mod: Moderate Slope
        - Sev: Severe Slope
 - Neighborhood: 
    - Descripción: identifica el barrio en el que se encuentra el lote
    - Tipo: categorico
    - Rango: 
        - Blmngtn: Bloomington Heights
        - Blueste: Bluestem
        - BrDale: Briardale
        - BrkSide: Brookside
        - ClearCr: Clear Creek
        - CollgCr: College Creek
        - Crawfor: Crawford
        - Edwards: Edwards
        - Gilbert: Gilbert
        - IDOTRR: Iowa DOT and Rail Road
        - MeadowV: Meadow Village
        - Mitchel: Mitchell
        - Names: North Ames
        - NoRidge: Northridge
        - NPkVill: Northpark Villa
        - NridgHt: Northridge Heights
        - NWAmes: Northwest Ames
        - OldTown: Old Town
        - SWISU: South & West of Iowa State University
        - Sawyer: Sawyer
        - SawyerW: Sawyer West
        - Somerst: Somerset
        - StoneBr: Stone Brook
        - Timber: Timberland
        - Veenker: Veenker
 - Condition1: Proximity to main road or railroad
    - Descripción: proximidad a calle principales o ruta
    - Tipo: categorico
    - Rango: 
        - Artery: Adjacent to arterial street
        - Feedr: Adjacent to feeder street
        - Norm: Normal
        - RRNn: Within 200' of North-South Railroad
        - RRAn: Adjacent to North-South Railroad
        - PosN: Near positive off-site feature--park, greenbelt, etc.
        - PosA: Adjacent to postive off-site feature
        - RRNe: Within 200' of East-West Railroad
        - RRAe: Adjacent to East-West Railroad
 - Condition2: Proximity to main road or railroad (if a second is present)
    - Descripción: proximidad a una segunda calle principales o ruta
    - Tipo: categorico
    - Rango: 
        - Artery: Adjacent to arterial street
        - Feedr: Adjacent to feeder street
        - Norm: Normal
        - RRNn: Within 200' of North-South Railroad
        - RRAn: Adjacent to North-South Railroad
        - PosN: Near positive off-site feature--park, greenbelt, etc.
        - PosA: Adjacent to postive off-site feature
        - RRNe: Within 200' of East-West Railroad
        - RRAe: Adjacent to East-West Railroad
 - BldgType: Type of dwelling
    - Descripción: tipo de vivienda
    - Tipo: categorico
    - Rango: 
        - 1Fam: Single-family Detached
        - 2FmCon: Two-family Conversion; originally built as one-family dwelling
        - Duplx: Duplex
        - TwnhsE: Townhouse End Unit
        - TwnhsI: Townhouse Inside Unit
 - HouseStyle: Style of dwelling
    - Descripción: estilo de vivienda
    - Tipo: categorico
    - Rango: 
        - 1Story: One story
        - 1.5Fin: One and one-half story: 2nd level finished
        - 1.5Unf: One and one-half story: 2nd level unfinished
        - 2Story: Two story
        - 2.5Fin: Two and one-half story: 2nd level finished
        - 2.5Unf: Two and one-half story: 2nd level unfinished
        - SFoyer: Split Foyer
        - SLvl: Split Level
 - OverallQual: Overall material and finish quality
    - Descripción: calidad general del material y finalización
    - Tipo: categorico
    - Rango: 
        - 10: Very Excellent
        - 9: Excellent
        - 8: Very Good
        - 7: Good
        - 6: Above Average
        - 5: Average
        - 4: Below Average
        - 3: Fair
        - 2: Poor
        - 1: Very Poor
 - OverallCond: Overall condition rating
    - Descripcion: condicion general del lote
    - Tipo: categorico
    - Rango: 
        - 10: Very Excellent
        - 9: Excellent
        - 8: Very Good
        - 7: Good
        - 6: Above Average
        - 5: Average
        - 4: Below Average
        - 3: Fair
        - 2: Poor
        - 1: Very Poor
 - YearBuilt: Original construction date
    - Descripción: año de construcción
    - Tipo: entero
    - Rango: 
        - Minimo: 1872
        - Maximo: 2010
        - Promedio: 1971.267808
 - YearRemodAdd: Remodel date
    - Descripción: año de remodelación, mismo año que construcción si no se ha remodelado
    - Tipo: entero
    - Rango: 
        - Minimo: 1950
        - Maximo: 2010
        - Promedio: 1984.865753
 - RoofStyle: Type of roof
    - Descripción: tipo de techo
    - Tipo: categorico
    - Rango: 
        - Flat: Flat
        - Gable: Gable
        - Gambrel: Gabrel (Barn)
        - Hip: Hip
        - Mansard: Mansard
        - Shed: Shed
 - RoofMatl: Roof material
    - Descripción: material del techo
    - Tipo: categorico
    - Rango: 
        - ClyTile: Clay or Tile
        - CompShg: Standard (Composite) Shingle
        - Membran: Membrane
        - Metal: Metal
        - Roll: Roll
        - Tar&Grv: Gravel & Tar
        - WdShake: Wood Shakes
        - WdShngl: Wood Shingles
 - Exterior1st: Exterior covering on house
    - Descripción: material de cubrimiento de exteriores de la propiedad
    - Tipo: categorico
    - Rango: 
        - AsbShng: Asbestos Shingles
        - AsphShn: Asphalt Shingles
        - BrkComm: Brick Common
        - BrkFace: Brick Face
        - CBlock: Cinder Block
        - CemntBd: Cement Board
        - HdBoard: Hard Board
        - ImStucc: Imitation Stucco
        - MetalSd: Metal Siding
        - Other: Other
        - Plywood: Plywood
        - PreCast: PreCast
        - Stone: Stone
        - Stucco: Stucco
        - VinylSd: Vinyl Siding
        - Wd Sdng: Wood Siding
        - WdShing: Wood Shingles
 - Exterior2nd: Exterior covering on house (if more than one material)
    - Descripción: material de cubrimiento de exteriores de la propiedad si existe un segundo
    - Tipo: categorico
    - Rango: 
        - AsbShng: Asbestos Shingles
        - AsphShn: Asphalt Shingles
        - BrkComm: Brick Common
        - BrkFace: Brick Face
        - CBlock: Cinder Block
        - CemntBd: Cement Board
        - HdBoard: Hard Board
        - ImStucc: Imitation Stucco
        - MetalSd: Metal Siding
        - Other: Other
        - Plywood: Plywood
        - PreCast: PreCast
        - Stone: Stone
        - Stucco: Stucco
        - VinylSd: Vinyl Siding
        - Wd Sdng: Wood Siding
        - WdShing: Wood Shingles
 - MasVnrType: Masonry veneer type
    - Descripción: tipo de revestimiento de mampostería
    - Tipo: categorico
    - Rango: 
        - BrkCmn: Brick Common
        - BrkFace: Brick Face
        - CBlock: Cinder Block
        - None: None
        - Stone: Stone
 - MasVnrArea: Masonry veneer area in square feet
    - Descripción: área del revestimiento de mampostería en pies cuadrados
    - Tipo: real
    - Rango: 
        - Minimo: 0
        - Maximo: 1600
        - Promedio: 103.685262
 - ExterQual: Exterior material quality
    - Descripción: evalúa la calidad de los materiales usados en el exterior
    - Tipo: categorico
    - Rango: 
        - Ex: Excellent
        - Gd: Good
        - TA: Average/Typical
        - Fa: Fair
        - Po: Poor
 - ExterCond: Present condition of the material on the exterior
    - Descripción: evalúa la condición presente de los materiales usados en el exterior
    - Tipo: categorico
    - Rango: 
        - Ex: Excellent
        - Gd: Good
        - TA: Average/Typical
        - Fa: Fair
        - Po: Poor
 - Foundation: Type of foundation
    - Descripción: tipo de cimiento
    - Tipo: categorico
    - Rango: 
        - BrkTil: Brick & Tile
        - CBlock: Cinder Block
        - PConc: Poured Contrete
        - Slab: Slab
        - Stone: Stone
        - Wood: Wood
 - BsmtQual: Height of the basement
    - Descripción: evalúa la altura del sótano
    - Tipo: categorico
    - Rango: 
        - Ex: Excellent (100+ inches)
        - Gd: Good (90-99 inches)
        - TA: Typical (80-89 inches)
        - Fa: Fair (70-79 inches)
        - Po: Poor (<70 inches
        - NA: No Basement
 - BsmtCond: General condition of the basement
    - Descripción: evalúa la condición general del sótano
    - Tipo: categorico
    - Rango: 
        - Ex: Excellent
        - Gd: Good
        - TA: Typical - slight dampness allowed
        - Fa: Fair - dampness or some cracking or settling
        - Po: Poor - Severe cracking, settling, or wetness
        - NA: No Basement
 - BsmtExposure: Walkout or garden level basement walls
    - Descripción: nivel o altura de las paredes del sótano contra la calle
    - Tipo: categorico
    - Rango: 
        - Gd: Good Exposure
        - Av: Average Exposure (split levels or foyers typically score average or above)
        - Mn: Mimimum Exposure
        - No: No Exposure
        - NA: No Basement
 - BsmtFinType1: Quality of basement finished area
    - Descripción: calidad del área finalizada del sótano.
    - Tipo: categorico
    - Rango: 
        - GLQ: Good Living Quarters
        - ALQ: Average Living Quarters
        - BLQ: Below Average Living Quarters
        - Rec: Average Rec Room
        - LwQ: Low Quality
        - Unf: Unfinshed
        - NA: No Basement
 - BsmtFinSF1: Type 1 finished square feet
    - Descripción: área del sótano finalizado en pies cuadrados
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 5644
        - Promedio: 443.639726
 - BsmtFinType2: Quality of second finished area (if present)
    - Descripción: calidad del área finalizada del sotano si existe otro
    - Tipo: categorico
    - Rango: 
        - GLQ: Good Living Quarters
        - ALQ: Average Living Quarters
        - BLQ: Below Average Living Quarters
        - Rec: Average Rec Room
        - LwQ: Low Quality
        - Unf: Unfinished
        - NA: No Basement
 - BsmtFinSF2: Type 2 finished square feet
    - Descripción: área del segundo sótano finalizado en pies cuadrados
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 1474
        - Promedio: 46.549315
 - BsmtUnfSF: Unfinished square feet of basement area
    - Descripción: área no finalizada del sótano en pies cuadrados
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 2336.000000
        - Promedio: 567.240411
 - TotalBsmtSF: Total square feet of basement area
    - Descripción: área total del sótano en pies cuadrados
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 6110.000000
        - Promedio: 1057.429452
 - Heating: Type of heating
    - Descripción: tipo de calefacción
    - Tipo: categorico
    - Rango: 
        - Floor: Floor Furnace
        - GasA: Gas forced warm air furnace
        - GasW: Gas hot water or steam heat
        - Grav: Gravity furnace: 
        - OthW: Hot water or steam heat other than gas
        - Wall: Wall furnace
 - HeatingQC: Heating quality and condition
    - Descripción: calidad y condición de calefacción
    - Tipo: categorico
    - Rango: 
        - Ex: Excellent
        - Gd: Good
        - TA: Average/Typical
        - Fa: Fair
        - Po: Poor
 - CentralAir: Central air conditioning
    - Descripción: existencia de aire acondicionado central
    - Tipo: binominal
    - Rango: 
        - N: No
        - Y: Yes
 - Electrical: Electrical system
    - Descripción: tipo de sistema eléctrico
    - Tipo: categorico
    - Rango: 
        - SBrkr: Standard Circuit Breakers & Romex
        - FuseA: Fuse Box over 60 AMP and all Romex wiring (Average)
        - FuseF: 60 AMP Fuse Box and mostly Romex wiring (Fair)
        - FuseP: 60 AMP Fuse Box and mostly knob & tube wiring (poor)
        - Mix: Mixed
 - 1stFlrSF: First Floor square feet
    - Descripcion: pies cuadrados del primer piso
    - Tipo: entero
    - Rango: 
        - Minimo: 334.000000
        - Maximo: 4692.000000
        - Promedio: 1162.626712
 - 2ndFlrSF: Second floor square feet
    - Descripcion: pies cuadrados del segundo piso
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 2065.000000
        - Promedio: 346.992466
 - LowQualFinSF: Low quality finished square feet (all floors)
    - Descripcion: Pies cuadrados de finalizado de baja calidad
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 572.000000
        - Promedio: 5.844521
 - GrLivArea: Above grade (ground) living area square feet
    - Descripción: área en pies cuadrados de la superficie habilitable por encima del nivel del suelo
    - Tipo: entero
    - Rango: 
        - Minimo: 334.000000
        - Maximo: 5642.000000
        - Promedio: 1515.463699
 - BsmtFullBath: Basement full bathrooms
    - Descripción: baños completos en el sótano
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 3.000000
        - Promedio: 0.425342
 - BsmtHalfBath: Basement half bathrooms
    - Descripción: baños parciales en el sótano
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 2.000000
        - Promedio: 0.057534
 - FullBath: Full bathrooms above grade
    - Descripción: baños completos por encima del nivel del suelo
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 3.000000
        - Promedio: 1.565068
 - HalfBath: Half baths above grade
    - Descripción: baños parciales por encima del nivel del suelo
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 2.000000
        - Promedio: 0.382877
 - Bedroom: Number of bedrooms above basement level
    - Descripción: cuartos por encima del nivel del suelo
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 8.000000
        - Promedio: 2.866438
 - Kitchen: Number of kitchens
    - Descripción: número de cocinas
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 3.000000
        - Promedio: 1.046575
 - KitchenQual: Kitchen quality
    - Descripción: calidad de la cocina
    - Tipo: categorico
    - Rango: 
        - Ex: Excellent
        - Gd: Good
        - TA: Typical/Average
        - Fa: Fair
        - Po: Poor
 - TotRmsAbvGrd: Total rooms above grade (does not include bathrooms)
    - Descripción: total de habitaciones por encima del suelo sin incluir baños
    - Tipo: entero
    - Rango: 
        - Minimo: 2
        - Maximo: 14.000000
        - Promedio: 6.517808
 - Functional: Home functionality rating
    - Descripción: evaluación de la funcionalidad de la casa
    - Tipo: categorico
    - Rango: 
        - Typ: Typical Functionality
        - Min1: Minor Deductions 1
        - Min2: Minor Deductions 2
        - Mod: Moderate Deductions
        - Maj1: Major Deductions 1
        - Maj2: Major Deductions 2
        - Sev: Severely Damaged
        - Sal: Salvage only
 - Fireplaces: Number of fireplaces
    - Descripción: número de chimeneas
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 3.000000
        - Promedio: 0.613014
 - FireplaceQu: Fireplace quality
    - Descripción: calidad de chimenea
    - Tipo: categorico
    - Rango: 
        - Ex: Excellent - Exceptional Masonry Fireplace
        - Gd: Good - Masonry Fireplace in main level
        - TA: Average - Prefabricated Fireplace in main living area or Masonry Fireplace in basement
        - Fa: Fair - Prefabricated Fireplace in basement
        - Po: Poor - Ben Franklin Stove
        - NA: No Fireplace
 - GarageType: Garage location
    - Descripción: tipo de estacionamiento
    - Tipo: categorico
    - Rango: 
        - 2Types: More than one type of garage
        - Attchd: Attached to home
        - Basment: Basement Garage
        - BuiltIn: Built-In (Garage part of house - typically has room above garage)
        - CarPort: Car Port
        - Detchd: Detached from home
        - NA: No Garage
 - GarageYrBlt: Year garage was built
    - Descripción: año en el que se construyó el estacionamiento
    - Tipo: entero
    - Rango: 
        - Minimo: 1900
        - Maximo: 2010
        - Promedio: 1978.506164
 - GarageFinish: Interior finish of the garage
    - Descripción: tipo de finalización interior del estacionamiento
    - Tipo: categorico
    - Rango: 
        - Fin: Finished
        - RFn: Rough Finished
        - Unf: Unfinished
        - NA: No Garage
 - GarageCars: Size of garage in car capacity
    - Descripción: cantidad de autos que entran en el estacionamiento
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 4.000000
        - Promedio: 1.767123
 - GarageArea: Size of garage in square feet
    - Descripción: tamaño del estacionamiento en pies cuadrados
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 1418.000000
        - Promedio: 472.980137
 - GarageQual: Garage quality
    - Descripción: calidad del garaje
    - Tipo: categorico
    - Rango: 
        - Ex: Excellent
        - Gd: Good
        - TA: Typical/Average
        - Fa: Fair
        - Po: Poor
        - NA: No Garage
 - GarageCond: Garage condition
    - Descripcion: condicion del garaje
    - Tipo: categorico
    - Rango: 
        - Ex: Excellent
        - Gd: Good
        - TA: Typical/Average
        - Fa: Fair
        - Po: Poor
        - NA: No Garage
 - PavedDrive: Paved driveway
    - Descripción: camino pavimentado
    - Tipo: categorico
    - Rango: 
        - Y: Paved 
        - P: Partial Pavement
        - N: Dirt/Gravel
 - WoodDeckSF: Wood deck area in square feet
    - Descripción: área de cubierta de madera en pies cuadrados
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 857.000000
        - Promedio: 94.244521
 - OpenPorchSF: Open porch area in square feet
    - Descripción: área del porche abierto en pies cuadrados
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 547.000000
        - Promedio: 46.660274
 - EnclosedPorch: Enclosed porch area in square feet
    - Descripción: área del porche adjunto en pies cuadrados
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 552.000000
        - Promedio: 21.954110
 - 3SsnPorch: Three season porch area in square feet
    - Descripción: área del porche de tres estaciones en pies cuadrados
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 508.000000
        - Promedio: 3.409589
 - ScreenPorch: Screen porch area in square feet
    - Descripción: área en pies cuadrados del porche de entrada
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 480.000000
        - Promedio: 15.060959
 - PoolArea: Pool area in square feet
    - Descripción: área en pies cuadrados de la piscina
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 738.000000
        - Promedio: 2.758904
 - PoolQC: Pool quality
    - Descripción: calidad de la piscina
    - Tipo: categorico
    - Rango: 
        - Ex: Excellent
        - Gd: Good
        - TA: Average/Typical
        - Fa: Fair
        - NA: No Pool
 - Fence: Fence quality
    - Descripción: calidad del cercado
    - Tipo: categorico
    - Rango: 
        - GdPrv: Good Privacy
        - MnPrv: Minimum Privacy
        - GdWo: Good Wood
        - MnWw: Minimum Wood/Wire
        - NA: No Fence
 - MiscFeature: Miscellaneous feature not covered in other categories
    - Descripción: otro tipo de características de la propiedad no cubierta en otros atributos
    - Tipo: categorico
    - Rango: 
        - Elev: Elevator
        - Gar2: 2nd Garage (if not described in garage section)
        - Othr: Other
        - Shed: Shed (over 100 SF)
        - TenC: Tennis Court
        - NA: None
 - MiscVal: $Value of miscellaneous feature
    - Descripción: valor de la característica
    - Tipo: entero
    - Rango: 
        - Minimo: 0
        - Maximo: 15500.000000
        - Promedio: 43.489041
 - MoSold: Month Sold
    - Descripción: mes de la venta
    - Tipo: categorico
    - Rango: 
        - Minimo: 1.000000
        - Maximo: 12.000000
        - Promedio: 6.321918
 - YrSold: Year Sold
    - Descripción: año de la venta
    - Tipo: entero
    - Rango: 
        - Minimo: 2006.000000
        - Maximo: 2010.000000
        - Promedio: 2007.815753
 - SaleType: Type of sale
    - Descripción: tipo de la venta
    - Tipo: categorico
    - Rango: 
        - WD : Warranty Deed - Conventional
        - CWD: Warranty Deed - Cash
        - VWD: Warranty Deed - VA Loan
        - New: Home just constructed and sold
        - COD: Court Officer Deed/Estate
        - Con: Contract 15% Down payment regular terms
        - ConLw: Contract Low Down payment and low interest
        - ConLI: Contract Low Interest
        - ConLD: Contract Low Down
        - Oth: Other
 - SaleCondition: Condition of sale
    - Descripcion: condicion de la venta
    - Tipo: categorico
    - Rango: 
        - Normal: Normal Sale
        - Abnorml: Abnormal Sale -  trade, foreclosure, short sale
        - AdjLand: Adjoining Land Purchase
        - Alloca: Allocation - two linked properties with separate deeds, typically condo with a garage unit
        - Family: Sale between family members
        - Partial: Home was not completed when last assessed (associated with New Homes)

Como se puede ver se tienen 47 atributos categóricos según la definición de los datos y 33 numéricos.

## 3.2 Tratamiento de datos

## Atributos relacionados a la variable objetivo

En una primera pasada podemos darnos cuenta de que los atributos `SaleCondition`, `SaleType`, `YrSold`, `MoSold`, son atributos que solo se conocerán cuando la casa sea vendida, por lo cual vamos a decidir excluirlos de nuestro modelo ya que a priori no sabemos cuando vamos a poder vender una casa y no deberíamos de necesitar de esto para evaluar su precio. A su vez ignoraremos el atributo `Id` ya que no aporta valor y utilizaremos el atributo `SalePrice` como nuestra variable objetivo.

## Tipos de atributos

De los atributos categóricos, se identificó que `OverallQual`, `OverallCond`, `ExterQual`, `ExterCond`, `BsmtQual`, `BsmtCond`, `BsmtExposure`, `HeatingQC`, `KitchenQual`, `FireplaceQu`, `GarageQual`, `GarageCond`, `PoolQC` pueden ser tratados como ordinales ya que todos ellos tratan de una escala de puntaje de calidades de mayor a menor. El resto de los atributos categóricos identifican clases separadas entre sí por lo cual serán tratados por el LabelEncoder

Para los atributos numéricos estos se tratan como tales.

## Missing values and noisy label

Se identificaron filas con valores faltantes, para las cuales se asignaron las correspondientes etiquetas, y en los casos de no poder encontrar a qué etiqueta pertenecía se decidió eliminar estas filas (ya que eran unas pocas). Estos atributos principalmente transformaron valores `None` a sus correspondientes etiquetas `NA` de diferentes atributos, los cuales fueron `Alley`, `MasVnrType`, `BsmtQual`, `BsmtExposure`, `BsmtFinType1`, `BsmtFinType2`, `FireplaceQu`, `GarageType`, `GarageFinish`, `GarageQual`, `GarageCond`, `GarageYrBlt`, `PoolQC`, `Fence`, `MiscFeature`

![missing_values](https://github.com/JuanFKurucz/ia-portfolio/raw/main/content/posts/ca/ames-housing/assets/missing_values.png)

También se identificó ruido en los datos, algunas etiquetas del conjunto de datos parecían tener typos (principalmente en el atributo `Exterior2nd`) donde se encontraron:
- `Wd Shng` => `Wd Sdng`
- `CmentBd` => `CemntBd`
- `Brk Cmn` => `BrkComm`

Para el resto de valores faltantes se asignó el promedio.

Por último, se identificó que hay instancias de atributos faltantes por lo cual nuestros LabelEncoders o OrdinalEncoders no pueden aprender directamente de los datos por lo que tendremos que proporcionar los posibles valores a mano para asegurar una funcionalidad al momento de predicción.

## Valores atipicos

Viendo la distribución de los diferentes atributos se identificaron diferentes valores atípicos, con lo cual se deduce un 10% de contaminación, se aplicó el método de `IsolationForest` para poder remover valores atípicos del conjunto de datos.

## Feature engineering

Se aplicó PCA al conjunto de datos para sacar nuevos atributos que pudiesen explicar el conjunto de datos en una menor cantidad de estos.

Se buscó que el resultado sea un `0.999999` explicativo, lo cual hizo que se obtengan 21 atributos, de los 75 que teníamos.

De todas formas se comparó entrenar con este nuevo conjunto de atributos y con los 75 actuales.

## Split de datos

Dado que se tienen alrededor de 1400 filas, esto parece suficiente para poder entrenar con un conjunto de train y val para que sea suficientemente rápido, ya que utilizar cross validation podría hacer que el proceso de entrenamiento sea bastante lento.

Por lo cual se separó el dataset de entrenamiento en dos, se tomo el 80% para training y el 20% para validation.

# 4. Algoritmos y modelos

Se plantearon diferentes modelos para resolver la problemática, los cuales fueron:
- GradientBoostingRegressor
- RandomForestRegressor
- VotingRegressor: conformado por
    - GradientBoostingRegressor
    - RandomForestRegressor

Para entrenarlos se aplicó una grid search para algunos de ellos así mejorar el entrenamiento y llegar a un mejor resultado.

## 4.4 Métricas y comparaciones

Se utilizó `mean absolute error` como criterio de evaluación en todos los modelos


| Modelo      | Mejor resultado atributos normales | Mejor resultado atributos PCA |
| ----------- | ----------- | ----------- |
| GradientBoostingRegressor      |   0.9144971369560132     |   0.8507757354832373     |
| RandomForestRegressor   |   0.8700203490126724      |    0.7865576844284019    |
| VotingRegressor   |    0.8932260482305077     |    0.8371666479865071    |

# 5. Conclusiones

Como se puede ver entrenar con todos los atributos dio mejores resultados, puede que de todas formas sea más óptimo con más datos utilizar los seleccionados por PCA, ya que los entrenamientos serán más rápidos.

De todas formas, se pudo ver que la selección de este caso de estudio fue interesante ya que se encontraron muchos detalles a reparar en el conjunto de datos y a analizar de cómo resolver.


[Enlace al notebook completo](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ca/ames-housing/AMES.ipynb)


