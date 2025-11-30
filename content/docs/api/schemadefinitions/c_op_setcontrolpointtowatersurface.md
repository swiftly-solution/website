---
title: C_OP_SetControlPointToWaterSurface
---

# Interface C_OP_SetControlPointToWaterSurface

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToWaterSurface.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_SetControlPointToWaterSurface : CParticleFunctionPreEmission, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<CParticleFunctionPreEmission>, ISchemaClass<C_OP_SetControlPointToWaterSurface>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionPreEmission](/docs/api/schemadefinitions/cparticlefunctionpreemission)
- [CParticleFunctionOperator](/docs/api/schemadefinitions/cparticlefunctionoperator)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionOperator>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionPreEmission>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_SetControlPointToWaterSurface>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActiveCP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToWaterSurface.cs#L24)

```csharp
ref int ActiveCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ActiveCPField

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToWaterSurface.cs#L26)

```csharp
ref int ActiveCPField { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AdaptiveThreshold

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToWaterSurface.cs#L30)

```csharp
ref bool AdaptiveThreshold { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DestCP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToWaterSurface.cs#L20)

```csharp
ref int DestCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FlowCP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToWaterSurface.cs#L22)

```csharp
ref int FlowCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RetestRate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToWaterSurface.cs#L28)

```csharp
CParticleCollectionFloatInput RetestRate { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### SourceCP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetControlPointToWaterSurface.cs#L18)

```csharp
ref int SourceCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

