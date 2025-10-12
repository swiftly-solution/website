---
title: CSoundOpvarSetPointEntity
---

```csharp
public interface CSoundOpvarSetPointEntity : CSoundOpvarSetPointBase, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSoundOpvarSetPointBase>, ISchemaClass<CSoundOpvarSetPointEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AutoDisable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L20)

```csharp
ref bool AutoDisable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DistanceMapMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L28)

```csharp
ref float DistanceMapMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceMapMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L26)

```csharp
ref float DistanceMapMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L24)

```csharp
ref float DistanceMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L22)

```csharp
ref float DistanceMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DynamicEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L50)

```csharp
ref CHandle<CEntityInstance> DynamicEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

### DynamicEntityName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L52)

```csharp
string DynamicEntityName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DynamicMaximumOcclusion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L48)

```csharp
ref float DynamicMaximumOcclusion { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DynamicProxyPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L46)

```csharp
ref Vector DynamicProxyPoint { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### OcclusionMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L34)

```csharp
ref float OcclusionMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OcclusionMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L32)

```csharp
ref float OcclusionMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OcclusionRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L30)

```csharp
ref float OcclusionRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OnEnter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L16)

```csharp
CEntityIOOutput OnEnter { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnExit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L18)

```csharp
CEntityIOOutput OnExit { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### PathingDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L60)

```csharp
ref Vector PathingDirection { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### PathingDistanceNormFactor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L54)

```csharp
ref float PathingDistanceNormFactor { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PathingListenerPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L58)

```csharp
ref Vector PathingListenerPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### PathingSourceIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L62)

```csharp
ref int PathingSourceIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PathingSourcePos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L56)

```csharp
ref Vector PathingSourcePos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Reloading

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L40)

```csharp
ref bool Reloading { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetValueOnDisable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L38)

```csharp
ref bool SetValueOnDisable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SimulationMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L42)

```csharp
ref int SimulationMode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ValSetOnDisable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L36)

```csharp
ref float ValSetOnDisable { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VisibilitySamples

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L44)

```csharp
ref int VisibilitySamples { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

