---
title: C_OP_SetControlPointToImpactPoint
---

```csharp
public interface C_OP_SetControlPointToImpactPoint : CParticleFunctionPreEmission, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<CParticleFunctionPreEmission>, ISchemaClass<C_OP_SetControlPointToImpactPoint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CPIn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToImpactPoint.cs#L19)

```csharp
ref int CPIn { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CPOut

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToImpactPoint.cs#L17)

```csharp
ref int CPOut { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CollisionGroupName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToImpactPoint.cs#L31)

```csharp
string CollisionGroupName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### IncludeWater

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToImpactPoint.cs#L39)

```csharp
ref bool IncludeWater { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Offset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToImpactPoint.cs#L27)

```csharp
ref float Offset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SetToEndpoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToImpactPoint.cs#L35)

```csharp
ref bool SetToEndpoint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToImpactPoint.cs#L25)

```csharp
ref float StartOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TraceDir

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToImpactPoint.cs#L29)

```csharp
ref Vector TraceDir { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### TraceLength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToImpactPoint.cs#L23)

```csharp
CParticleCollectionFloatInput TraceLength { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### TraceSet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToImpactPoint.cs#L33)

```csharp
ref ParticleTraceSet_t TraceSet { get; }
```

#### Property Value

- [ParticleTraceSet_t](/docs/api/shared/schemadefinitions/particletraceset_t)

### TraceToClosestSurface

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToImpactPoint.cs#L37)

```csharp
ref bool TraceToClosestSurface { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToImpactPoint.cs#L21)

```csharp
ref float UpdateRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

