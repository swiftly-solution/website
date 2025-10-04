---
title: C_OP_SetFromCPSnapshot
---

```csharp
public interface C_OP_SetFromCPSnapshot : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_SetFromCPSnapshot>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AttributeToRead** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L20)

```csharp
ParticleAttributeIndex_t AttributeToRead { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**AttributeToWrite** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L22)

```csharp
ParticleAttributeIndex_t AttributeToWrite { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**ControlPointNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L16)

```csharp
ref int ControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Interpolation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L36)

```csharp
CPerParticleFloatInput Interpolation { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

**LocalSpaceCP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L24)

```csharp
ref int LocalSpaceCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Prev** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L40)

```csharp
ref bool Prev { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Random** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L26)

```csharp
ref bool Random { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RandomSeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L30)

```csharp
ref int RandomSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Reverse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L28)

```csharp
ref bool Reverse { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SnapShotIncrement** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L34)

```csharp
CParticleCollectionFloatInput SnapShotIncrement { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**SnapShotStartPoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L32)

```csharp
CParticleCollectionFloatInput SnapShotStartPoint { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**StrSnapshotSubset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L18)

```csharp
string StrSnapshotSubset { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**SubSample** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetFromCPSnapshot.cs#L38)

```csharp
ref bool SubSample { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

