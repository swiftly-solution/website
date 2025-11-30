---
title: CSoundOpvarSetPointEntity
---

# Interface CSoundOpvarSetPointEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSoundOpvarSetPointEntity : CSoundOpvarSetPointBase, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSoundOpvarSetPointBase>, ISchemaClass<CSoundOpvarSetPointEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CSoundOpvarSetPointBase](/docs/api/schemadefinitions/csoundopvarsetpointbase)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSoundOpvarSetPointBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSoundOpvarSetPointEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AutoDisable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L22)

```csharp
ref bool AutoDisable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DistanceMapMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L30)

```csharp
ref float DistanceMapMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceMapMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L28)

```csharp
ref float DistanceMapMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L26)

```csharp
ref float DistanceMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L24)

```csharp
ref float DistanceMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DynamicEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L52)

```csharp
ref CHandle<CEntityInstance> DynamicEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CEntityInstance](/docs/api/schemadefinitions/centityinstance)>

### DynamicEntityName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L54)

```csharp
string DynamicEntityName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DynamicMaximumOcclusion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L50)

```csharp
ref float DynamicMaximumOcclusion { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DynamicProxyPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L48)

```csharp
ref Vector DynamicProxyPoint { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### OcclusionMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L36)

```csharp
ref float OcclusionMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OcclusionMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L34)

```csharp
ref float OcclusionMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OcclusionRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L32)

```csharp
ref float OcclusionRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OnEnter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L18)

```csharp
CEntityIOOutput OnEnter { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnExit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L20)

```csharp
CEntityIOOutput OnExit { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### PathingDirection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L62)

```csharp
ref Vector PathingDirection { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### PathingDistanceNormFactor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L56)

```csharp
ref float PathingDistanceNormFactor { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PathingListenerPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L60)

```csharp
ref Vector PathingListenerPos { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### PathingSourceIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L64)

```csharp
ref int PathingSourceIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PathingSourcePos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L58)

```csharp
ref Vector PathingSourcePos { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Reloading

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L42)

```csharp
ref bool Reloading { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetValueOnDisable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L40)

```csharp
ref bool SetValueOnDisable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SimulationMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L44)

```csharp
ref int SimulationMode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ValSetOnDisable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L38)

```csharp
ref float ValSetOnDisable { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VisibilitySamples

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointEntity.cs#L46)

```csharp
ref int VisibilitySamples { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

