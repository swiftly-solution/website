---
title: C_OP_ConstrainDistance
---

```csharp
public interface C_OP_ConstrainDistance : CParticleFunctionConstraint, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionConstraint>, ISchemaClass<C_OP_ConstrainDistance>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**CenterOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistance.cs#L22)

```csharp
ref Vector CenterOffset { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**ControlPointNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistance.cs#L20)

```csharp
ref int ControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**GlobalCenter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistance.cs#L24)

```csharp
ref bool GlobalCenter { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**MaxDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistance.cs#L18)

```csharp
CParticleCollectionFloatInput MaxDistance { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**MinDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistance.cs#L16)

```csharp
CParticleCollectionFloatInput MinDistance { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

