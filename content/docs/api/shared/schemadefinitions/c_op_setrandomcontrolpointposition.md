---
title: C_OP_SetRandomControlPointPosition
---

```csharp
public interface C_OP_SetRandomControlPointPosition : CParticleFunctionPreEmission, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<CParticleFunctionPreEmission>, ISchemaClass<C_OP_SetRandomControlPointPosition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CP1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetRandomControlPointPosition.cs#L22)

```csharp
ref int CP1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CPMaxPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetRandomControlPointPosition.cs#L30)

```csharp
ref Vector CPMaxPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### CPMinPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetRandomControlPointPosition.cs#L28)

```csharp
ref Vector CPMinPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### HeadLocation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetRandomControlPointPosition.cs#L24)

```csharp
ref int HeadLocation { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Interpolation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetRandomControlPointPosition.cs#L32)

```csharp
CParticleCollectionFloatInput Interpolation { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### Orient

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetRandomControlPointPosition.cs#L20)

```csharp
ref bool Orient { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReRandomRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetRandomControlPointPosition.cs#L26)

```csharp
CParticleCollectionFloatInput ReRandomRate { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### UseWorldLocation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetRandomControlPointPosition.cs#L18)

```csharp
ref bool UseWorldLocation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

