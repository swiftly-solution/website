---
title: C_INIT_PositionPlaceOnGround
---

```csharp
public interface C_INIT_PositionPlaceOnGround : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_PositionPlaceOnGround>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Attribute

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L31)

```csharp
ParticleAttributeIndex_t Attribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### CollisionGroupName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L21)

```csharp
string CollisionGroupName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### IgnoreCP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L45)

```csharp
ref int IgnoreCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IncludeWater

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L27)

```csharp
ref bool IncludeWater { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxTraceLength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L19)

```csharp
CPerParticleFloatInput MaxTraceLength { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### Offset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L17)

```csharp
CPerParticleFloatInput Offset { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### OffsetByRadiusFactor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L41)

```csharp
ref float OffsetByRadiusFactor { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OffsetonColOnly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L39)

```csharp
ref bool OffsetonColOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PreserveOffsetCP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L43)

```csharp
ref int PreserveOffsetCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L29)

```csharp
ref bool SetNormal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetPXYZOnly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L33)

```csharp
ref bool SetPXYZOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TraceAlongNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L35)

```csharp
ref bool TraceAlongNormal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TraceDirectionAttribute

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L37)

```csharp
ParticleAttributeIndex_t TraceDirectionAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### TraceMissBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L25)

```csharp
ref ParticleTraceMissBehavior_t TraceMissBehavior { get; }
```

#### Property Value

- [ParticleTraceMissBehavior_t](/docs/api/shared/schemadefinitions/particletracemissbehavior_t)

### TraceSet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L23)

```csharp
ref ParticleTraceSet_t TraceSet { get; }
```

#### Property Value

- [ParticleTraceSet_t](/docs/api/shared/schemadefinitions/particletraceset_t)

