---
title: CInfoSpawnGroupLoadUnload
---

```csharp
public interface CInfoSpawnGroupLoadUnload : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CInfoSpawnGroupLoadUnload>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AutoActivate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L34)

```csharp
ref bool AutoActivate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FixedSpawnGroupName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L30)

```csharp
string FixedSpawnGroupName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LandmarkName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L28)

```csharp
string LandmarkName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OnSpawnGroupLoadFinished

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L18)

```csharp
CEntityIOOutput OnSpawnGroupLoadFinished { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnSpawnGroupLoadStarted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L16)

```csharp
CEntityIOOutput OnSpawnGroupLoadStarted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnSpawnGroupUnloadFinished

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L22)

```csharp
CEntityIOOutput OnSpawnGroupUnloadFinished { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnSpawnGroupUnloadStarted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L20)

```csharp
CEntityIOOutput OnSpawnGroupUnloadStarted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### QueueActiveSpawnGroupChange

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L38)

```csharp
ref bool QueueActiveSpawnGroupChange { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### QueueFinishLoading

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L40)

```csharp
ref bool QueueFinishLoading { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SpawnGroupFilterName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L26)

```csharp
string SpawnGroupFilterName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SpawnGroupName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L24)

```csharp
string SpawnGroupName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TimeoutInterval

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L32)

```csharp
ref float TimeoutInterval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UnloadingStarted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoSpawnGroupLoadUnload.cs#L36)

```csharp
ref bool UnloadingStarted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

