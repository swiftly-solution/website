---
title: C_OP_TimeVaryingForce
---

# Interface C_OP_TimeVaryingForce

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_TimeVaryingForce.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_TimeVaryingForce : CParticleFunctionForce, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionForce>, ISchemaClass<C_OP_TimeVaryingForce>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionForce](/docs/api/schemadefinitions/cparticlefunctionforce)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionForce>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_TimeVaryingForce>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EndLerpTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_TimeVaryingForce.cs#L22)

```csharp
ref float EndLerpTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EndingForce

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_TimeVaryingForce.cs#L24)

```csharp
ref Vector EndingForce { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### StartLerpTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_TimeVaryingForce.cs#L18)

```csharp
ref float StartLerpTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StartingForce

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_TimeVaryingForce.cs#L20)

```csharp
ref Vector StartingForce { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

