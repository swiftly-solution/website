---
title: C_INIT_PositionPlaceOnGround
---

```csharp
public interface C_INIT_PositionPlaceOnGround : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_PositionPlaceOnGround>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Attribute** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L30)

```csharp
ParticleAttributeIndex_t Attribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**CollisionGroupName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L20)

```csharp
ISchemaFixedString CollisionGroupName { get; }
```

#### Property Value

- [ISchemaFixedString](/docs/api/shared/schemas/ischemafixedstring)

**IgnoreCP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L44)

```csharp
ref int IgnoreCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**IncludeWater** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L26)

```csharp
ref bool IncludeWater { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**MaxTraceLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L18)

```csharp
CPerParticleFloatInput MaxTraceLength { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

**Offset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L16)

```csharp
CPerParticleFloatInput Offset { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

**OffsetByRadiusFactor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L40)

```csharp
ref float OffsetByRadiusFactor { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**OffsetonColOnly** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L38)

```csharp
ref bool OffsetonColOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PreserveOffsetCP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L42)

```csharp
ref int PreserveOffsetCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SetNormal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L28)

```csharp
ref bool SetNormal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SetPXYZOnly** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L32)

```csharp
ref bool SetPXYZOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**TraceAlongNormal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L34)

```csharp
ref bool TraceAlongNormal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**TraceDirectionAttribute** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L36)

```csharp
ParticleAttributeIndex_t TraceDirectionAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**TraceMissBehavior** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L24)

```csharp
ref ParticleTraceMissBehavior_t TraceMissBehavior { get; }
```

#### Property Value

- [ParticleTraceMissBehavior_t](/docs/api/shared/schemadefinitions/particletracemissbehavior_t)

**TraceSet** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PositionPlaceOnGround.cs#L22)

```csharp
ref ParticleTraceSet_t TraceSet { get; }
```

#### Property Value

- [ParticleTraceSet_t](/docs/api/shared/schemadefinitions/particletraceset_t)

