---
title: CFilterEnemy
---

```csharp
public interface CFilterEnemy : CBaseFilter, CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CBaseFilter>, ISchemaClass<CFilterEnemy>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### EnemyName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFilterEnemy.cs#L18)

```csharp
string EnemyName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaxSquadmatesPerEnemy

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFilterEnemy.cs#L24)

```csharp
ref int MaxSquadmatesPerEnemy { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OuterRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFilterEnemy.cs#L22)

```csharp
ref float OuterRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlayerName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFilterEnemy.cs#L26)

```csharp
string PlayerName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Radius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFilterEnemy.cs#L20)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

