---
title: CInfoWorldLayer
---

```csharp
public interface CInfoWorldLayer : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CInfoWorldLayer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**CreateAsChildSpawnGroup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L26)

```csharp
ref bool CreateAsChildSpawnGroup { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**EntitiesSpawned** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L24)

```csharp
ref bool EntitiesSpawned { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LayerName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L20)

```csharp
ref CUtlSymbolLarge LayerName { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**LayerSpawnGroup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L28)

```csharp
ref uint LayerSpawnGroup { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**OutputOnEntitiesSpawned** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L16)

```csharp
CEntityIOOutput OutputOnEntitiesSpawned { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**WorldLayerVisible** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L22)

```csharp
ref bool WorldLayerVisible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**WorldName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L18)

```csharp
ref CUtlSymbolLarge WorldName { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

## Methods

**EntitiesSpawnedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L33)

```csharp
void EntitiesSpawnedUpdated()
```

**LayerNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L31)

```csharp
void LayerNameUpdated()
```

**WorldLayerVisibleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L32)

```csharp
void WorldLayerVisibleUpdated()
```

**WorldNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L30)

```csharp
void WorldNameUpdated()
```

