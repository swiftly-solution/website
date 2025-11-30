---
title: C_OP_ForceBasedOnDistanceToPlane
---

# Interface C_OP_ForceBasedOnDistanceToPlane

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ForceBasedOnDistanceToPlane.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_ForceBasedOnDistanceToPlane : CParticleFunctionForce, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionForce>, ISchemaClass<C_OP_ForceBasedOnDistanceToPlane>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionForce](/docs/api/schemadefinitions/cparticlefunctionforce)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionForce>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_ForceBasedOnDistanceToPlane>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ControlPointNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ForceBasedOnDistanceToPlane.cs#L28)

```csharp
ref int ControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Exponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ForceBasedOnDistanceToPlane.cs#L30)

```csharp
ref float Exponent { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ForceAtMaxDist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ForceBasedOnDistanceToPlane.cs#L24)

```csharp
ref Vector ForceAtMaxDist { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ForceAtMinDist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ForceBasedOnDistanceToPlane.cs#L20)

```csharp
ref Vector ForceAtMinDist { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MaxDist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ForceBasedOnDistanceToPlane.cs#L22)

```csharp
ref float MaxDist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinDist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ForceBasedOnDistanceToPlane.cs#L18)

```csharp
ref float MinDist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlaneNormal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ForceBasedOnDistanceToPlane.cs#L26)

```csharp
ref Vector PlaneNormal { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

