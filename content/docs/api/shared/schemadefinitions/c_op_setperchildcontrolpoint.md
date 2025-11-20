---
title: C_OP_SetPerChildControlPoint
---

```csharp
public interface C_OP_SetPerChildControlPoint : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_SetPerChildControlPoint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ChildGroupID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetPerChildControlPoint.cs#L18)

```csharp
ref int ChildGroupID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FirstControlPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetPerChildControlPoint.cs#L20)

```csharp
ref int FirstControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FirstSourcePoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetPerChildControlPoint.cs#L26)

```csharp
CParticleCollectionFloatInput FirstSourcePoint { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### NumBasedOnParticleCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetPerChildControlPoint.cs#L32)

```csharp
ref bool NumBasedOnParticleCount { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NumControlPoints

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetPerChildControlPoint.cs#L22)

```csharp
ref int NumControlPoints { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OrientationField

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetPerChildControlPoint.cs#L30)

```csharp
ParticleAttributeIndex_t OrientationField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### ParticleIncrement

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetPerChildControlPoint.cs#L24)

```csharp
CParticleCollectionFloatInput ParticleIncrement { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### SetOrientation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetPerChildControlPoint.cs#L28)

```csharp
ref bool SetOrientation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

