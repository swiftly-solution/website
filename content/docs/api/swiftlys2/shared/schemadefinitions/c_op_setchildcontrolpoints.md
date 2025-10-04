---
title: C_OP_SetChildControlPoints
---

```csharp
public interface C_OP_SetChildControlPoints : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_SetChildControlPoints>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ChildGroupID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetChildControlPoints.cs#L16)

```csharp
ref int ChildGroupID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**FirstControlPoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetChildControlPoints.cs#L18)

```csharp
ref int FirstControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**FirstSourcePoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetChildControlPoints.cs#L22)

```csharp
CParticleCollectionFloatInput FirstSourcePoint { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**NumControlPoints** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetChildControlPoints.cs#L20)

```csharp
ref int NumControlPoints { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Orientation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetChildControlPoints.cs#L28)

```csharp
ref ParticleOrientationType_t Orientation { get; }
```

#### Property Value

- [ParticleOrientationType_t](/docs/api/shared/schemadefinitions/particleorientationtype_t)

**Reverse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetChildControlPoints.cs#L24)

```csharp
ref bool Reverse { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SetOrientation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetChildControlPoints.cs#L26)

```csharp
ref bool SetOrientation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

