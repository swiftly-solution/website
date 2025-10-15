---
title: CSoundOpvarSetPointEntity
---

```csharp
public interface CSoundOpvarSetPointEntity : CSoundOpvarSetPointBase, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSoundOpvarSetPointBase>, ISchemaClass<CSoundOpvarSetPointEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AutoDisable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L21)

```csharp
ref bool AutoDisable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DistanceMapMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L29)

```csharp
ref float DistanceMapMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceMapMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L27)

```csharp
ref float DistanceMapMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L25)

```csharp
ref float DistanceMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L23)

```csharp
ref float DistanceMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DynamicEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L51)

```csharp
ref CHandle<CEntityInstance> DynamicEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

### DynamicEntityName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L53)

```csharp
string DynamicEntityName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DynamicMaximumOcclusion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L49)

```csharp
ref float DynamicMaximumOcclusion { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DynamicProxyPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L47)

```csharp
ref Vector DynamicProxyPoint { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### OcclusionMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L35)

```csharp
ref float OcclusionMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OcclusionMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L33)

```csharp
ref float OcclusionMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OcclusionRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L31)

```csharp
ref float OcclusionRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OnEnter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L17)

```csharp
CEntityIOOutput OnEnter { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnExit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L19)

```csharp
CEntityIOOutput OnExit { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### PathingDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L61)

```csharp
ref Vector PathingDirection { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### PathingDistanceNormFactor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L55)

```csharp
ref float PathingDistanceNormFactor { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PathingListenerPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L59)

```csharp
ref Vector PathingListenerPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### PathingSourceIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L63)

```csharp
ref int PathingSourceIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PathingSourcePos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L57)

```csharp
ref Vector PathingSourcePos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Reloading

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L41)

```csharp
ref bool Reloading { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetValueOnDisable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L39)

```csharp
ref bool SetValueOnDisable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SimulationMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L43)

```csharp
ref int SimulationMode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ValSetOnDisable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L37)

```csharp
ref float ValSetOnDisable { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VisibilitySamples

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L45)

```csharp
ref int VisibilitySamples { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

