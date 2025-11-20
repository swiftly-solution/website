---
title: CInfoWorldLayer
---

```csharp
public interface CInfoWorldLayer : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CInfoWorldLayer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CreateAsChildSpawnGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L28)

```csharp
ref bool CreateAsChildSpawnGroup { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EntitiesSpawned

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L26)

```csharp
ref bool EntitiesSpawned { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LayerName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L22)

```csharp
string LayerName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LayerSpawnGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L30)

```csharp
ref uint LayerSpawnGroup { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### OutputOnEntitiesSpawned

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L18)

```csharp
CEntityIOOutput OutputOnEntitiesSpawned { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### WorldLayerVisible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L24)

```csharp
ref bool WorldLayerVisible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WorldName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L20)

```csharp
string WorldName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### EntitiesSpawnedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L35)

```csharp
void EntitiesSpawnedUpdated()
```

### LayerNameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L33)

```csharp
void LayerNameUpdated()
```

### WorldLayerVisibleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L34)

```csharp
void WorldLayerVisibleUpdated()
```

### WorldNameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoWorldLayer.cs#L32)

```csharp
void WorldNameUpdated()
```

