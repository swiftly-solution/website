---
title: C_OP_PlanarConstraint
---

```csharp
public interface C_OP_PlanarConstraint : CParticleFunctionConstraint, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionConstraint>, ISchemaClass<C_OP_PlanarConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ControlPointNumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PlanarConstraint.cs#L22)

```csharp
ref int ControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GlobalNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PlanarConstraint.cs#L26)

```csharp
ref bool GlobalNormal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GlobalOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PlanarConstraint.cs#L24)

```csharp
ref bool GlobalOrigin { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaximumDistanceToCP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PlanarConstraint.cs#L30)

```csharp
CParticleCollectionFloatInput MaximumDistanceToCP { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### PlaneNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PlanarConstraint.cs#L20)

```csharp
ref Vector PlaneNormal { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### PointOnPlane

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PlanarConstraint.cs#L18)

```csharp
ref Vector PointOnPlane { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### RadiusScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PlanarConstraint.cs#L28)

```csharp
CPerParticleFloatInput RadiusScale { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### UseOldCode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PlanarConstraint.cs#L32)

```csharp
ref bool UseOldCode { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

