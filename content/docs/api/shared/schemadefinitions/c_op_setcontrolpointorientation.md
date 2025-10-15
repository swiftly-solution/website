---
title: C_OP_SetControlPointOrientation
---

```csharp
public interface C_OP_SetControlPointOrientation : CParticleFunctionPreEmission, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<CParticleFunctionPreEmission>, ISchemaClass<C_OP_SetControlPointOrientation>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointOrientation.cs#L23)

```csharp
ref int CP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HeadLocation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointOrientation.cs#L25)

```csharp
ref int HeadLocation { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Interpolation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointOrientation.cs#L31)

```csharp
CParticleCollectionFloatInput Interpolation { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### Randomize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointOrientation.cs#L19)

```csharp
ref bool Randomize { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Rotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointOrientation.cs#L27)

```csharp
ref QAngle Rotation { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### RotationB

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointOrientation.cs#L29)

```csharp
ref QAngle RotationB { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### SetOnce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointOrientation.cs#L21)

```csharp
ref bool SetOnce { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseWorldLocation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointOrientation.cs#L17)

```csharp
ref bool UseWorldLocation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

